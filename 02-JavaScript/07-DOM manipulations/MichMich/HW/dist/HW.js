var stickus = document.querySelector(".btn1");
var dori = document.querySelector(".btn2");
var confu = document.querySelector(".btn3");
var bob = document.querySelector(".btn4");
var txt = document.querySelector(".text");
var TXBox = document.querySelector(".txtbox");
stickus.addEventListener("mouseenter", function (e) {
    console.log(txt.textContent = "this is my friend Stickus");
});
dori.addEventListener("mouseenter", function (e) {
    console.log(txt.textContent = "this is my friend dori");
});
confu.addEventListener("mouseenter", function (e) {
    console.log(txt.textContent = "this is my friend confustick");
});
bob.addEventListener("mouseenter", function (e) {
    console.log(txt.textContent = "this is my friend Bob");
});
stickus.addEventListener("mouseleave", function (e) {
    console.log(txt.textContent = "");
});
dori.addEventListener("mouseleave", function (e) {
    console.log(txt.textContent = "");
});
confu.addEventListener("mouseleave", function (e) {
    console.log(txt.textContent = "");
});
bob.addEventListener("mouseleave", function (e) {
    console.log(txt.textContent = "");
});
TXBox.style.height = "7em";
