/* 
Filename: complexCode.js
Content: Complex JavaScript code example demonstrating a real-world problem-solving scenario.
*/

// Importing dependencies
const fs = require('fs');
const csv = require('csv-parser');

// Function to read and process CSV file
function processCSVFile(filepath) {
  const data = [];

  // Read CSV file
  fs.createReadStream(filepath)
    .pipe(csv())
    .on('data', (row) => {
      data.push(row);
    })
    .on('end', () => {
      // Process data
      const processedData = processData(data);
      
      // Perform further calculations
      const result = performCalculations(processedData);
      
      // Display final result
      console.log('Final Result:', result);
    });
}

// Function to process CSV data
function processData(data) {
  let processedData = [];
  
  // Perform data manipulation and filtering
  data.forEach((row) => {
    if (row.status === 'active') {
      processedData.push({
        id: row.id,
        name: capitalizeString(row.name),
        quantity: parseInt(row.quantity),
        price: parseFloat(row.price),
      });
    }
  });
  
  return processedData;
}

// Function to capitalize string
function capitalizeString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Function to perform calculations
function performCalculations(data) {
  let result = 0;
  
  // Calculate total cost
  data.forEach((item) => {
    result += item.quantity * item.price;
  });
  
  return result.toFixed(2);
}

// Entry point
function main() {
  const filepath = 'data.csv';
  
  // Process CSV file
  processCSVFile(filepath);
}

// Start the program
main();