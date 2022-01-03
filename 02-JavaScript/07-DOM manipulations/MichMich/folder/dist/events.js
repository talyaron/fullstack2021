var button1 = document.getElementById("btnone");
var button2 = document.getElementById("btn2");
button1.addEventListener("click", function () {
    console.log("it was clicked");
});
button2.addEventListener("mouseenter", runMouseEnter);
function runMouseEnter() {
    console.log("mouse innnnnnnnn");
}
