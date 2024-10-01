## County Choropleth Map Generator<br>
*Description*<br>
This Python script generates choropleth maps of county-level data by state, allowing users to visualize various metrics across counties within a state while maintaining consistent color scaling across all states for easy comparison.<br>
<br>
*Requirements*<br>
Python 3.x<br>
pandas<br>
geopandas<br>
matplotlib<br>
requests<br>
<br>
*Data Files*<br>
meatpacking final.csv: Contains county-level data from Census 2019 (must be in the same directory as the script)<br>
GeoJSON data is automatically fetched from: https://raw.githubusercontent.com/CodeForCary/CountyDataUSA5m/refs/heads/master/cb_2017_us_county_5m.json<br>
<br>
*Installation*<br>
Copy: !pip install pandas geopandas matplotlib requests<br>
<br>
*Usage*<br>
Ensure all required libraries are installed<br>
Place the script in the same directory as meatpacking final.csv<br>
Run the script<br>
Follow the interactive prompts:<br>
<br>
Choose to create a new map or exit<br>
Enter the name of the state you want to visualize<br>
Select the data column you want to map<br>
View the generated map<br>
Choose to create another map or exit<br>
<br>
*Features*<br>
Interactive menu-driven interface<br>
Consistent color scaling across all state maps for easy comparison<br>
Automatic county name standardization and matching<br>
Detailed debug output for troubleshooting<br>
Support for all 50 U.S. states<br>
Ability to visualize any numeric column from the input data<br>
<br>
*Output*<br>
The script provides:<br>
Interactive choropleth maps for chosen states and metrics<br>
Debug information about county matching<br>
Consistent color scales across different state maps<br>
Options to create multiple maps in one session<br>
<br>
*Data Format*<br>
The input CSV file (meatpacking final.csv) should contain:<br>
A county column with entries in the format: "County Name County, State"<br>
Additional numeric columns that can be visualized on the map<br>
<br>
*Notes*<br>
County names are automatically standardized (removing "County" and handling case differences)<br>
The color scale for each map uses the full range of the selected metric across all states<br>
Counties with missing data are shown in light grey<br>
The script provides detailed debugging output to help identify any county matching issues<br>
<br>
*Troubleshooting*<br>
If no data appears on the map:<br>
Check the format of county names in your CSV<br>
Review the debug output for mismatches between GeoJSON and CSV county names<br>
Ensure the selected data column contains numeric values<br>
