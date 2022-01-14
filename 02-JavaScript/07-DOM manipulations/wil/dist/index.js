var spiderman = document.getElementById("spiderman");
var superman = document.getElementById("superman");
var catwoman = document.getElementById("catwoman");
var supergirl = document.getElementById("supergirl");
var img = document.querySelectorAll("img");
var text = document.getElementById("text");
spiderman.addEventListener('mouseover', function () {
    text.innerHTML = 'this is spiderman';
});
superman.addEventListener('mouseover', function () {
    text.innerHTML = 'this is superman';
});
catwoman.addEventListener('mouseover', function () {
    text.innerHTML = 'this is catwoman';
});
supergirl.addEventListener('mouseover', function () {
    text.innerHTML = 'this is supergirl';
});
