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

  console.log(nFLoat)
  
  // Creating chart
  
    const ctx = document.getElementById('newGraph'); // Throws error, running in  a non-browser environment.

    // Since I can't make the charts themselves yet, I cant just create the box for the graphs to be used in, and then
    // Fill them in later.

    //Create dropbox with the raw data, and try having the user download from there. 

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: nFloat,
        datasets: [{
          label: 'Enter string here',
          data: CPCCFloat,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
});

// Open the navigation 
function openNav() {
    document.getElementById("Sidenav").style.width = "250px";
  }

  
// Close the navigation 
function closeNav() {
  document.getElementById("Sidenav").style.width = "0";
}
