var welcome = document.querySelector(".hello");
var here = document.querySelector("#man");
var goodBye = document.querySelector(".bye");
var unwelcome = document.getElementById("everyone");
var changes = function () {
    welcome.style.fontSize = welcome.style.fontSize + 4 + "rem";
    here.style.color = "red";
    goodBye.style.padding = "20vh";
    goodBye.style.fontSize = "4rem";
    goodBye.style.background = "#3D9970";
    unwelcome.style.display = 'none';
};
changes();
function fadeIn() {
    unwelcome.style.position = 'relative';
    unwelcome.style.width = '100vw';
    unwelcome.style.display = 'block';
    unwelcome.style.fontSize = '5rem';
}
setTimeout(fadeIn, 1000);
function doMove() {
    unwelcome.style.padding = '100px'; // pseudo-property code: Move right by 100px
}
setTimeout(doMove, 1000); // call doMove() in 20 msec
function fadeOut() {
    unwelcome.style.display = 'none';
}
setTimeout(fadeOut, 2000);
console.log(unwelcome);
// function fadeOut() {
//     opacity--;
//     unwelcome.style.opacity = opacity/100;
//     unwelcome.style.display = display/100;
//     if (opacity > 0){
//         setTimeout(fadeOut,speed);
//     }
// }
// fadeOut();
