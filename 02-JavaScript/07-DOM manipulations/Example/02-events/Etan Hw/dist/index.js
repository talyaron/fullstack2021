/* this is meant to seperate each letter in a description ID */
var text = document.querySelector("#description");
var strText = text.textContent;
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
var dad = document.getElementById('dad');
var Benji = document.getElementById('Benji');
var Ning = document.getElementById('Ning');
var Tamir = document.getElementById('Tamir');
var Romi = document.getElementById('Romi');
var Mejohnindavi = document.getElementById('Mejohnindavi');
var Citron = document.getElementById('Citron');
var Chen = document.getElementById('Chen');
mom.addEventListener('mouseenter', function () {
    text.innerHTML = 'this is my mother.';
});
mom.addEventListener('mouseleave', function () {
    text.innerHTML = "Who's next?";
});
dad.addEventListener('mouseenter', function () {
    text.innerHTML = 'this is my father.';
});
dad.addEventListener('mouseleave', function () {
    text.innerHTML = "Who's-next?";
});
Benji.addEventListener('mouseenter', function () {
    text.innerHTML = 'this is my half brother, Benjamin (Benji).';
});
Benji.addEventListener('mouseleave', function () {
    text.innerHTML = "his mother is to the right";
});
Ning.addEventListener('mouseenter', function () {
    text.innerHTML = "this is Ning, she's my fathers wife.";
});
Ning.addEventListener('mouseleave', function () {
    text.innerHTML = "Who's next?";
});
Tamir.addEventListener('mouseenter', function () {
    text.innerHTML = 'this is my brother, Tamir.';
});
Tamir.addEventListener('mouseleave', function () {
    text.innerHTML = "Who's next?";
});
Romi.addEventListener('mouseenter', function () {
    text.innerHTML = "this is my wife, Romina, she's from paraguay";
});
Romi.addEventListener('mouseleave', function () {
    text.innerHTML = "Who's next?";
});
Mejohnindavi.addEventListener('mouseenter', function () {
    text.innerHTML = 'oh no that picture again? johni and avi are two of my best friends who dont have recent pics';
});
Mejohnindavi.addEventListener('mouseleave', function () {
    text.innerHTML = "Who's next?";
});
Citron.addEventListener('mouseenter', function () {
    text.innerHTML = 'this is my friend citron.';
});
Citron.addEventListener('mouseleave', function () {
    text.innerHTML = "Who's next?";
});
Chen.addEventListener('mouseenter', function () {
    text.innerHTML = 'this is my friend chen';
});
Chen.addEventListener('mouseleave', function () {
    text.innerHTML = "Who's next?";
});
