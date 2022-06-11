var favoritePic=document.querySelector('#favoritePic');
var favoriteFact=document.querySelector('#favoriteFact'); 

favoritePic.addEventListener('click',function (event) {
event.preventDefault()

var favoriteBtnId=$(this).attr('id');
localStorage.setItem(favoriteBtnId, value)
console.log(localStorage)
});
