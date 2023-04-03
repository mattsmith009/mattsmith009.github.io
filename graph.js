import fs from'fs';
import csv from 'csv-parser';
const results = [];
const costPerCC = []
const N = []

// Use an array and for loop to get csv file data from all 12 files.
fs.createReadStream('raw_data/cost_data_12709_m100.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
  for(let i = 0; i < results.length; i++) {
      costPerCC.push(results[i].costPerCC);
      N.push(results[i].N);
  };

  var nFloat = N.map(function(str) {
    return parseFloat(str); });

  var CPCCFloat = costPerCC.map(function(str) {
    return parseFloat(str); });

  console.log(nFloat, CPCCFloat)
    }
  )

//import d3 from "d3-selection";

// Open the navigation 
function openNav() {
    document.getElementById("Sidenav").style.width = "250px";
  }

  
// Close the navigation 
function closeNav() {
  document.getElementById("Sidenav").style.width = "0";
  }

  // Slide functions
  /*
  Window.onload = slideFunction();
  function slideFunction() {
    console.log("This will be the slide functionality")
  }
  */

// Creating charts
/*
d3.csv("cost_data_12709_m100.csv").then(makeChart);

function makeChart(costCurve) {
  var costPerCC = costCurve.map(function (d) {
    return d.costPerCC;
  });
  var N = costCurve.map(function (d) {
    return d.N;
  });

  console.log(N)
}
*/

