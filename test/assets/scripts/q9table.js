function q9table(currentData,currentYear) {

   // console.log("q9table",currentYear,currentData);


    data = currentData.filter(function(d) { return d.Q14 != "" });


    


var table = d3.select("#q9table").append("table")
.attr("style", "margin-left: 250px"),
thead = table.append("thead"),
tbody = table.append("tbody");

table.append("caption")
.text(currentYear + ": Tableau de commentaire");

// append the header row
thead.append("tr")
.selectAll("th")
.data(['id', 'Commentaires'])
.enter()
.append("th")
.text(function(column) { return column; });

// create a row for each object in the data
var rows = tbody.selectAll("tr")
.data(data)
.enter()
.append("tr");

// create a cell in each row for each column
var cells = rows.selectAll("td")
.data(function(row) {
return ['id', 'Q14'].map(function(column) {
    return {column: column, value: row[column]};
});
})
.enter()
.append("td")
.attr("style", "font-family: Courier")
.html(function(d) { return d.value; });


}




    
