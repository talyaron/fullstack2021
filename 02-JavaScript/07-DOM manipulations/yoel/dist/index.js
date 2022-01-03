document.getElementById("name").style.color = "red";
document.getElementById("name").style.background = "blue";
document.getElementById("name").style.fontSize = ("6rem");
var names = document.querySelectorAll(".lastName1");
names.forEach(function (element) {
    console.dir(element);
    element.style.color = "yellow";
    element.style.fontSize = "4rem";
});
