
function q7sortbar(currentData,currentYear) {

  //console.log("q7sortbar",currentYear,currentData);


   var data = [];
   var nbQ7A=0, nbQ7B=0, nbQ7C=0, nbQ7D=0, nbQ7E=0, 
        nbQ7F=0, nbQ7G=0, nbQ7H=0, nbQ7I=0;
   var totalCount = currentData.length;
   for(var i=0; i<totalCount; i++){
       if(currentData[i].Q7A=="Oui"){nbQ7A++;}
       else if(currentData[i].Q7B=="Oui"){nbQ7B++;}
       else if(currentData[i].Q7C=="Oui"){nbQ7C++;}
       else if(currentData[i].Q7D=="Oui"){nbQ7D++;}       
       else if(currentData[i].Q7E=="Oui"){nbQ7E++;}
       else if(currentData[i].Q7F=="Oui"){nbQ7F++;}
       else if(currentData[i].Q7G=="Oui"){nbQ7G++;}
       else if(currentData[i].Q7H=="Oui"){nbQ7H++;}
       else if(currentData[i].Q7I!= null){nbQ7I++;}
       }	
   data.push(
       {Q7answer:"Polyfab Normand Brais", count:nbQ7A},
       {Q7answer:"Centre d’entrepreneuriat Poly-UdeM", count:nbQ7B},
       {Q7answer:"Poly-E", count:nbQ7C},
       {Q7answer:"Cours en entrepreneuriat technologique", count:nbQ7D},
       {Q7answer:"Orientation thématique en innovation et entrepreneuriat technologique", count:nbQ7E},
       {Q7answer:"Stages entrepreneuriaux", count:nbQ7F},
       {Q7answer:"Accès à un conseiller/coach", count:nbQ7G},
       {Q7answer:"Je n’en connais aucune", count:nbQ7H},
       {Q7answer:"Autre", count:nbQ7I}
   );
   
   data.sort(function (a, b) { return b.count - a.count;  });


  //console.log(data);

   var barChartMargin = { top: 30, right: 10, bottom: 180, left: 30};
   var barChartWidth = 720 - barChartMargin.left - barChartMargin.right;
   var barChartHeight = 450 - barChartMargin.top - barChartMargin.bottom;

   var Q7answers = data.map(function(d){ return d.Q7answer; })
   var color = d3.scaleOrdinal(d3.schemeCategory10).domain(Q7answers);
   var x = d3.scaleBand()
            .domain(Q7answers)
            .range([0, barChartWidth])
            .round(0.05)
            .padding(0.2);
   var y = d3.scaleLinear()
            .domain([0, d3.max(data.map(function(d) { return d.count}))] )
            .range([barChartHeight, 0]);

   var xAxis = d3.axisBottom(x);
   var yAxis = d3.axisLeft(y).scale(y);
 
   var barChartSvg = d3.select("#q7sortbar").append("svg")
   .attr("width", barChartWidth + barChartMargin.left + barChartMargin.right)
   .attr("height", barChartHeight + barChartMargin.top + barChartMargin.bottom);

   var barChartGroup = barChartSvg.append("g")
   .attr("transform", "translate(" + barChartMargin.left + "," + barChartMargin.top + ")");


   barChartGroup.append("text")
   .attr("class", "legend")
   .attr("y", -10)
   .attr("transform", "translate(-30,0)")
   .text(currentYear + " Year: Ressources Courantes");

   
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
   .attr("x", function(d) {return x(d.Q7answer)})
   .attr("width", x.bandwidth())
   .attr("y", function(d) { return y(d.count)})
   .attr("height", function(d) { return barChartHeight - y(d.count); })
   .attr("fill", function(d) { return color(d.Q7answer); })
   .on("mouseover", tip.show)
   .on("mouseout", tip.hide);



   tip.html(function(d) {
       let percent = d.count / (d3.sum(data, function(d){return d.count; }));  
       let text =  d.count + " (" + (percent*100).toFixed(1) + "% ) répondants:</br>" + d.Q7answer;
       return text;
     });

     barChartSvg.call(tip);


}