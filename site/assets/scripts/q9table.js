function q9table(currentData,currentYear) {

   // console.log("q9table",currentYear,currentData);


 let   data = currentData.filter(function(d) { return d.Q14 != "" });
 
 let nbRepondant = currentData.length, 
    nbcommentaire = data.length;

 //   console.log(nbRepondant,nbcommentaire)


let table = d3.select("#q9table").append("table")
.attr("style", "margin-left: 20px"),
thead = table.append("thead"),
tbody = table.append("tbody");

table.append("caption")
.text("Tableau de l'année "+ currentYear + ": "+nbRepondant +" répondants, "+ nbcommentaire+" commentaires.");

// append the header row
thead.append("tr")
.selectAll("th")
.data(['id', 'Commentaires'])
.enter()
.append("th")
.text(function(column) { return column; });

// create a row for each object in the data
let rows = tbody.selectAll("tr")
.data(data)
.enter()
.append("tr");

// create a cell in each row for each column
let cells = rows.selectAll("td")
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




    
