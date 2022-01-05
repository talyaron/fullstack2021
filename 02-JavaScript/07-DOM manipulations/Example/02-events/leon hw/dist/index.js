var text = document.getElementById("text");
var img = document.querySelectorAll("img");
console.log(img);
img.forEach(function (item) {
    item.addEventListener("mouseover", function () {
        text.innerHTML = item.alt;
    });
});
