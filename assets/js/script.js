<<<<<<< HEAD
//// fetch cat fact array
//// a7e6c2641e3a2f2e677f932fd90cab309e80a2ce
//fetch("https://cat-fact.herokuapp.com/facts").then(function(response) {
   // response.json().then(function(data) {
     //   console.log(data);
  //  })
//});
=======
var picBtn = document.querySelector("#pic-generator");

// **Bethany fetch cat fact array
var catFacts = fetch("https://cat-fact.herokuapp.com/facts").then(function(response) {
    response.json().then(function(data) {
        console.log(data);
        catFacts = data[0].text;
        displayFact();
    })
});
>>>>>>> 57773856d65284267c89e850bd1dc969d9c0b6a1

// **Bethany push cat fact into fact handler
function displayFact() {
    var factText = document.createElement('p');
    factText.textContent = catFacts;
    factText.textContent = catFacts;
    document.getElementById('factHandler').appendChild(factText);
}


// fetch cat picture url
<<<<<<< HEAD

var catImageUrl = fetch("https://api.thecatapi.com/v1/images/search?api_key=0e2cc572-50b2-4f1f-b996-1ea6cc513294").then(function(response) {
=======
function fetchUrl(){
    if (document.getElementById("imageHandler").contains(document.querySelector(".catImage"))) {
        document.getElementById("imageHandler").removeChild(document.querySelector(".catImage"))};
    fetch("https://api.thecatapi.com/v1/images/search?api_key=0e2cc572-50b2-4f1f-b996-1ea6cc513294").then(function(response) {
>>>>>>> 57773856d65284267c89e850bd1dc969d9c0b6a1
    response.json().then(function(data) {
        // set variable to fetched url
        catImageUrl = data[0].url;
        // display image after 
        displayImage();
    })
})};

// push custom image url into image handler
function displayImage() {
    
    // create img element
    var img = document.createElement('img');
    // set img to css class
    img.className = "catImage";
    // set img url to custom url
    img.src = catImageUrl;
    // append img to page
    document.getElementById('imageHandler').appendChild(img); 
} 

picBtn.addEventListener("click", fetchUrl);



