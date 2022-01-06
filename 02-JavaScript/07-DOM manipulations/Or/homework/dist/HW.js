var rabbiYoramAbargel = document.getElementById("rabbiYoramAbargel");
var rabbiOvadiaYosef = document.getElementById("rabbiOvadiaYosef");
var rabbiMordechaiEliahu = document.getElementById("rabbiMordechaiEliahu");
var rabbi = document.getElementById("rabbi");
var text = document.getElementById("text");
rabbi.addEventListener("mouseenter", function () {
    text.innerHTML = "\u05D4\u05E8\u05D1\u05D9 \u05DE\u05DC\u05D9\u05D5\u05D1\u05D5\u05D5\u05D9\u05D8\u05E9";
});
rabbiOvadiaYosef.addEventListener("mouseenter", function () {
    text.innerHTML = "\u05D4\u05E8\u05D1 \u05E2\u05D5\u05D1\u05D3\u05D9\u05D4 \u05D9\u05D5\u05E1\u05E3";
});
rabbiMordechaiEliahu.addEventListener("mouseenter", function () {
    text.innerHTML = "\u05D4\u05E8\u05D1 \u05DE\u05E8\u05D3\u05DB\u05D9 \u05D0\u05DC\u05D9\u05D4\u05D5";
});
rabbiYoramAbargel.addEventListener("mouseenter", function () {
    text.innerHTML = "\u05D4\u05E8\u05D1 \u05D9\u05D5\u05E8\u05DD \u05D0\u05D1\u05E8\u05D2'\u05DC";
});
