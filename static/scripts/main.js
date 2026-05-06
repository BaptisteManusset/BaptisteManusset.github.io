
// Select the button
const btn = document.querySelector(".dark-toggle");
// Check for dark mode preference at the OS level
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// Get the user's theme preference from local storage, if it's available
const currentTheme = localStorage.getItem("theme");
// If the user's preference in localStorage is dark...
if (currentTheme == "dark") {
    // ...let's toggle the .dark-theme class on the body
    document.body.classList.toggle("dark-theme");
    // Otherwise, if the user's preference in localStorage is light...
} else if (currentTheme == "light") {
    // ...let's toggle the .light-theme class on the body
    document.body.classList.toggle("light-theme");
}

// Listen for a click on the button
btn.addEventListener("click", function () {
    // If the user's OS setting is dark and matches our .dark-theme class...
    console.log("test " + prefersDarkScheme.matches);
    // if (prefersDarkScheme.matches) {


    //     // ...then toggle the light mode class
    //     // document.body.classList.toggle("light-theme");
    //     // // ...but use .dark-theme if the .light-theme class is already on the body,
    // } else {
    //     // Otherwise, let's do the same thing, but for .dark-theme
    //     document.body.classList.toggle("dark-theme");
    //     var theme = document.body.classList.contains("dark-theme") ? "dark" : "light";
    // }

    document.body.classList.toggle("dark-theme");
    var theme = document.body.classList.contains("dark-theme") ? "dark" : "light";
    // Finally, let's save the current preference to localStorage to keep using it
    localStorage.setItem("theme", theme);
});

const lightbox = document.querySelector(".lightbox");
const article = document.querySelector("article");

const lightboxImg = lightbox.querySelector("img");
const lightboxText = lightbox.querySelector("p");
lightbox.addEventListener('click', () => {
    lightbox.classList.add('hide');
    article.classList.remove("blur");
});
document.querySelectorAll('.focus').forEach(img => {
    img.addEventListener('click', () => {
        lightboxImg.setAttribute("src", img.getAttribute("src"));
        lightboxText.textContent = img.getAttribute("alt");
        lightbox.classList.remove('hide');
        article.classList.add("blur");
    });
});


function circularText(classIndex, left = "-7%", top = "5%") {

    classIndex = document.getElementsByClassName("circTxt")[classIndex];
    if (typeof classIndex === 'undefined') return;

    var txt = classIndex.getAttribute("data-text");
    var radius = classIndex.getAttribute("data-radius");

    txt = txt.split("");
    classIndex.style.cssText = `height:${radius * 2}px;width:${radius * 2}px;left:${left};top:${top};`;
    var deg = 360 / txt.length;
    var origin = 0;

    txt.forEach((ea) => {
        ea = `<p style='height:${radius}px;margin-left:${radius}px;position:absolute;transform:rotate(${origin}deg);transform-origin:0 100%'>${ea}</p>`;
        classIndex.innerHTML += ea;
        origin += deg;
    });
}

circularText(0);