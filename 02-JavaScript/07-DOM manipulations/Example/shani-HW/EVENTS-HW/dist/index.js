var names = document.querySelector('.name');
var images = document.querySelectorAll('img');
images.forEach(function (img) {
    img.addEventListener("mouseover", function () {
        console.dir(img);
        names.innerHTML = img.alt;
    });
});
//changes its background when hovering over album
var george = document.querySelector("#george");
george.addEventListener("mouseenter", function () {
    document.body.style.backgroundColor = "rgb(173,216,230)";
    document.body.style.transition = "1s";
});
var elo = document.querySelector("#elo");
elo.addEventListener("mouseenter", function () {
    document.body.style.backgroundColor = "rgb(25,25,112)";
    document.body.style.transition = "1s";
});
var elton = document.querySelector("#elton");
elton.addEventListener("mouseenter", function () {
    document.body.style.backgroundColor = "rgb(238,232,170)";
    document.body.style.transition = "1s";
});
var abba = document.querySelector("#abba");
abba.addEventListener("mouseenter", function () {
    document.body.style.backgroundColor = "rgb(72,61,139)";
    document.body.style.transition = "1s";
});
var arctic = document.querySelector("#arctic");
arctic.addEventListener("mouseenter", function () {
    document.body.style.backgroundImage = "url(https://c.tenor.com/36PHqsAC5XoAAAAC/do-i-wanna-know-arctic-monkeys.gif)";
    //document.body.style.backgroundRepeat="no-repeat";
    //document.body.style.backgroundSize="cover";
});
var mcr = document.querySelector("#mcr");
mcr.addEventListener("mouseenter", function () {
    document.body.style.background = "radial-gradient(white, black)";
    document.body.style.backgroundSize = "cover";
});
var r5 = document.querySelector("#r5");
r5.addEventListener("mouseenter", function () {
    document.body.style.background = "linear-gradient(to right, rgb(143,188,143) 20%,rgb(219,112,147)40%,rgb(218,165,32)60%,rgb(147,112,219)80%,rgb(30,144,255)100%)";
    document.body.style.backgroundSize = "cover";
});
//makes the background color turn white when the mouse leaves the album pic 
images.forEach(function (img) {
    img.addEventListener("mouseleave", function () {
        console.dir(img);
        document.body.style.backgroundColor = "white";
    });
});
images.forEach(function (img) {
    img.addEventListener("mouseleave", function () {
        console.dir(img);
        document.body.style.backgroundImage = "white";
    });
});
images.forEach(function (img) {
    img.addEventListener("mouseleave", function () {
        console.dir(img);
        document.body.style.background = "white";
    });
});
