function q5stackbar(currentData,currentYear) {

  //console.log("q5stackbar",currentYear,currentData)



  

 // console.log(nbQ5)

let totalCount = currentData.length;
let columnselected = [14,15,16,17,18,19,20,21]; 
let items = ["Des conférences et événements de réseautage avec des entrepreneurs",
             "Des ateliers pour développer des compétences",
             "Des bourses pour des stages entrepreneuriaux",
             "La possibilité de réaliser un projet intégrateur entrepreneurial",
             "La possibilité de recevoir des crédits académiques",
             "Avoir accès à un conseiller",
             "Avoir accès à un mentor entrepreneur",
             "Du financement"];

let labels = ["1er choix", "2eme choix", "3eme choix", "4eme choix", "5eme choix"];
//let checkvalue =[1,2,3,4,5];
//let nb = new Array(items.length).fill(new Array(labels.length).fill(0));

let nb = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];

 
  //if(columnselected.length !=items.length){console.log("vérifier la taille du data set ou items")}
  //if(labels.length !=checkvalue.length){console.log("vérifier la taille du labels ou checkvalue",labels.length,checkvalue.length)}
    
    for(var i=0; i<totalCount; i++){
      if(currentData[i].Q5A==1){nb[0][0]++;}
      else if(currentData[i].Q5A==2){nb[0][1]++;}
      else if(currentData[i].Q5A==3){nb[0][2]++;}
      else if(currentData[i].Q5A==4){nb[0][3]++;}
      else if(currentData[i].Q5A==5){nb[0][4]++;}
    }	
    for(var i=0; i<totalCount; i++){
      if(currentData[i].Q5B==1){nb[1][0]++;}
      else if(currentData[i].Q5B==2){nb[1][1]++;}
      else if(currentData[i].Q5B==3){nb[1][2]++;}
      else if(currentData[i].Q5B==4){nb[1][3]++;}
      else if(currentData[i].Q5B==5){nb[1][4]++;}
    }	
    for(var i=0; i<totalCount; i++){
      if(currentData[i].Q5C==1){nb[2][0]++;}
      else if(currentData[i].Q5C==2){nb[2][1]++;}
      else if(currentData[i].Q5C==3){nb[2][2]++;}
      else if(currentData[i].Q5C==4){nb[2][3]++;}
      else if(currentData[i].Q5C==5){nb[2][4]++;}
    }	
    for(var i=0; i<totalCount; i++){
      if(currentData[i].Q5D==1){nb[3][0]++;}
      else if(currentData[i].Q5D==2){nb[3][1]++;}
      else if(currentData[i].Q5D==3){nb[3][2]++;}
      else if(currentData[i].Q5D==4){nb[3][3]++;}
      else if(currentData[i].Q5D==5){nb[3][4]++;}
    }	
    
    for(var i=0; i<totalCount; i++){
      if(currentData[i].Q5E==1){nb[4][0]++;}
      else if(currentData[i].Q5E==2){nb[4][1]++;}
      else if(currentData[i].Q5E==3){nb[4][2]++;}
      else if(currentData[i].Q5E==4){nb[4][3]++;}
      else if(currentData[i].Q5E==5){nb[4][4]++;}
    }	
    for(var i=0; i<totalCount; i++){
      if(currentData[i].Q5F==1){nb[5][0]++;}
      else if(currentData[i].Q5F==2){nb[5][1]++;}
      else if(currentData[i].Q5F==3){nb[5][2]++;}
      else if(currentData[i].Q5F==4){nb[5][3]++;}
      else if(currentData[i].Q5F==5){nb[5][4]++;}
    }	
    for(var i=0; i<totalCount; i++){
      if(currentData[i].Q5G==1){nb[6][0]++;}
      else if(currentData[i].Q5G==2){nb[6][1]++;}
      else if(currentData[i].Q5G==3){nb[6][2]++;}
      else if(currentData[i].Q5G==4){nb[6][3]++;}
      else if(currentData[i].Q5G==5){nb[6][4]++;}
   }	
    for(var i=0; i<totalCount; i++){
      if(currentData[i].Q5H==1){nb[7][0]++;}
      else if(currentData[i].Q5H==2){nb[7][1]++;}
      else if(currentData[i].Q5H==3){nb[7][2]++;}
      else if(currentData[i].Q5H==4){nb[7][3]++;}
      else if(currentData[i].Q5H==5){nb[7][4]++;}     
   }	

  //    console.log(nb)
 
  let data = [
          {"year":currentYear,"item":"Des conférences et événements de réseautage avec des entrepreneurs", "1er choix": nb[0][0], "2eme choix": nb[0][1], "3eme choix": nb[0][2], "4eme choix": nb[0][3],"5eme choix": nb[0][4],total: nb[0][0]+nb[0][1]+nb[0][2]+nb[0][3]+nb[0][4]},
          {"year":currentYear,"item":"Des ateliers pour développer des compétences", "1er choix": nb[1][0], "2eme choix": nb[1][1], "3eme choix": nb[1][2], "4eme choix": nb[1][3],"5eme choix": nb[1][4],total: nb[1][0]+nb[1][1]+nb[1][2]+nb[1][3]+nb[1][4]},
          {"year":currentYear,"item":"Des bourses pour des stages entrepreneuriaux", "1er choix": nb[2][0], "2eme choix": nb[2][1], "3eme choix": nb[2][2], "4eme choix": nb[2][3],"5eme choix": nb[2][4],total: nb[2][0]+nb[2][1]+nb[2][2]+nb[2][3]+nb[2][4]},
          {"year":currentYear,"item":"La possibilité de réaliser un projet intégrateur entrepreneurial", "1er choix": nb[3][0], "2eme choix": nb[3][1], "3eme choix": nb[3][2], "4eme choix": nb[3][3],"5eme choix": nb[3][4],total: nb[3][0]+nb[3][1]+nb[3][2]+nb[3][3]+nb[3][4]},
          {"year":currentYear,"item":"La possibilité de recevoir des crédits académiques", "1er choix": nb[4][0], "2eme choix": nb[4][1], "3eme choix": nb[4][2], "4eme choix": nb[4][3],"5eme choix": nb[4][4],total: nb[4][0]+nb[4][1]+nb[4][2]+nb[4][3]+nb[4][4]},
          {"year":currentYear,"item":"Avoir accès à un conseiller", "1er choix": nb[5][0], "2eme choix": nb[5][1], "3eme choix": nb[5][2], "4eme choix": nb[5][3],"5eme choix": nb[5][4],total: nb[5][0]+nb[5][1]+nb[5][2]+nb[5][3]+nb[5][4]},
          {"year":currentYear,"item":"Avoir accès à un mentor entrepreneur", "1er choix": nb[6][0], "2eme choix": nb[6][1], "3eme choix": nb[6][2], "4eme choix": nb[6][3],"5eme choix": nb[6][4],total: nb[6][0]+nb[6][1]+nb[6][2]+nb[6][3]+nb[6][4]},
          {"year":currentYear,"item":"Du financement", "1er choix": nb[7][0], "2eme choix": nb[7][1], "3eme choix": nb[7][2], "4eme choix": nb[7][3],"5eme choix": nb[7][4],total: nb[7][0]+nb[7][1]+nb[7][2]+nb[7][3]+nb[7][4]}];

 

