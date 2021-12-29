var welcome = document.querySelector(".hello");
var world = document.querySelector('#world');
//const time was taken down along with the stylings because of loading order
var here = document.querySelector("#man");
var goodBye = document.querySelector(".bye");
var unwelcome = document.getElementById("everyone");
console.log(unwelcome);
// time projected message and background:
var getBody = document.body;
var newElement = document.createElement('h1');
var date = new Date();
var currentHour = date.getHours();
var changeBack;
var createTxtMsg;
if (currentHour >= 4 && currentHour < 10) {
    createTxtMsg = 'Good Morning!';
}
else if (currentHour >= 10 && currentHour < 12) {
    createTxtMsg = 'Good Day!';
}
else if (currentHour >= 12 && currentHour < 18) {
    createTxtMsg = 'Good Afternoon!';
}
else if (currentHour >= 18 && currentHour < 22) {
    createTxtMsg = 'Good Evening!';
}
else if (currentHour >= 22 && currentHour < 4) {
    createTxtMsg = 'Good Night!';
}
else {
    createTxtMsg = 'Are you from mars? ;)';
}
var createEleTxt = document.createTextNode(createTxtMsg);
newElement.appendChild(createEleTxt);
welcome.appendChild(newElement);
newElement.setAttribute('id', 'time');
function changeColor() {
    //rgb
    console.log('event fired');
    var colors = [0, 0, 0];
    console.log(currentHour);
    //Will get a valid rgb color
    var color = (255 / 24 * currentHour);
    console.log(color);
    for (var i = 0; i < colors.length; i++) {
        colors[i] = color;
    }
    getBody.style.background = "rgb(" + colors[0] + "," + colors[1] + "," + colors[2] + ")";
}
changeColor();
var time = document.querySelector('#time');
var changes = function () {
    welcome.style.fontSize = welcome.style.fontSize + 2 + "rem";
    welcome.style.display = 'flex';
    welcome.style.justifyContent = 'space-around';
    welcome.style.alignItems = 'baseline';
    welcome.style.color = '#FAEBD7';
    time.style.cssText = 'text-align: center; font-size: 60px; font-family: arial';
    here.style.color = "red";
    goodBye.style.padding = "20vh";
    goodBye.style.fontSize = "4rem";
    goodBye.style.background = "#3D9970";
    unwelcome.style.display = 'none';
};
changes();
function fadeIn() {
    unwelcome.style.position = 'absolute';
    unwelcome.style.width = 'fit-content';
    unwelcome.style.display = 'block';
    unwelcome.style.right = 0;
    unwelcome.style.bottom = 0;
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
