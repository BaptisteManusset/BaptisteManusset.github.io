// coucou
//
// var imgs = document.querySelector("#main p img");
//
// imgs.forEach(function (userItem) {
//
//     userItem.addEventListener("click", function (event) {
//         event.target.classList.toggle("fullScreen");
//     }, false);
// });

// var imageArray = document.querySelector("#main p img");
// for(var i = 0; i < imageArray.length; i++) {
//     imageArray[i].addEventListener("click", bindClick(i));
// }
//
// function bindClick(i) {
//     return function() {
//         console.log("you clicked region number " + i);
//     };
// }


var imgsList = document.querySelectorAll(".post section img");
var lightbox = document.querySelector(".post #lightbox");
var lightboxContent = document.querySelector(".post #lightbox #image");
var openLightbox = function () {
    lightbox.style.visibility = "visible";
    lightboxContent.innerHTML = "";
    lightboxContent.appendChild(this.cloneNode(true));
};
var closeLightbox = function () {
    lightbox.style.visibility = "hidden";
    lightboxContent.innerHTML = "";
};
for (var i = 0; i < imgsList.length; i++) {
    imgsList[i].addEventListener('click', openLightbox, false);
}
lightbox.addEventListener('click', closeLightbox, false);