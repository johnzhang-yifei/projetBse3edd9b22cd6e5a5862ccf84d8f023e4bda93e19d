/**
 * Fichier principal permettant de dessiner le graphique demandé. Ce fichier utilise les autres fichiers
 * que vous devez compléter.
 *
 * /!\ Aucune modification n'est nécessaire dans ce fichier!
 */
(function (d3, localization) {
  "use strict";
  window.dataTotal =[];
  var files = ["./data/bse2019.csv", "./data/bse2017.csv"];
  //console.log(files);
  /***** Chargement des données *****/
  Promise.all(files.map(url => d3.dsv(";", url))).then(function (results) {
      window.currentYear = "2019";
      var currentData = results[0];
      d3.selectAll('svg').remove();
      analyse();

      /***** Transition entre les données des années 2000 et 2014 *****/
      var toggleButtons = d3.selectAll(".toggle-buttons > button");
      toggleButtons.on("click", function(d, i) {
        window.currentYear = d3.select(this).text();
          currentData = results[i];
          toggleButtons.classed("active", function() {
            return window.currentYear === d3.select(this).text();
          });
          d3.selectAll('svg').remove();
          d3.selectAll('table').remove();
          analyse();
        })
    
        function analyse(){
          q1donut(currentData,window.currentYear);
          q2waffle(currentData,window.currentYear);
          q3bar(currentData,window.currentYear);
          q4stackbar(currentData,window.currentYear);
          q5stackbar(currentData,window.currentYear);
          q6groupbar(currentData,window.currentYear);
          q7sortbar(currentData,window.currentYear);
          q8sortbar(currentData,window.currentYear);
          q9wordcloud(currentData,window.currentYear);
          q9table(currentData,window.currentYear);}
     

    });

})(d3, localization);
