

// fetch cat fact array
var catFacts = fetch("https://cat-fact.herokuapp.com/facts").then(function(response) {
    response.json().then(function(data) {
        console.log(data);
        catFacts = data[0].text;
        displayFact();
    })
});

//push cat fact into fact handler
function displayFact() {
    var factText = document.createElement('p');
    factText.textContent = catFacts;
    document.getElementById('factHandler').appendChild(factText);
}

// fetch cat picture url
var catImageUrl = fetch("https://api.thecatapi.com/v1/images/search?api_key=0e2cc572-50b2-4f1f-b996-1ea6cc513294").then(function(response) {
    response.json().then(function(data) {
        // set variable to fetched url
        catImageUrl = data[0].url;
        // display image after 
        displayImage();
    })
});

// push custom image url into image handler
function displayImage() {
    // create img element
    var img = document.createElement('img');
    // set img url to custom url
    img.src = catImageUrl;
    // append img to page
    document.getElementById('imageHandler').appendChild(img); 
} 





