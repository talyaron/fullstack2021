var betty = document.getElementById("betty");
var selena = document.getElementById("selena");
var tom = document.getElementById("tom");
var zendaya = document.getElementById("zendaya");
var text = document.getElementById("text");
var img = document.querySelectorAll("img");
var _loop_1 = function (item) {
    item.addEventListener("mouseenter", function () {
        text.innerHTML = item.alt;
        console.log(item.alt);
    });
};
for (var _i = 0, img_1 = img; _i < img_1.length; _i++) {
    var item = img_1[_i];
    _loop_1(item);
}
