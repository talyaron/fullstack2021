var dflt = document.getElementById('deafultText');
dflt.innerHTML = 'These are my pets';
var boxes = document.querySelectorAll('img');
var _loop_1 = function (i) {
    i.addEventListener('mouseenter', function () {
        dflt.innerHTML = 'This is ' + i.alt;
    });
    i.addEventListener('mouseleave', function () {
        dflt.innerHTML = 'These are my pets';
    });
};
for (var _i = 0, boxes_1 = boxes; _i < boxes_1.length; _i++) {
    var i = boxes_1[_i];
    _loop_1(i);
}
