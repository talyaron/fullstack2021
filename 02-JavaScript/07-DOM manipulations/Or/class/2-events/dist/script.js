var firstButton = document.getElementById("firstButton");
var secondButton = document.getElementById("secondButton");
var thirdButton = document.getElementById("thirdButton");
firstButton.addEventListener("click", runFirstBtn);
function runFirstBtn(ev) {
    console.dir(ev);
    firstButton.style.background = "yellow";
}
secondButton.addEventListener("mouseenter", function (ev) {
    console.dir(ev);
    secondButton.style.fontSize = "3rem";
});
function dblClick(ev) {
    console.dir(ev);
    thirdButton.style.marginLeft = "150px";
}
