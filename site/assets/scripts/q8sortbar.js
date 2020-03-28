
function q8sortbar(currentData,currentYear) {

  //  console.log("q8sortbar",currentYear,currentData);
  
  
     var data = [];
     var nbQ8A=0, nbQ8B=0, nbQ8C=0, nbQ8D=0, nbQ8E=0, 
          nbQ8F=0, nbQ8G=0, nbQ8H=0, nbQ8I=0;
     var totalCount = currentData.length;
     for(var i=0; i<totalCount; i++){
         if(currentData[i].Q8A=="Oui"){nbQ8A++;}
         else if(currentData[i].Q8B=="Oui"){nbQ8B++;}
         else if(currentData[i].Q8C=="Oui"){nbQ8C++;}
         else if(currentData[i].Q8D=="Oui"){nbQ8D++;}       
         else if(currentData[i].Q8E=="Oui"){nbQ8E++;}
         else if(currentData[i].Q8F=="Oui"){nbQ8F++;}
         else if(currentData[i].Q8G=="Oui"){nbQ8G++;}
         else if(currentData[i].Q8H!= null){nbQ8H++;}
         }	

     data.push(
         {Q8answer:"Réseaux sociaux de Polytechnique", count:nbQ8A},
         {Q8answer:"Réseaux sociaux des comités étudiants", count:nbQ8B},
         {Q8answer:"Infolettre courriel de Polytechnique (Infolettre hebdomadaire INFOPOLY, Infolettre « Cette semaine à Poly»)", count:nbQ8C},
         {Q8answer:"Courriel spécifique « entrepreneuriat »", count:nbQ8D},
         {Q8answer:"Affiches", count:nbQ8E},
         {Q8answer:"Kiosque", count:nbQ8F},
         {Q8answer:"Cela ne m’intéresse pas", count:nbQ8G},
         {Q8answer:"Autre", count:nbQ8H}
     );
     data.sort(function (a, b) { return b.count - a.count;  });
  
  //  console.log(data);
  
     var barChartMargin = { top: 30, right: 10, bottom: 180, left: 30};
     var barChartWidth = 720 - barChartMargin.left - barChartMargin.right;
     var barChartHeight = 450 - barChartMargin.top - barChartMargin.bottom;
  
     var Q8answers = data.map(function(d){ return d.Q8answer; })
     var color = d3.scaleOrdinal(d3.schemeCategory10).domain(Q8answers);
     var x = d3.scaleBand()
              .domain(Q8answers)
              .range([0, barChartWidth])
              .round(0.05)
              .padding(0.2);
     var y = d3.scaleLinear()
              .domain([0, d3.max(data.map(function(d) { return d.count}))] )
              .range([barChartHeight, 0]);
  
     var xAxis = d3.axisBottom(x);
     var yAxis = d3.axisLeft(y).scale(y);
   
     var barChartSvg = d3.select("#q8sortbar").append("svg")
     .attr("width", barChartWidth + barChartMargin.left + barChartMargin.right)
     .attr("height", barChartHeight + barChartMargin.top + barChartMargin.bottom);
  
     var barChartGroup = barChartSvg.append("g")
     .attr("transform", "translate(" + barChartMargin.left + "," + barChartMargin.top + ")");
  
  
     barChartGroup.append("text")
     .attr("class", "legend")
     .attr("y", -10)
     .attr("transform", "translate(-30,0)")
     .text(currentYear + " Year: Moyens de Communication");
  
     
     barChartGroup.append("g")
     .attr("class", "x axis")
     .call(xAxis)
     .attr("transform", "translate(0," +  barChartHeight + ")")
     .selectAll("text")
     .attr("transform", "rotate(10)")
     .style("text-anchor", "start");
  
  
     barChartGroup.append("g")
     .attr("class", "yAxis")
     .call(yAxis)
  
     var tip = d3.tip()
     .attr('class', 'd3-tip')
     .offset([-10, 0]);
  
  
  
     barChartGroup.selectAll("rect")
     .data(data)
     .enter()
     .append("rect")
     .attr("x", function(d) {return x(d.Q8answer)})
     .attr("width", x.bandwidth())
     .attr("y", function(d) { return y(d.count)})
     .attr("height", function(d) { return barChartHeight - y(d.count); })
     .attr("fill", function(d) { return color(d.Q8answer); })
     .on("mouseover", tip.show)
     .on("mouseout", tip.hide);
  
  
  
     tip.html(function(d) {
         let percent = d.count / (d3.sum(data, function(d){return d.count; }));  
         let text =  d.Q8answer+"</br>"+ d.count + " (" + (percent*100).toFixed(1) + "% ) répondants";
         return text;
       });
  
       barChartSvg.call(tip);
  
  
  }