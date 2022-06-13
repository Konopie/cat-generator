var picBtn = document.querySelector("#pic-generator");
var favoriteBtn=document.querySelector(".favorite");
//  "Cat Fact" button
var factBtn = document.querySelector("#fact-generator");

// fetch cat facts
function fetchFacts() {
    if (document.getElementById("factHandler").contains(document.querySelector(".fact"))) {
        document.getElementById("factHandler").removeChild(document.querySelector(".fact"))
    };
    fetch("https://cat-fact.herokuapp.com/facts").then(function(response) {
        response.json().then(function(data) {
            console.log(data);
            var randomNumber = Math.floor(Math.random() * data.length);
            catFacts = data[randomNumber].text;
            displayFact();
        })
    });
}

//  push cat fact into fact handler
function displayFact() {
    // create p element for facts
    var factText = document.createElement('p');
    // css class
    factText.className = "fact";
    //set url/source
    factText.textContent = catFacts;
    // append to page
    document.getElementById('factHandler').appendChild(factText);
}


// fetch cat picture url
function fetchUrl(){
    if (document.getElementById("imageHandler").contains(document.querySelector(".catImage"))) {
        document.getElementById("imageHandler").removeChild(document.querySelector(".catImage"))};
    fetch("https://api.thecatapi.com/v1/images/search?api_key=0e2cc572-50b2-4f1f-b996-1ea6cc513294").then(function(response) {
    response.json().then(function(data) {
        console.log(data)
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
// *Bethany button event listener
factBtn.addEventListener("click", fetchFacts);

picBtn.addEventListener("click", fetchUrl);

favoriteBtn.addEventListener('click', function () {
    
   var userData= {
      picture: picBtn,
        fact: factBtn 

    }
   var storage=JSON.parse(localStorage.getItem('picBtn')) 
   if (storage ===null) {
    storage= []
    }
   storage.push(userData)
  / localStorage.setItem('picBtn', JSON.stringify(storage))
  window.location.href='favorites.html'
})
