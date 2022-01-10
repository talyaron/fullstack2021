var pictures = document.querySelectorAll('.pic');
var description = document.querySelector('.description');
var text1 = document.getElementById('1');
text1.style.cssText =
    "\nposition: absolute;\nmargin-top: 550px;\nmargin-left: 600px;\nwhite-space: nowrap;\nopacity:0;\n\n";
var text2 = document.getElementById('2');
text2.style.cssText =
    "\nposition: absolute;\nmargin-top: 550px;\nmargin-left: 250px;\nwhite-space: nowrap;\nopacity:0;\n\n";
var text3 = document.getElementById('3');
text3.style.cssText =
    "\nposition: absolute;\nmargin-top: 550px;\nmargin-left: -400px;\nwhite-space: nowrap;\nopacity: 0;\n\n";
var text4 = document.getElementById('4');
text4.style.cssText =
    "\nposition: absolute;\nmargin-top: 550px;\nmargin-left: -500px;\nwhite-space: nowrap;\nopacity: 0;\n\n";
pictures.forEach(function (picture) {
    picture.addEventListener('mouseenter', function () { return handleHover(picture); });
    picture.addEventListener('mouseleave', function () { return handleHoveroff(picture); });
});
function handleHover(picture) {
    picture.children[2].style.opacity = '1';
}
;
function handleHoveroff(picture) {
    picture.children[2].style.opacity = '0';
}
;
