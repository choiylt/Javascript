// from data.js
var tableData = data;
var filter = d3.select("#filter-btn");
var tbody = d3.select("tbody");

tableData.forEach(function(UFO) {
   console.log(UFO);
   var row = tbody.append("tr");
   Object.entries(UFO).forEach(function([key, value]) {
     console.log(key, value);
     var cell = row.append("td");
     cell.text(value);
   });
});

filter.on("click", function() {

  d3.event.preventDefault();

  var inputElement = d3.select("#datetime");

  var inputValue = inputElement.property("value");

  console.log(inputValue);

  var filteredData = data.filter(x => x.datetime === inputValue);

  console.log(filteredData);

  var node = document.getElementById("tada");
  while (node.hasChildNodes()) {
    node.removeChild(node.lastChild);
  }

  filteredData.forEach(function(UFO) {
     console.log(UFO);
     var row = tbody.append("tr");
     Object.entries(UFO).forEach(function([key, value]) {
       console.log(key, value);
       var cell = row.append("td");
       cell.text(value);
     });
  });

});