// variable to hold start year
var startYear;
//variable end year
var endYear;
// variable holds user search term
var searchTerm;
//variable to hold specified number of records
var numRecords;
//search button variable holds html searchButton ID
var searchButton = $("#searchButton");
//clear results variable holds html clearResults ID
var clearResults = $("#clearResults");

searchButton.on("click", function () {
    search = $("#searchButton").val();
    start = $("#start").val();
    end = $("#end").val();
}

    // ajax call
    // API Key GevTC67WTlBRpmBttQ4SDfrAxT6N0VRH

    let queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query1}&api-key=GevTC67WTlBRpmBttQ4SDfrAxT6N0VRH`;








clearResults.on("click", function () {
    $("#searchButton").val('');
    $("start").val('');
    $("end").val('');
});