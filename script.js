"use strict";
//API KEY xs8258mjnKxILEnEp1IAXGnMYGxaLTGK
//https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=yourkey
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=xs8258mjnKxILEnEp1IAXGnMYGxaLTGK"
$("#search").on("click", function() {
    // build the string
    var searchTerm = $("#search-term").val();
    var recordNum = $("#number-records").val();
    var startYear = $("#start-year").val();
    var endYear = $("#end-year").val();
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&begin_date=" + startYear + "&end_date=" + endYear + "&api-key=xs8258mjnKxILEnEp1IAXGnMYGxaLTGK";
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function(obj) {
        for (var i = 0; i < recordNum; i++) {
            //headline
            console.log(obj.response.docs[i].headline.main);
            //title
            console.log(obj.response.docs[i].headline.name);
            //author name
            console.log(obj.response.docs[i].byline.original);
            //posted date/time
            console.log(obj.response.docs[i].pub_date);
            //section
            console.log(obj.response.docs[i].section_name);
            //link
            console.log(obj.response.docs[i].url);
        }
    });
});