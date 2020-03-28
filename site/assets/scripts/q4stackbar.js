
function q4stackbar(currentData,currentYear) {

  //console.log("q4stackbar",currentYear,currentData)


var nbQ4A1=0, nbQ4B1=0, nbQ4C1=0, 
    nbQ4A2=0, nbQ4B2=0, nbQ4C2=0, 
    nbQ4A3=0, nbQ4B3=0, nbQ4C3=0, 
    nbQ4A4=0, nbQ4B4=0, nbQ4C4=0, 
    nbQ4A5=0, nbQ4B5=0, nbQ4C5=0, 
    nbQ4A6=0, nbQ4B6=0, nbQ4C6=0, 
    nbQ4A7=0, nbQ4B7=0, nbQ4C7=0, 
    nbQ4A8=0, nbQ4B8=0, nbQ4C8=0;
var totalCount = currentData.length;
for(var i=0; i<totalCount; i++){
    if(currentData[i].Q4A=="Q41"){nbQ4A1++;}
    else if(currentData[i].Q4A=="Q42"){nbQ4A2++;}
    else if(currentData[i].Q4A=="Q43"){nbQ4A3++;}
    else if(currentData[i].Q4A=="Q44"){nbQ4A4++;}
    else if(currentData[i].Q4A=="Q45"){nbQ4A5++;}
    else if(currentData[i].Q4A=="Q46"){nbQ4A6++;}
    else if(currentData[i].Q4A=="Q47"){nbQ4A7++;}
    else if(currentData[i].Q4A=="Q48"){nbQ4A8++;}


    if(currentData[i].Q4B=="Q41"){nbQ4B1++;}
    else if(currentData[i].Q4B=="Q42"){nbQ4B2++;}
    else if(currentData[i].Q4B=="Q43"){nbQ4B3++;}
    else if(currentData[i].Q4B=="Q44"){nbQ4B4++;}
    else if(currentData[i].Q4B=="Q45"){nbQ4B5++;}
    else if(currentData[i].Q4B=="Q46"){nbQ4B6++;}
    else if(currentData[i].Q4B=="Q47"){nbQ4B7++;}
    else if(currentData[i].Q4B=="Q48"){nbQ4B8++;}

    if(currentData[i].Q4C=="Q41"){nbQ4C1++;}
    else if(currentData[i].Q4C=="Q42"){nbQ4C2++;}
    else if(currentData[i].Q4C=="Q43"){nbQ4C3++;}
    else if(currentData[i].Q4C=="Q44"){nbQ4C4++;}
    else if(currentData[i].Q4C=="Q45"){nbQ4C5++;}
    else if(currentData[i].Q4C=="Q46"){nbQ4C6++;}
    else if(currentData[i].Q4C=="Q47"){nbQ4C7++;}
    else if(currentData[i].Q4C=="Q48"){nbQ4C8++;}
    
    }	
    
var data = [
  {Year: currentYear, Motif: "Des idées de projet", "1er choix": nbQ4A1, "2eme choix":nbQ4B1, "3eme choix":nbQ4C1, total: nbQ4A1+nbQ4B1+nbQ4C1},
  {Year: currentYear, Motif: "Des besoins ou problèmes", "1er choix": nbQ4A2, "2eme choix":nbQ4B2, "3eme choix":nbQ4C2, total: nbQ4A2+nbQ4B2+nbQ4C2},
  {Year: currentYear, Motif: "Trouver des co-fondateurs", "1er choix": nbQ4A3, "2eme choix":nbQ4B3, "3eme choix":nbQ4C3, total:nbQ4A3+nbQ4B3+nbQ4C3},
  {Year: currentYear, Motif: "Joindre une équipe", "1er choix": nbQ4A4, "2eme choix":nbQ4B4, "3eme choix":nbQ4C4, total: nbQ4A4+nbQ4B4+nbQ4C4 },
  {Year: currentYear, Motif: "Plus de compétences", "1er choix": nbQ4A5, "2eme choix":nbQ4B5, "3eme choix":nbQ4C5, total: nbQ4A5+nbQ4B5+nbQ4C5 },
  {Year: currentYear, Motif: "Plus de temps", "1er choix": nbQ4A6, "2eme choix":nbQ4B6, "3eme choix":nbQ4C6, total: nbQ4A6+nbQ4B6+nbQ4C6 },
  {Year: currentYear, Motif: "Un mentor entrepreneur", "1er choix": nbQ4A7, "2eme choix":nbQ4B7, "3eme choix":nbQ4C7, total: nbQ4A7+nbQ4B7+nbQ4C7 },
  {Year: currentYear, Motif: "Du financement", "1er choix": nbQ4A8, "2eme choix":nbQ4B8, "3eme choix":nbQ4C8, total: nbQ4A8+nbQ4B8+nbQ4C8 }
];
//console.log(data)
chart(data,currentYear)

function chart(csv, currentYear) {
  
	var keys = Object.keys(csv[1]).slice(2,5);

  var year   = [...new Set(csv.map(d => d.Year))]
  
	var motifs = [...new Set(csv.map(d => d.Motif))]

	var svg = d3.select('#q4stackbar').append("svg").attr("width", 560).attr("height", 378),
		margin = {top: 15, left: 50, bottom: 50, right: 80},
		width = 570 - margin.left - margin.right,
		height = 390 - margin.top - margin.bottom;

	var x = d3.scaleBand()
		.range([margin.left, width - margin.right])
		.padding(0.3)

	var y = d3.scaleLinear()
		.rangeRound([height - margin.bottom, margin.top])

	var xAxis = svg.append("g")
		.attr("transform", `translate(0,${height - margin.bottom})`)
		.attr("class", "x-axis")

	var yAxis = svg.append("g")
		.attr("transform", `translate(${margin.left},0)`)
		.attr("class", "y-axis")


  var color = d3.scaleOrdinal(d3.schemeCategory10).domain(keys);
  
  var tip = d3.tip()
      .attr('class', 'd3-tip')
      .offset([-10, 0])
      .html(function(d,i) {
         console.log(d,i);
        let text =  "% ) répondants:" ;
        return text;
      });

	update(currentYear, 0, 0)

	function update(input, speed, choix) {

		var data = csv.filter(f => f.Year == input)

		data.forEach(function(d) {
			d.total = d3.sum(keys, k => +d[k])
			return d
		})

		y.domain([0, d3.max(data, d => d3.sum(keys, k => +d[k]))]);

		svg.selectAll(".y-axis").transition().duration(speed)
			.call(d3.axisLeft(y).ticks(null, "s"))

		if(choix==0){    data.sort(d3.select("#q4sort").property("checked")
			? (a, b) => b.total - a.total
      : (a, b) => motifs.indexOf(a.Motif) - motifs.indexOf(b.Motif))}
      else if (choix == 1){data.sort((a, b) => b["1er choix"] - a["1er choix"])}
      else if (choix == 2){data.sort((a, b) => b["2eme choix"] - a["2eme choix"])}
      else if (choix == 3){data.sort((a, b) => b["3eme choix"] - a["3eme choix"])}


		x.domain(data.map(d => d.Motif));

		svg.selectAll(".x-axis").transition().duration(speed)
      .call(d3.axisBottom(x).tickSizeOuter(0))
      .selectAll("text")
      .attr("transform", "rotate(30)")
      .style("text-anchor", "start");
    

		var group = svg.selectAll("g.layer")
			.data(d3.stack().keys(keys)(data), d => d.key)

		

		group.enter().append("g")
          .classed("layer", true)
          .attr("fill", d => color(d.key));

		var bars = svg.selectAll("g.layer").selectAll("rect")
		          	.data(d => d, e => e.data.Motif);

		

		bars.enter().append("rect")
			.attr("width", x.bandwidth())
			.merge(bars)
	  	.transition().duration(speed)
			.attr("x", d => x(d.data.Motif))
			.attr("y", d => y(d[1]))
      .attr("height", d => y(d[0]) - y(d[1]));

		var text = svg.selectAll(".text")
			.data(data, d => d.Motif);

		

		text.enter().append("text")
			.attr("class", "text")
			.attr("text-anchor", "middle")
			.merge(text)
		  .transition().duration(speed)
			.attr("x", d => x(d.Motif) + x.bandwidth() / 2)
			.attr("y", d => y(d.total) - 5)
      .text(d => d.total)
      


      var checkbox = d3.select("#q4sort")
      .on("click", function() {
        update(input, 450, 0)
      })

  
      //bars.call(tip);

      var legendRectSize = 10;
      var legendSpacing = 10;
      var legendX = 390;
      var legendY = 30;
      var legendMargin = 8;
      var legend = svg.append("g")
          .selectAll("g")
          .data(color.domain())
          .enter()
          .append('g')
            .attr('transform', function(d, i) {
              var height = legendRectSize + legendMargin;
              var x = 0;
              var y = i * height;
              return 'translate(' + x + ',' + y + ')';
          });
      
      legend.append('rect')
          .attr('width', legendRectSize)
          .attr('height', legendRectSize)
          .attr('x', legendX)
          .attr('y', legendY)
          .attr("id", function(d){ 
            
            return d + "Rect";      
          })
          .attr("class", "legend")
          .style("fill", function(d){ return  color(d);  })
          .on("click", function(d) {//console.log(d);
            if(d=="1er choix"){update(input, 450, 1)}
            else if(d=="2eme choix"){update(input, 450, 2)}
            else if(d=="3eme choix"){update(input, 450, 3)}            
          });
      

      
      legend.append('text')
          .attr('x', legendX + legendRectSize + legendSpacing)
          .attr('y', legendY + legendRectSize - legendSpacing + legendMargin)
          .text(function(d) { return d+"(Cliquez d'ici)"; })
          .attr('font-size', 12)
          .on("click", function(d) {//console.log(d);
            if(d=="1er choix"){update(input, 450, 1)}
            else if(d=="2eme choix"){update(input, 450, 2)}
            else if(d=="3eme choix"){update(input, 450, 3)}
            
          });
      
     

	}


}



}