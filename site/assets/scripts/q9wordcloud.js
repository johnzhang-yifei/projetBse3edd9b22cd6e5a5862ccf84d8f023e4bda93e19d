function q9wordcloud(currentData,currentYear) {

   //console.log("q9wordcloud is in index.html",currentYear,currentData);
    //backup

    

  /** 
   * 
   *    if(currentYear==2019){showiFrame2019();}
    else if(currentYear==2017){showiFrame2017();}

    function showiFrame2017() {console.log("showiFrame2017");
        d3.select('#Q9iFrame2019').style.display = "none";
        d3.select('#Q9iFrame2017').style.display = "flex";
      }
      
    function showiFrame2019() {
        d3.select('#Q9iFrame2017').style.display = "none";
        d3.select('#Q9iFrame2019').style.display = "flex";
      }


    function showiFrame2017() {
        document.getElementById("Q9iFrame2019").style.display = "none";
        document.getElementById("Q9iFrame2017").style.display = "flex";
      }
      
    function showiFrame2019() {
        document.getElementById("Q9iFrame2017").style.display = "none";
        document.getElementById("Q9iFrame2019").style.display = "flex";
      }

*/


    var data2017 = {
        "x": {
            "word": ["entreprenariat" ,"idée" ,"polytechnique" ,"entreprise" ,"interessant" ,"business" ,"creer" ,"étudiant" ,"possibilité" ,"projet" ,"sortie" ,"souhait" ,"stage" ,"ateliers" ,"accent" ,"accès" ,"activities" ,"aider" ,"anglais" ,"année" ,"aspect" ,"commercialiser" ,"conférence" ,"considérations" ,"domaine" ,"english" ,"expérience" ,"future" ,"information" ,"invitation" ,"opportunité" ,"organisation" ,"particulière" ,"programmes" ,"relation" ,"résources" ,"support" ,"trouver" ,"académiques" ,"accompagner" ,"appreciate" ,"apprendre" ,"argent" ,"arrangement" ,"aspirations" ,"budgétaires" ,"career" ,"chance" ,"co-founders" ,"compétence" ],
            "freq": [6,5,5,4,4,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1],
            "fontFamily": "Segoe UI",
            "fontWeight": "bold",
            "color": "#ff7f0e",
            "minSize": 0,
            "weightFactor": 7.2,
            "backgroundColor": "#1F77B4",
            "gridSize": 0,
            "minRotation": -1.5707963267949,
            "maxRotation": -1.5707963267949,
            "shuffle": true,
            "rotateRatio": 0.4,
            "shape": "circle",
            "ellipticity": 0.65,
            "figBase64": null,
            "hover": null
        },
        "evals": [],
        "jsHooks": {
            "render": [{
                "code": "function(el, x) {console.log(2017)}",
                "data": null
            }]
        }
    }
    var data2019 = {
        "x": {
            "word": ["entreprenariat","idée","étudiants","projet","domaine","merci","sondage","encourager","futurs","ingénieurs","promouvoir","cours","entreprise","polytechnique","entrepreneurs","temps","entrepreneurial","domaines","intéressant","lancer","possibilité","pouvoir","produit","développer","intégrateur","politique","recherche","support","activités","artenaires","co-founders","conférences","connaissances","contacts","découvrir","disposition","encourager","entreprises","expérience","ingénierie","mentor","organiser","participer","présentation","professionnelle","réaliser","stage","laboratoire","professeurs","technologique"],
            "freq": [38,27,19,19,17,16,14,11,11,11,11,10,9,8,7,6,5,4,4,4,4,4,4,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1],
            "fontFamily": "Segoe UI",
            "fontWeight": "bold",
            "color": "#1F77B4",
            "minSize": 0,
            "weightFactor": 7.2,
            "backgroundColor": "#ff7f0e",
            "gridSize": 0,
            "minRotation": -1.5707963267949,
            "maxRotation": -1.5707963267949,
            "shuffle": true,
            "rotateRatio": 0.4,
            "shape": "circle",
            "ellipticity": 0.65,
            "figBase64": null,
            "hover": null
        },
        "evals": [],
        "jsHooks": {
            "render": [{
                "code": "function(el, x) {console.log(2019)}",
                "data": null
            }]
        }
    } 
  //  console.log(data);

}