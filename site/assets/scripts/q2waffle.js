
function q2waffle(currentData,currentYear) {

   console.log("q2waffle",currentYear, currentData);

   var dataFromation = [];
   var nbF1=0, nbF2=0, nbF3=0;
   var totalCount = currentData.length;
   for(var i=0; i<totalCount; i++){
       if(currentData[i].Q9=="Baccalauréat"||currentData[i].Q9=="Certificat"){nbF1++;}
       else if(currentData[i].Q9=="Maîtrise recherche"||currentData[i].Q9=="Maîtrise professionnelle"||currentData[i].Q9=="DESS"){nbF2++;}
       else if(currentData[i].Q9=="Doctorat"||currentData[i].Q9=="Post-Doctorat"){nbF3++;}
       }	
   dataFromation.push(
      { "name": "Fromation 1er cycle", "value": nbF1},
      { "name": "Fromation 2eme cycle", "value": nbF2},
      { "name": "Fromation 3eme cycle", "value": nbF3}
   );
 

   var dataGenre = [];
   var nbHomme=0, nbFemme=0, nbAutre=0;
   var totalCount = currentData.length;
   for(var i=0; i<totalCount; i++){
       if(currentData[i].Q12A=="Un homme"){nbHomme++;}
       else if(currentData[i].Q12A=="Une femme"){nbFemme++;}
       else if(currentData[i].Q12A=="Ne souhaite pas répondre"||currentData[i].Q12A=="Autre"){nbAutre++;}
       }	
   dataGenre.push(
      { "name": "Un homme", "value": nbHomme},
      { "name": "Une femme", "value": nbFemme},
      { "name": "Autre", "value": nbAutre}
   );


   var dataProgram = [];
   var nbP1=0,nbP2=0,nbP3=0,nbP4=0,
		nbP5=0,nbP6=0,nbP7=0,nbP8=0,
		nbP9=0,nbP10=0,nbP11=0,nbP12=0,
		nbP13=0,nbP14=0,nbP15=0,nbP16=0,
		nbP17=0;
   var totalCount = currentData.length;
   for(var i=0; i<totalCount; i++){
      if(currentData[i].Q11A=="Aérospatial"){nbP1++;}
      else if(currentData[i].Q11A=="Biomédical"){nbP2++;}
      else if(currentData[i].Q11A=="Chimique"){nbP3++;}
      else if(currentData[i].Q11A=="Civil"){nbP4++;}
      else if(currentData[i].Q11A=="Électrique"){nbP5++;}
      else if(currentData[i].Q11A=="Énergétique et nucléaire"){nbP6++;}
      else if(currentData[i].Q11A=="Géologique"){nbP7++;}
      else if(currentData[i].Q11A=="Industriel"){nbP8++;}
      else if(currentData[i].Q11A=="Informatique"){nbP9++;}
      else if(currentData[i].Q11A=="Logiciel"){nbP10++;}
      else if(currentData[i].Q11A=="Mathématiques de l’ingénieur"){nbP11++;}
      else if(currentData[i].Q11A=="Mécanique"){nbP12++;}
      else if(currentData[i].Q11A=="Métallurgique"){nbP13++;}
      else if(currentData[i].Q11A=="Minéral"){nbP14++;}
      else if(currentData[i].Q11A=="Mines"){nbP15++;}
      else if(currentData[i].Q11A=="Physique"){nbP16++;}
      else if(currentData[i].Q11A=="Autre"){nbP17++;}
       }	
   dataProgram.push(
      {"name": "Aérospatial", "value": nbP1},
      {"name": "Biomédical", "value": nbP2},
      {"name": "Chimique", "value": nbP3},
      {"name": "Civil", "value": nbP4},
      {"name": "Électrique", "value": nbP5},
      {"name": "Énergétique et nucléaire", "value": nbP6},
      {"name": "Géologique", "value": nbP7},
      {"name": "Industriel", "value": nbP8},
      {"name": "Informatique", "value": nbP9},
      {"name": "Logiciel", "value": nbP10},
      {"name": "Mathématiques de l’ingénieur", "value": nbP11},
      {"name": "Mécanique", "value": nbP12},
      {"name": "Métallurgique", "value": nbP13},
      {"name": "Minéral", "value": nbP14},
      {"name": "Mines", "value": nbP15},
      {"name": "Physique", "value": nbP16},
      {"name": "Autres", "value": nbP17}
   );
 


   var dataStatueCa = [];
   var nbCC=0, nbRP=0, nbEE=0, nbAutre=0;
   var totalCount = currentData.length;
   for(var i=0; i<totalCount; i++){
       if(currentData[i].Q13A=="Citoyen canadien"){nbCC++;}
       else if(currentData[i].Q13A=="Résident permanent"){nbRP++;}
       else if(currentData[i].Q13A=="Étudiant étranger"){nbEE++;}
       else if(currentData[i].Q13A=="Ne souhaite pas répondre"||currentData[i].Q12A=="Autre"){nbAutre++;}
       }	
   dataStatueCa.push(
      { "name": "Citoyen canadien", "value": nbCC},
      { "name": "Résident permanent", "value": nbRP},
      { "name": "Étudiant étranger", "value": nbEE},
      { "name": "Autre", "value": nbAutre}
   );
 




       waffle(dataFromation, "#q2formationchart", "#q2formationlegend");
       waffle(dataGenre, "#q2genrechart", "#q2genrelegend");
       waffle(dataProgram, "#q2programmechart", "#q2programmelegend");
       waffle(dataStatueCa, "#q2statueAuCanadachart", "#q2statueAuCanadalegend");

function waffle(data, c , l){
   var margin = { top: 5, right: 5, bottom: 5, left: 5 },
       squareSize = 20,
       squareCol = d3.scaleOrdinal(d3.schemeCategory10).domain(data.map(function(d){ return d.name; })),
       squareBgd = '#e0e5db',
       strokeCol = '#fff',
       strokeWidth = 2;

       var scale = d3.scaleLinear()
       .domain([0, 9])
       .range([0, squareSize * 10]);

//console.log(squareCol.domain());
       

   var waffleData = [];
   var total = d3.sum(data, function(d) { return d.value; })
   var scale100 = d3.scaleLinear()
                  .domain([0, total])
                  .range([0, 100]);

   var tip = d3.tip()
               .attr('class', 'd3-tip')
               .offset([-10, 0]);

    var size = (squareSize + strokeWidth * 2) * 10;

    for(let i=0; i<data.length;i++){
      for(let j=0; j<Math.floor(scale100(data[i].value)); j++){
         waffleData.push({
                           groupId:i,
                           unit: (scale100(data[i].value)).toFixed(1),
                           value:data[i].value,
                           name:data[i].name
                     });         
      }
   }


 
   //console.log(waffleData);      
   
    var selection = d3.select(c)
         .append('svg')
         .attr('width', size + margin.left + margin.right)
         .attr('height', size + margin.top + margin.bottom)
         .append('g')
         .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');
    
   
      

                  
         var join = selection.selectAll('rect')
                   .data(waffleData);
                   
         join.enter()
            .append('rect')
            .attr('x', function (d, i) {
                  var n = i % 10;
                  return scale(n);
               })
            .attr('y', function (d, i) {
               var n = Math.floor(i / 10);
               return scale(n);
               })
          .attr('width', squareSize)
          .attr('height', squareSize)
          .attr('stroke-width', strokeWidth)
          .attr('stroke', strokeCol)
          .on("mouseover", tip.show)
          .on("mouseout", tip.hide)
          .merge(join)
          .transition()
          .attr('fill', function (d, i) {
             return squareCol(d.name)
             });
            
         tip.html(function(d,i) {
            //console.log(d,i);
        
               return d.name +":"+ d.unit +"% _"+d.value+" répondants" ;
               
             });
       
         selection.call(tip);
            

   var legend = d3.select(l)
   .append("svg")
   .attr('width', 300)
   .attr('height', 200)
   .append('g')
   .selectAll("div")
   .data(squareCol.domain())
   .enter()
     .append("g")
     .attr('transform', function(d,i){ return "translate(0," + i*20 + ")";});
 legend.append("rect")
   .attr("width", 18)
   .attr("height", 18)
   .style("fill", function(d, i) { return squareCol(d)});
 legend.append("text")
   .attr("x", 25)
   .attr("y", 13)
   .text( function(d) { return d});

   
   var legend2 = d3.select("#q2genrelegend")
     .select('svg')
     .append('g')
     .attr('transform', "translate(100,0)");
}



//BarChart for Program


var barChartMargin = { top: 30, right: 120, bottom: 200, left: 30};
var barChartWidth = 580 - barChartMargin.left - barChartMargin.right;
var barChartHeight = 500 - barChartMargin.top - barChartMargin.bottom;



var Q11Answer = dataProgram.map(function(d){ return d.name; })
var color = d3.scaleOrdinal(d3.schemeCategory10).domain(Q11Answer);
var x = d3.scaleBand()
         .domain(Q11Answer)
         .range([0, barChartWidth])
         .round(0.05)
         .padding(0.2);
var y = d3.scaleLinear()
         .domain([0, d3.max(dataProgram.map(function(d) { return d.value}))] )
         .range([barChartHeight, 0]);


var xAxis = d3.axisBottom(x);
var yAxis = d3.axisLeft(y).tickFormat(localization.getFormattedNumber);

var barChartSvg = d3.select("#q2programmeBar").append("svg")
.attr("width", barChartWidth + barChartMargin.left + barChartMargin.right)
.attr("height", barChartHeight + barChartMargin.top + barChartMargin.bottom);

var barChartGroup = barChartSvg.append("g")
.attr("transform", "translate(" + barChartMargin.left + "," + barChartMargin.top + ")");


barChartGroup.append("text")
.attr("class", "legend")
.attr("y", -10)
.attr("transform", "translate(-30,0)")
.text(currentYear + " Year Programme");


barChartGroup.append("g")
.attr("class", "x axis")
.call(xAxis)
.attr("transform", "translate(0," +  barChartHeight + ")")
.selectAll("text")
.attr("transform", "rotate(40)")
.style("text-anchor", "start");


barChartGroup.append("g")
.attr("class", "yAxis")
.call(yAxis)

var tip = d3.tip()
.attr('class', 'd3-tip')
.offset([-10, 0])
.html(function(d) {
  let percent = d.value / (d3.sum(dataProgram, function(d){return d.value; }));  
  let text =  d.value + " (" + (percent*100).toFixed(1) + "% ) répondants:</br>" + d.name;
  return text;
});


barChartGroup.selectAll("rect")
.data(dataProgram)
.enter()
.append("rect")
.attr("x", function(d) {return x(d.name)})
.attr("width", x.bandwidth())
.attr("y", function(d) { return y(d.value)})
.attr("height", function(d) { return barChartHeight - y(d.value); })
.attr("fill", function(d) { return color(d.name); })
.on("mouseover", tip.show)
.on("mouseout", tip.hide);

barChartSvg.call(tip);


      // Draw legend
      var legendRectSize = 12;
      var legendSpacing = 10;
      var legendX = 440;
      var legendY = 20;
      var legendMargin = 10;
      var legend = barChartGroup.append("g")
          .selectAll("g")
          .data(dataProgram)
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
          .style("fill", function(d){ return  color(d.name);  })
          .on("mouseover", tip.show)
          .on("mouseout", tip.hide);
      

      
      legend.append('text')
          .attr('x', legendX + legendRectSize + legendSpacing)
          .attr('y', legendY + legendRectSize - legendSpacing + legendMargin)
          .attr("class", "legend_text")
          .text(function(d) { return d.name })
          .attr('font-size', 15)
          .on("mouseover", tip.show)
          .on("mouseout", tip.hide);

      legend.call(tip);

}

