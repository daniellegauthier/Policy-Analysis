# Emissions Data Processing Script

## Description

This Python script processes emissions data for counties, to provide a comprehensive view of emissions by state and county.

## Requirements

- Python 3.x
- pandas
- numpy

## Data Files

- meatpacking final.csv: Contains emissions data
- 'https://raw.githubusercontent.com/kjhealy/fips-codes/master/county_fips_master.csv', encoding='latin-1': Contains county FIPS data

## Usage

1. Ensure all required libraries are installed.
2. Place the script in the same directory as the 'meatpacking final.csv' file.
3. Run the script.
4. When prompted, enter the full name of the state you want to analyze.
5. The script will process the data and display a summary.
6. You can then view data for specific counties within the chosen state.

## Features

- Processes large datasets in chunks to manage memory efficiently
- Merges emissions data with FIPS data for comprehensive analysis
- Calculates average values for key indicators
- Allows user to explore data by state and county

## Output

The script provides:

- A summary of processed data for the chosen state
- Detailed information for individual counties
- Option to save processed data to a CSV file

## Notes

Ensure that the input CSV files are correctly formatted and contain the expected columns. The script includes error handling for common issues, but may require adjustment.
