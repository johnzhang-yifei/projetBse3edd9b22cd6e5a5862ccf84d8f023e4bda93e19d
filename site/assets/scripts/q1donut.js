function q1donut(currentData, currentYear) {
   // console.log("q1donut",currentData);
var data = [];
var nbOui=0, nbNon=0, nbPeutetre=0;
var totalCount = currentData.length;
for(var i=0; i<totalCount; i++){
    if(currentData[i].Q1=="Oui"){nbOui++;}
    else if(currentData[i].Q1=="Non"){nbNon++;}
    else if(currentData[i].Q1=="Peut-être"){nbPeutetre++;}
    }	
data.push(
    {Q1answer:"Oui", count:nbOui},
    {Q1answer:"Peut-être", count:nbPeutetre},
    {Q1answer:"Non", count:nbNon}
);

var color = d3.scaleOrdinal(d3.schemeCategory10);
color.domain(data.map(function(d){ return d.Q1answer; }));
//console.log(data);
  var width = 360,
  height = 360,
  radius = 100;

  var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0]);

      var arc = d3.arc()
      .outerRadius(radius - 20)
      .innerRadius(120);

      var pie = d3.pie()
      .sort(null)
      .value(function(d) {return d.count;});

      var svg = d3.select('#q1donut').append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  var donutchart = svg.selectAll(".arc")
    .data(pie(data))
    .enter()
    .append("g")
    .on("mouseover", tip.show)
    .on("mouseout", tip.hide);    

    donutchart.append("text")
    .attr("text-anchor", "middle")
    .attr('font-size', '1.5em')
    .attr('y', 0)
    .text(currentYear+ " Year");

    donutchart.append("text")
    .attr("text-anchor", "middle")
    .attr('font-size', '1em')
    .attr('y', 20)
    .text("Total " + totalCount + " Répondants");

    donutchart.append("path")
      .attr("d", arc)
      .attr("fill", function(d,i) {return color(d.data.Q1answer);});

    donutchart.append("text")
      .attr("transform", function(d) {
      var a = arc.centroid(d);
      a[0] *= 1.55;	
      a[1] *= 1.55;	
      return "translate(" + a + ")";
    })
    .attr("dy", ".55em")
    .attr("text-anchor", "middle")
    .text(function(d) {
      return d.data.Q1answer + ": "+ (d.data.count*100/totalCount).toFixed(0)  + '%';
    });
      

    tip.html(function(d) {//console.log(d.data.Q1answer);
        
        return d.data.Q1answer +":</br>" + d.data.count + " (" + (d.data.count*100/ totalCount).toFixed(1) + "% ) répondants";
        
      });

    donutchart.call(tip);

}