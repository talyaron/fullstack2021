var wrapper1 = document.getElementById('wrapper');
wrapper1.style.display = 'flex';
wrapper1.style.height = '200px';
;
wrapper1.style.justifyContent = 'center';
var text = document.getElementById('text');
text.style.color = 'black';
text.style.fontSize = '3em';
text.style.textAlign = 'center';
text.style.backgroundColor = 'red';
text.style.width = '52.5%';
text.style.height = '8vh';
text.style.position = 'absolute';
text.style.top = '20%';
var img = document.querySelectorAll('img');
var _loop_1 = function (i) {
    console.log(i.alt);
    i.addEventListener('mouseenter', function () {
        text.innerHTML = i.alt;
    });
};
for (var _i = 0, img_1 = img; _i < img_1.length; _i++) {
    var i = img_1[_i];
    _loop_1(i);
}
for (var _a = 0, img_2 = img; _a < img_2.length; _a++) {
    var i = img_2[_a];
    console.log(i.alt);
    i.addEventListener('mouseout', function () {
        text.innerHTML = "";
    });
}
