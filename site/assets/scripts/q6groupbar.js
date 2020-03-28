
function q6groupbar(currentData,currentYear) {

   // console.log("q6stackbar",currentYear,currentData);


    var data = {
        labels: 
        ["Impact environnemental ou social", "Impact technologique", "Impact économique", "Impact personnel "],
        series: 
        [
          {
            label: '1er choix',
            values: []
          },
          {
            label: '2eme choix',
            values: []
          },
        ]
      };


    var nbQ6A1=0, nbQ6B1=0, nbQ6A2=0, nbQ6B2=0,nbQ6A3=0, nbQ6B3=0, nbQ6A4=0, nbQ6B4=0;
    var totalCount = currentData.length;
    for(var i=0; i<totalCount; i++){
        if(currentData[i].Q6A=="Q61"){nbQ6A1++;}
        else if(currentData[i].Q6A=="Q62"){nbQ6A2++;}
        else if(currentData[i].Q6A=="Q63"){nbQ6A3++;}
        else if(currentData[i].Q6A=="Q64"){nbQ6A4++;}

        if(currentData[i].Q6B=="Q61"){nbQ6B1++;}
        else if(currentData[i].Q6B=="Q62"){nbQ6B2++;}
        else if(currentData[i].Q6B=="Q63"){nbQ6B3++;}
        else if(currentData[i].Q6B=="Q64"){nbQ6B4++;}
        }	
        
    data.series[0].values = [nbQ6A1,nbQ6A2,nbQ6A3,nbQ6A4];
    data.series[1].values = [nbQ6B1,nbQ6B2,nbQ6B3,nbQ6B4];
    //console.log(data)

      var tip = d3.tip()
      .attr('class', 'd3-tip')
      .offset([-10, 0]);

      var chartWidth       = 320,
          barHeight        = 20,
          groupHeight      = barHeight * data.series.length,
          gapBetweenGroups = 10,
          spaceForLabels   = 270,
          spaceForLegend   = 150;
      
      // Zip the series data together (first values, second values, etc.)
      var zippedData = [];
      for (var i=0; i<data.labels.length; i++) {
        for (var j=0; j<data.series.length; j++) {
          zippedData.push(data.series[j].values[i]);
        }
      }
      



      // Color scale
      var color = d3.scaleOrdinal(d3.schemeCategory10);
      var chartHeight = barHeight * zippedData.length + gapBetweenGroups * data.labels.length;
      
      var x = d3.scaleLinear()
          .domain([0, d3.max(zippedData)])
          .range([0, chartWidth]);
      
      var y = d3.scaleLinear()
          .range([chartHeight + gapBetweenGroups, 0]);
      
      var yAxis = d3.axisLeft(y)
          .scale(y)    
          .tickFormat('')
          .tickSize(0);
      
      // Specify the chart area and dimensions
      
      var chart = d3.select("#q6groupbar").append("svg")
          .attr("width", spaceForLabels + chartWidth + spaceForLegend)
          .attr("height", chartHeight);
      
          chart.append("text")
          .attr("class", "legend")
          .attr("x", 50)
          .attr("y", 10)
          .attr("transform", "translate(-30,0)")
          .text(currentYear + " Year: Impacts");

      // Create bars
      var bar = chart.selectAll("g")
          .data(zippedData)
          .enter().append("g")
          .attr("transform", function(d, i) {
            return "translate(" + spaceForLabels + "," + (i * barHeight + gapBetweenGroups * (0.5 + Math.floor(i/data.series.length))) + ")";
          });
      
      // Create rectangles of the correct width
      bar.append("rect")
          .attr("fill", function(d,i) { return color(i % data.series.length); })
          .attr("class", "bar")
          .attr("width", x)
          .attr("height", barHeight - 1)
          .on("mouseover", tip.show)
          .on("mouseout", tip.hide);
      
      
      // Draw labels
      bar.append("text")
          .attr("class", "label")          
          .attr("text-anchor", "end")
          .attr("x", function(d) { return - 30; })
          .attr("y", groupHeight / 2)
          .attr("dy", ".35em")
          .text(function(d,i) {
            if (i % data.series.length === 0)
              return data.labels[Math.floor(i/data.series.length)];
            else
              return ""});

      tip.html(function(d) {        
                return d + " (" + (d*100/totalCount).toFixed(1) + "% ) répondants" });
        
      bar.call(tip);
      
      chart.append("g")
            .attr("class", "y axis")
            .attr("transform", "translate(" + spaceForLabels + ", " + -gapBetweenGroups/2 + ")")
            .call(yAxis);
      
      // Draw legend
      var legendRectSize = 12;
      var legendSpacing = 10;
      var legendX = 640;
      var legendY = 20;
      var legendMargin = 10;
      var legend = chart.append("g")
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
            //console.log(d);
            return d + "Rect";      
          })
          .attr("class", "legend")
          .style("fill", function(d){ return  color(d);  });
      

      
      legend.append('text')
          .attr('x', legendX + legendRectSize + legendSpacing)
          .attr('y', legendY + legendRectSize - legendSpacing + legendMargin)
          .attr("class", "legend_text")
          .text(function(d) { return data.series[d].label; })
          .attr('font-size', 15);
      

}