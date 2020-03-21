// from data.js assign array of objects to descriptive variable
var ufoData = data;
// console.log(ufoData);
// Select the button
var button = d3.select("#filter-btn");
var tbody = d3.select("tbody");

// console.log(button);
inputIds = ["#datetime","#city","#state","#country","#shape"];
inputKeys = ["datetime","city","state","country","shape"];

// function to return true or false if input element has a value
function checkInput(id) {
    var inputElement = d3.select(id);
    var inputValue = inputElement.property("value");
    if (inputValue === "" || inputValue === null) {
        return false;
    }
    else{
        return true;
    }
}

// filter dataset with passed element id, data.js key value and dataset to filter
function filterData(id,key,dataset) {
    var inputElement = d3.select(id);
    
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    var filteredData = dataset.filter(sighting => sighting[key] === inputValue);
    console.log(filteredData);

    return filteredData;
}

button.on("click", function(){


    var tableData = filterData("#datetime","datetime",ufoData);
    // console.log(tableData);
    // Clear any rows and cells from prior taby (if any)
    tbody.html("");

    tableData.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });


});