//console.log(data)


//console.log(data)
chart(data,currentYear)

function chart(csv, currentYear) {

let keys = Object.keys(csv[1]).slice(2,7);

let year   = [...new Set(csv.map(d => d.year))]

let itemslist = [...new Set(csv.map(d => d.item))]

let svg = d3.select('#q5stackbar').append("svg").attr("width", 650).attr("height", 400),
  margin = {top: 35, left: 35, bottom: 80, right: 100},
  width = 760 - margin.left - margin.right,
  height = 480 - margin.top - margin.bottom;

let x = d3.scaleBand()
  .range([margin.left, width - margin.right])
  .padding(0.1)

let y = d3.scaleLinear()
  .rangeRound([height - margin.bottom, margin.top])

let xAxis = svg.append("g")
  .attr("transform", `translate(0,${height - margin.bottom})`)
  .attr("class", "x-axis")

let yAxis = svg.append("g")
  .attr("transform", `translate(${margin.left},0)`)
  .attr("class", "y-axis")


let color = d3.scaleOrdinal(d3.schemeCategory10).domain(keys);

let tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .html(function(d) {
       
      let text =  "% ) répondants:" ;
      return text;
    });

update(currentYear, 0, 0)

function update(input, speed, choix) {

  let data = csv.filter(f => f.year == input)

  data.forEach(function(d) {
    d.total = d3.sum(keys, k => +d[k])
    return d
  })

  y.domain([0, d3.max(data, d => d3.sum(keys, k => +d[k]))]);

  svg.selectAll(".y-axis").transition().duration(speed)
    .call(d3.axisLeft(y).ticks(null, "s"))

  
  //data.sort((a, b) => itemslist.indexOf(a.item) - itemslist.indexOf(b.item))
  		if(choix==0){}
      else if (choix == 1){data.sort((a, b) => b["1er choix"] - a["1er choix"])}
      else if (choix == 2){data.sort((a, b) => b["2eme choix"] - a["2eme choix"])}
      else if (choix == 3){data.sort((a, b) => b["3eme choix"] - a["3eme choix"])}
      else if (choix == 4){data.sort((a, b) => b["4eme choix"] - a["4eme choix"])}
      else if (choix == 5){data.sort((a, b) => b["5eme choix"] - a["5eme choix"])}

  x.domain(data.map(d => d.item));

  svg.selectAll(".x-axis").transition().duration(speed)
    .call(d3.axisBottom(x).tickSizeOuter(0))
    .selectAll("text")
    .attr("transform", "rotate(10)")
    .style("text-anchor", "start");
  

  let group = svg.selectAll("g.layer")
    .data(d3.stack().keys(keys)(data), d => d.key)

  

  group.enter().append("g")
        .classed("layer", true)
        .attr("fill", d => color(d.key));

  let bars = svg.selectAll("g.layer").selectAll("rect")
              .data(d => d, e => e.data.item);

  

  bars.enter().append("rect")
    .attr("width", x.bandwidth())
    .merge(bars)
    .transition().duration(speed)
    .attr("x", d => x(d.data.item))
    .attr("y", d => y(d[1]))
    .attr("height", d => y(d[0]) - y(d[1]));

  let text = svg.selectAll(".text")
    .data(data, d => d.item);

  

  text.enter().append("text")
    .attr("class", "text")
    .attr("text-anchor", "middle")
    .merge(text)
    .transition().duration(speed)
    .attr("x", d => x(d.item) + x.bandwidth() / 2)
    .attr("y", d => y(d.total) - 5)
    .text(d => d.total)
    

    //bars.call(tip);

    let legendRectSize = 12;
    let legendSpacing = 10;
    let legendX = 540;
    let legendY = 30;
    let legendMargin = 10;
    let legend = svg.append("g")
        .selectAll("g")
        .data(color.domain())
        .enter()
        .append('g')
          .attr('transform', function(d, i) {
            let height = legendRectSize + legendMargin;
            let x = 0;
            let y = i * height;
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
        .style("fill", function(d){ return  color(d);  })
        .on("click", function(d) {console.log(d);
          if(d=="1er choix"){update(input, 450, 1)}
          else if(d=="2eme choix"){update(input, 450, 2)}
          else if(d=="3eme choix"){update(input, 450, 3)}
          else if(d=="4eme choix"){update(input, 450, 4)}
          else if(d=="5eme choix"){update(input, 450, 5)}          
        });
    

    
    legend.append('text')
        .attr('x', legendX + legendRectSize + legendSpacing)
        .attr('y', legendY + legendRectSize - legendSpacing + legendMargin)
        .attr("class", "legend_text")
        .text(function(d) { return d; })
        .attr('font-size', 15)
        .on("click", function(d) {console.log(d);
          if(d=="1er choix"){update(input, 450, 1)}
          else if(d=="2eme choix"){update(input, 450, 2)}
          else if(d=="3eme choix"){update(input, 450, 3)}
          else if(d=="4eme choix"){update(input, 450, 4)}
          else if(d=="5eme choix"){update(input, 450, 5)}          
        });
    
   

}


}

  


}