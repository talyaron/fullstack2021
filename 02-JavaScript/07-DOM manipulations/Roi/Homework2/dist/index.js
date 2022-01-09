var bruce = document.getElementById("bruce");
var Deep = document.getElementById("Deep");
var DM = document.getElementById("DM");
var Led = document.getElementById("Led");
var Neil = document.getElementById("Neil");
var lowertext = document.getElementById("lowertext");
var img = document.querySelectorAll("img");
var _loop_1 = function (txt) {
    txt.addEventListener("mouseenter", function () {
        lowertext.innerHTML = txt.alt;
    });
};
for (var _i = 0, img_1 = img; _i < img_1.length; _i++) {
    var txt = img_1[_i];
    _loop_1(txt);
}
