var firstbtn = document.getElementById("firstbtn");
var secondbtn = document.getElementById("secondbtn");
var thirdbtn = document.getElementById("thirdbtn");
firstbtn.addEventListener("click", clickButton);
thirdbtn.addEventListener("dblclick", doubleClick);
function clickButton() {
    console.log("button number 1 was clicked");
}
function over() {
    console.log("you moved your mouse over number 2");
}
function doubleClick() {
    console.log("you double clicked number 3");
}
