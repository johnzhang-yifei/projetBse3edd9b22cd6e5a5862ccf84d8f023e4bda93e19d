
function q3bar(currentData, currentYear) {

  // console.log("q3bar",currentYear, currentData);



    var data = [];
    var nbQ3A1=0, nbQ3A2=0, nbQ3A3=0, nbQ3A4=0, nbQ3A5=0;
    var totalCount = currentData.length;
    for(var i=0; i<totalCount; i++){
        if(currentData[i].Q3A=="Q3A1"){nbQ3A1++;}
        else if(currentData[i].Q3A=="Q3A2"){nbQ3A2++;}
        else if(currentData[i].Q3A=="Q3A3"){nbQ3A3++;}
        else if(currentData[i].Q3A=="Q3A4"){nbQ3A4++;}
        else if(currentData[i].Q3A=="Q3A5"){nbQ3A5++;}
        }	
    data.push(
        {Q3answer:"C’est déjà fait", count:nbQ3A1},
        {Q3answer:"Pendant mes études", count:nbQ3A2},
        {Q3answer:"Juste après mes études", count:nbQ3A3},
        {Q3answer:"Après avoir acquis une expérience professionnelle de quelques années", count:nbQ3A4},
        {Q3answer:"Autre", count:nbQ3A5}
    );
   //console.log(data);

    var barChartMargin = { top: 20, right: 120, bottom: 120, left: 50};
    var barChartWidth = 360 - barChartMargin.left - barChartMargin.right;
    var barChartHeight = 400 - barChartMargin.top - barChartMargin.bottom;
  

  
    var Q3answers = data.map(function(d){ return d.Q3answer; })
    var color = d3.scaleOrdinal(d3.schemeCategory10).domain(Q3answers);
    var x = d3.scaleBand()
             .domain(Q3answers)
             .range([0, barChartWidth])
             .round(0.05)
             .padding(0.2);
    var y = d3.scaleLinear()
             .domain([0, d3.max(data.map(function(d) { return d.count}))] )
             .range([barChartHeight, 0]);


    var xAxis = d3.axisBottom(x);
    var yAxis = d3.axisLeft(y).tickFormat(localization.getFormattedNumber);
  
    var barChartSvg = d3.select("#q3bar").append("svg")
    .attr("width", barChartWidth + barChartMargin.left + barChartMargin.right)
    .attr("height", barChartHeight + barChartMargin.top + barChartMargin.bottom);

    var barChartGroup = barChartSvg.append("g")
    .attr("transform", "translate(" + barChartMargin.left + "," + barChartMargin.top + ")");


    barChartGroup.append("text")
    .attr("class", "legend")
    .attr("y", -10)
    .attr("transform", "translate(-30,0)")
    .text(currentYear + " Year");

    
    barChartGroup.append("g")
    .attr("class", "x axis")
    .call(xAxis)
    .attr("transform", "translate(0," +  barChartHeight + ")")
    .selectAll("text")
    .attr("transform", "rotate(30)")
    .style("text-anchor", "start");


    barChartGroup.append("g")
    .attr("class", "yAxis")
    .call(yAxis)

    var tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .html(function(d) {
      let percent = d.count / (d3.sum(data, function(d){return d.count; }));  
      let text = d.Q3answer +"</br>"+ d.count + " (" + (percent*100).toFixed(1) + "% ) répondants";
      return text;
    });


    barChartGroup.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", function(d) {return x(d.Q3answer)})
    .attr("width", x.bandwidth())
    .attr("y", function(d) { return y(d.count)})
    .attr("height", function(d) { return barChartHeight - y(d.count); })
    .attr("fill", function(d) { return color(d.Q3answer); })
    .on("mouseover", tip.show)
    .on("mouseout", tip.hide);

    barChartSvg.call(tip);

}

