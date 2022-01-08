var text = document.getElementById('text');
var imageContainer = document.querySelectorAll('img');
var _loop_1 = function (hover) {
    hover.addEventListener('mouseenter', function () {
        text.innerHTML = hover.alt;
    });
    hover.addEventListener('mouseleave', function () {
        text.innerHTML = 'Hover Over The Book Cover To Reveal Title';
    });
};
for (var _i = 0, imageContainer_1 = imageContainer; _i < imageContainer_1.length; _i++) {
    var hover = imageContainer_1[_i];
    _loop_1(hover);
}
