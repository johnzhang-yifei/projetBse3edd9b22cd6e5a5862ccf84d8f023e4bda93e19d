function q9wordcloud(currentData,currentYear) {

   // console.log("q9wordcloud is in index.html",currentYear,currentData);
    //backup
    var data = {
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
                "code": "function(el, x) {console.log(x.word)}",
                "data": null
            }]
        }
    } 
  //  console.log(data);

}