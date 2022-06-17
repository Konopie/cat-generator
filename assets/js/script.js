var picBtn = document.querySelector("#pic-generator");
var factBtn = document.querySelector("#fact-generator");
//**Mackenzie "Favorite" buttons
var favoriteBtn1 = document.querySelector("#favorite1");
var favoriteBtn2 = document.querySelector('#favorite2')
var catFacts = document.querySelector('.cat-facts');
var catPics = document.querySelector('.cat-picture');

// fetch cat facts
function fetchFacts() {
    if (document.getElementById("factHandler").contains(document.querySelector(".fact"))) {
        document.getElementById("factHandler").removeChild(document.querySelector(".fact"))
    };
    fetch("https://cat-fact.herokuapp.com/facts").then(function (response) {
        response.json().then(function (data) {
            console.log(data);
            var randomNumber = Math.floor(Math.random() * data.length);
            catFacts = data[randomNumber].text;
            displayFact();
        })
    });
}

//  push cat fact object into fact handler
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
function fetchUrl() {
    if (document.getElementById("imageHandler").contains(document.querySelector(".catImage"))) {
        document.getElementById("imageHandler").removeChild(document.querySelector(".catImage"))
    };
    fetch("https://api.thecatapi.com/v1/images/search?api_key=0e2cc572-50b2-4f1f-b996-1ea6cc513294").then(function (response) {
        response.json().then(function (data) {
            console.log(data);
            // set variable to fetched url
            catImageUrl = data[0].url;
            // display image after 
            displayImage();
        })
    });
}

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

// fetch buttons
factBtn.addEventListener("click", fetchFacts);
picBtn.addEventListener("click", fetchUrl);


//*Mackenzie-used JQuery to call the click function for favoritebutton1
$("#favorite1").click(function (event) {
    event.preventDefault()
    //grabs the(this) favoritebutton1 and the catFacts div
    var favoriteFact = $(this).catFacts
    //set the catFacts div to localStorage with the click of the favoriteBtn1
    localStorage.setItem(favoriteBtn1, catFacts);
    //display localStorage catFacts in the favoritefact-container 
    localStorage.setItem('favoriteBtn1', catFacts)
    //display localStorage catFacts in the favoritefact-container
    var divElement = document.getElementById('favoritefact-container')
    divElement.innerHTML = (catFacts);
}
);
//sets the favorited fact so that it remains on html page after page refresh
function showSavedFact() {
    var fact = localStorage.getItem('favoriteBtn1');
    var divElement = document.getElementById('favoritefact-container')
    if (fact === null) {
        divElement.innerHTML = "Favorite Facts Will Appear Here!"
    } else {
        divElement.innerHTML = fact
    }
}
showSavedFact()

//Mackenzie- used JQuery to call the click function for favoritebutton2
$("#favorite2").click(function (event) {
    event.preventDefault()
    //grabs the (this) favoritebutton2 and the catImageUrl
    var favoritePics = $(this).catImageUrl
    //convert the catImageUrl to JSON string and set to localStorage
    localStorage.setItem('favoriteBtn2', JSON.stringify(catImageUrl));
    //retrieve parsed catImageUrl from localStorage
    var retrievedCatPic = JSON.parse(localStorage.getItem('catImageUrl'));
    //display localStorage catImageUrl in the favoritepic-container
    var divElement = document.getElementById('favoritepic-container')
    divElement.innerHTML = "<img src=" + catImageUrl + "></img>"
});

//sets the favorited image so that it remains on html page after page refresh
function getSavedImg() {
    var retrievedCatPic = localStorage.getItem('favoriteBtn2');
    var divElement = document.getElementById('favoritepic-container')
    if (retrievedCatPic === null) {
        divElement.innerHTML = "Favorite Image Will Appear Here!"
    } else {
        divElement.innerHTML = "<img src=" + retrievedCatPic + "></img>"
    }
}
getSavedImg()

