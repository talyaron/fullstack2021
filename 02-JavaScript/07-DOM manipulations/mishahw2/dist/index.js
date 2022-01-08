var dflt = document.getElementById('deafultText');
var boxes = document.querySelectorAll('img');
var _loop_1 = function (i) {
    i.addEventListener('mouseenter', function () {
        dflt.innerHTML = 'This is ' + i.alt;
    });
};
for (var _i = 0, boxes_1 = boxes; _i < boxes_1.length; _i++) {
    var i = boxes_1[_i];
    _loop_1(i);
}
for (var _a = 0, boxes_2 = boxes; _a < boxes_2.length; _a++) {
    var i = boxes_2[_a];
    i.addEventListener('mouseleave', function () {
        dflt.innerHTML = 'Those are my pets';
    });
}
