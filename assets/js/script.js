<<<<<<< HEAD
var

=======
// fetch cat fact array
>>>>>>> a7e6c2641e3a2f2e677f932fd90cab309e80a2ce
fetch("https://cat-fact.herokuapp.com/facts").then(function(response) {
    response.json().then(function(data) {
        console.log(data);
    })
});

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





