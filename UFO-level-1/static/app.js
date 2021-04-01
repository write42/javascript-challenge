// from data.js
var tableData = data;

// YOUR CODE HERE!
var form = d3.select("#form");

var button = d3.select("#filter.btn");

var tbody = d3.select("tbody");

form.on("click",runEnter);
button.on("submit",runEnter);

function runEnter(){
    d3.event.preventDefault();
    var input = d3.select("#datetime");
    var inputVal = input.property("value");
    console.log(inputVal);
    console.log(tableData);
};