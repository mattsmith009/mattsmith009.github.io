const csv = require('csv-parser')
const fs = require('fs')
const results = [];
const costPerCC = []
const N = []

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
  })

// Open the navigation 
function openNav() {
    document.getElementById("Sidenav").style.width = "250px";
  }

  
// Close the navigation 
function closeNav() {
  document.getElementById("Sidenav").style.width = "0";
  }

