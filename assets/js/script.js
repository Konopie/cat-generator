fetch("https://cat-fact.herokuapp.com/facts").then(function(response) {
    response.json().then(function(data) {
        console.log(data);
    })
});

var catFacts = fetch("https://api.thecatapi.com/v1/images/search?api_key=0e2cc572-50b2-4f1f-b996-1ea6cc513294").then(function(response) {
    response.json().then(function(data) {
        console.log(data[0].url);
    })
});
