fetch("https://cat-fact.herokuapp.com/facts").then(function(response) {
    response.json().then(function(data) {
        console.log(data);
    })
});



