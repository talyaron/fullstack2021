var text = document.getElementById("text");
var img = document.querySelectorAll("img");
img.forEach(function (item) {
    item.addEventListener("mousedown", function () {
        text.innerHTML = item.alt;
    });
});
