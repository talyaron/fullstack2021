var upBtn = document.getElementById("upBtn");
var downBtn = document.getElementById("downBtn");
var leftBtn = document.getElementById("leftBtn");
var rightBtn = document.getElementById("rightBtn");
var ball = document.getElementById("ball");
upBtn.addEventListener('click', function () {
    ball.style.marginTop = "45vh";
});
downBtn.addEventListener('click', function () {
    ball.style.marginTop = "55VH";
});
leftBtn.addEventListener('click', function () {
    ball.style.marginLeft = "35VW";
});
rightBtn.addEventListener('click', function () {
    ball.style.marginLeft = "45Vw";
});
