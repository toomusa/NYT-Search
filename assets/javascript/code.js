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


// numRecords variable for record limit
//searchButton
//searchTerm , has IDs
query1 = search

//if limit on records exists
// if (numRecords) {
//   let rec = $(".record").attr("limit");
//   query1.append(`&limit=${rec}`);
// }

if (start) {
  query1.append(`&begin_date=${start}`);
}

if (end) {
  query1.append(`&end_date=${end}`);
}

let queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query1}&api-key=GevTC67WTlBRpmBttQ4SDfrAxT6N0VRH`;

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
  console.log(response.reponse.meta.hits);
  for (let i=0; i < numRecords-1; i++) {
    console.log(response.reponse.docs[i]);
  }

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
