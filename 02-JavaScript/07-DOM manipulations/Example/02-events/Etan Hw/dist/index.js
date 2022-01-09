/* this is meant to seperate each letter in a description ID */
var text = document.querySelector("#description");
var strText = text.innerHTML;
var splitText = strText.split("");
console.log(splitText);
text.textContent = "";
splitText.forEach(function (i) {
    text.innerHTML += '<span>' + ("" + i) + '</span>';
});
// for (i = 0; i < splitText.length; i++) {
//   text.innerHTML += "<span>" + splitText[i] + "</span>";
// }
/* this is the animation part */
var char = 0;
var timer = setInterval(onTick, 50);
function onTick() {
    var span = text.querySelectorAll("span")[char];
    span.classList.add("fade");
    char++;
    if (char === splitText.length) {
        complete();
        return;
    }
}
function complete() {
    clearInterval(timer);
    timer = null;
}
var mom = document.getElementById('mom');
var dadndBen = document.getElementById('dadndBen');
var Tamir = document.getElementById('Tamir');
var Romi = document.getElementById('Romi');
var Mejohnindavi = document.getElementById('Mejohnindavi');
var Citron = document.getElementById('Citron');
var Chen = document.getElementById('Chen');
mom.addEventListener('mouseenter', function () {
    text.innerHTML = 'this-is-my-mother';
});
mom.addEventListener('mouseleave', function () {
    text.innerHTML = "Who's-next?";
});
dadndBen.addEventListener('mouseenter', function () {
    text.innerHTML = 'this-is-my-father-and-his-new-son,-benjamin.';
});
dadndBen.addEventListener('mouseleave', function () {
    text.innerHTML = "Who's-next?";
});
Tamir.addEventListener('mouseenter', function () {
    text.innerHTML = 'this-is-my-mother';
});
Tamir.addEventListener('mouseleave', function () {
    text.innerHTML = "Who's-next?";
});
Romi.addEventListener('mouseenter', function () {
    text.innerHTML = 'this-is-my-mother';
});
Romi.addEventListener('mouseleave', function () {
    text.innerHTML = "Who's-next?";
});
Mejohnindavi.addEventListener('mouseenter', function () {
    text.innerHTML = 'this-is-my-mother';
});
Mejohnindavi.addEventListener('mouseleave', function () {
    text.innerHTML = "Who's-next?";
});
Citron.addEventListener('mouseenter', function () {
    text.innerHTML = 'this-is-my-mother';
});
Citron.addEventListener('mouseleave', function () {
    text.innerHTML = "Who's-next?";
});
Chen.addEventListener('mouseenter', function () {
    text.innerHTML = 'this-is-my-mother';
});
Chen.addEventListener('mouseleave', function () {
    text.innerHTML = "Who's-next?";
});
