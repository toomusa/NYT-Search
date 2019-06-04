// ajax call
// API Key GevTC67WTlBRpmBttQ4SDfrAxT6N0VRH

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
});