console.log("ddddddd");
console.dir(window);
console.dir(document);
console.dir(navigator);
var first = document.getElementById("first");
first.style.fontSize = "6em";
first.innerText = "differntw";
first.style.backgroundColor = "yellow";
var second = document.querySelector(".second");
var turd = document.querySelector(".turd");
second.style.backgroundColor = "green";
second.style.width = "500px";
turd.style.height = "300px";
function function1() {
    var x = document.getElementsByClassName(".turd");
    x[0].innerHTML = "third";
}
