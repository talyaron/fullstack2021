var pic = document.querySelectorAll('.pic');
var description = document.querySelector('.description');
var text1 = document.getElementById('1');
text1.style.cssText =
    "\nposition: absolute;\nmargin-top: 500px;\nmargin-left: 650px;\nwhite-space: nowrap;\nopacity:0;\n\n";
var text2 = document.getElementById('2');
text2.style.cssText =
    "\nposition: absolute;\nmargin-top: 500px;\nmargin-left: 350px;\nwhite-space: nowrap;\nopacity:0;\n\n";
var text3 = document.getElementById('3');
text3.style.cssText =
    "\nposition: absolute;\nmargin-top: 500px;\nmargin-left: 100px;\nwhite-space: nowrap;\nopacity:0;\n\n";
var text4 = document.getElementById('4');
text4.style.cssText =
    "\nposition: absolute;\nmargin-top: 500px;\nmargin-left: -350px;\nwhite-space: nowrap;\nopacity: 0;\n\n";
var text5 = document.getElementById('5');
text5.style.cssText =
    "\nposition: absolute;\nmargin-top: 500px;\nmargin-left: -500px;\nwhite-space: nowrap;\nopacity: 0;\n\n";
pic.forEach(function (picture) {
    picture.addEventListener('mousemove', handleHover);
    picture.addEventListener('mouseleave', handleHoveroff);
});
function handleHover() {
    for (var i = 0; i < pic.length; i++) {
        this.getElementsByClassName('description')[i].style.opacity = '1';
    }
}
;
function handleHoveroff() {
    for (var i = 0; i < pic.length; i++) {
        this.getElementsByClassName('description')[i].style.opacity = '0';
    }
}
;
