// from data.js
let tableData = data;
let table = d3.select("#ufo-table")
function constructTable(input){
     // First, clear out any existing data
    table.html("");
    input.forEach(x => {
        // creates a new html tag that will be appended to the table
        let row = table.append("tr")
        console.log(Object.values(x))
        Object.values(x).forEach((val) => {
            let cell = row.append("td");
              cell.text(val);
            })
        console.log(x['city'])
    })
}
constructTable(tableData)

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);
function handleClick() {
    let input = d3.select("#datetime").property("value")
    console.log(input)
    let result = tableData.filter(word => word["datetime"] == input);
    constructTable(result)
}