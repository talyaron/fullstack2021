//id
var header = document.querySelector("#header");
header.style.borderBottom = "solid 2px #ccc";
header.innerHTML = 'Hello world';
//button click event
var button = document.querySelector("#myButton");
button.addEventListener("click", function (event) {
    console.log("click!");
});
//class
var container = document.querySelector(".container");
container.style.color = "blue";
container.style.fontSize = "40px";
var box = document.querySelectorAll(".box");
box.forEach(function (element) {
    element.style.color = "black";
    element.style.border = "2px solid black";
});
//setTimeout
var myTimeout = setTimeout(myGreeting, 3000);
function myGreeting() {
    document.querySelector("#greet").innerHTML = "Happy Birthday!";
}
//Another settimeout
var timey = document.querySelector('#timey');
timey.style.fontWeight = "bold";
timey.style.fontSize = "30px";
setTimeout(function () {
    timey.style.color = "red";
    timey.style.transform = 'rotateX(180deg)';
    timey.style.backgroundColor = "black";
}, 3000);
