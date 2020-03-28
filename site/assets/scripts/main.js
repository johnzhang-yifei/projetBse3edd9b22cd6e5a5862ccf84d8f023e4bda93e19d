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
      var currentYear = "2019";
      var currentData = results[0];
      


        q1donut(currentData,currentYear);
        q2waffle(currentData,currentYear);
        q3bar(currentData,currentYear);
        q4stackbar(currentData,currentYear);
        q5stackbar(currentData,currentYear);
        q6groupbar(currentData,currentYear);
        q7sortbar(currentData,currentYear);
        q8sortbar(currentData,currentYear);
        q9wordcloud(currentData,currentYear);
        q9table(currentData,currentYear);

      /***** Transition entre les données des années 2000 et 2014 *****/
      var toggleButtons = d3.selectAll(".toggle-buttons > button");
      toggleButtons.on("click", function(d, i) {
          currentYear = d3.select(this).text();
          currentData = results[i];
          toggleButtons.classed("active", function() {
            return currentYear === d3.select(this).text();
          });
          d3.selectAll('svg').remove();
          d3.selectAll('table').remove();
          q1donut(currentData,currentYear);
          q2waffle(currentData,currentYear);
          q3bar(currentData,currentYear);
          q4stackbar(currentData,currentYear);
          q5stackbar(currentData,currentYear);
          q6groupbar(currentData,currentYear);
          q7sortbar(currentData,currentYear);
          q8sortbar(currentData,currentYear);
          q9wordcloud(currentData,currentYear);
          q9table(currentData,currentYear);
        })
    

     

    });

})(d3, localization);
