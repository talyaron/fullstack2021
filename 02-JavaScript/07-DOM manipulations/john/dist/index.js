var wrapper = document.querySelector(".wrapper");
wrapper.style.color = "blue";
wrapper.style.fontSize = "120px";
var box = document.querySelectorAll(".box");
box.forEach(function (element) {
    element.style.background = 'red';
    element.style.border = "2px solid black";
});
var myTimeout = setTimeout(func, 5000);
function func() {
    document.querySelector("#text").innerHTML = "Merry Christmas!!!!!";
}
