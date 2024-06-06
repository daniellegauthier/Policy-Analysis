let census, selection, description = '';
let county = [], internet = [], education = [], population = [];
let temp = [], humidity = [], emissions = [], state = [];
let diameter = 9, serial;
let latestData = "waiting for data";
let myCanvas, sel, sel2;
let font1;

function preload() {
  census = loadTable('meatpacking final.csv', 'csv', 'header');
  font1 = loadFont("AbhayaLibre-Regular.ttf");
}

function setup() {
  myCanvas = createCanvas(windowWidth, windowHeight);
  cursor(HAND);
  textFont(font1);

  let numRows = census.getRowCount();

  county = census.getColumn(0);
  state = census.getColumn(1);
  internet = census.getColumn(2);
  education = census.getColumn(3);
  population = census.getColumn(4);
  temp = census.getColumn(5);
  humidity = census.getColumn(6);
  emissions = census.getColumn(7);

  serial = new p5.SerialPort();
  serial.list();
  serial.open('COM3');
  serial.on('connected', serverConnected);
  serial.on('list', gotList);
  serial.on('data', gotData);
  serial.on('error', gotError);
  serial.on('open', gotOpen);
  serial.on('close', gotClose);

  // Position drop-downs below the graph
  sel = createSelect();
  sel.position(20, height * 0.75 + 40);
  sel.option("State");
  sel.selected("State");

  for (let i = 1; i < numRows; i++) {
    sel.option(state[i], i);
  }

  sel.changed(changeState);

  sel2 = createSelect();
  sel2.position(200, height * 0.75 + 40);
  sel2.option("County");
  sel2.changed(changeCounty);

  c1 = color(204, 102, 0);
  c2 = color(0, 102, 153);
}

function changeState() {
  sel2.remove();
  sel2 = createSelect();
  sel2.option("County");
  sel2.position(200, height * 0.75 + 40);
  sel2.changed(changeCounty);

  for (let i = 1; i < census.getRowCount(); i++) {
    if (state[i] == state[sel.selected()]) {
      sel2.option(county[i]);
    }
  }
}

function changeCounty() {
  for (let i = 0; i < census.getRowCount(); i++) {
    if (county[i] == sel2.selected()) {
      selection = i;
      description = `You selected: ${county[selection]}. The population is ${population[selection]}. The internet usage in households is ${internet[selection]}%. The education rate of adults over 25 is ${education[selection]}%. The emissions number is ${emissions[selection]}. The humidity is ${humidity[selection]}%. The average temperature is ${temp[selection]}*F.`;
    }
  }
}

function draw() {
  background(220);
  strokeWeight(0.5);

  let graphHeight = height * 0.7; // Ensure space at the bottom for description and dropdowns

  for (let i = 1; i < census.getRowCount() + 1; i++) {
    let x = map(internet[i], 15, 110, 0, width);
    let y = map(education[i], 0, 220, 0, graphHeight);
    let l = map(emissions[i], 0, 375, 1, 0);
    fill(lerpColor(c1, c2, l));
    circle(x, y, diameter);
    textSize(14);
    textAlign(CENTER);
    text(county[i], x, y);
  }

  textSize(15);
  textAlign(LEFT);
  text("Explore Human Activity in the Anthropocene", 20, height * 0.75 + 20, width - 40); // Title

  text(description, 20, height * 0.75 + 80, width - 40);
  
  // Limit the serial port text length and position it below the output text
  let serialText = latestData.substring(0, min(40, latestData.length)); // Limit to 40 characters
  text(serialText, 20, height * 0.75 + 140, width - 40);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function serverConnected() {
  print("Connected to Server");
}

function gotList(thelist) {
  print("List of Serial Ports:");
  for (let i = 0; i < thelist.length; i++) {
    print(i + " " + thelist[i]);
  }
}

function gotOpen() {
  print("Serial Port is Open");
}

function gotClose() {
  print("Serial Port is Closed");
  latestData = "Serial Port is Closed";
}

function gotError(theerror) {
  print(theerror);
}

function gotData() {
  let currentString = serial.readLine().trim();
  if (currentString) {
    console.log(currentString);
    latestData = currentString;
  }
}