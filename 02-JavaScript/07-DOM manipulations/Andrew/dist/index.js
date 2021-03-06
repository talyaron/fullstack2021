var board = document.querySelector('#board');
// board.style.width = '650px';
// board.style.height = '650px';
// board.style.background = 'brown';
// board.style.display = 'flex';
// board.style.justifyContent = 'center';
// board.style.alignItems = 'center';
board.style.cssText =
    "\nwidth: 650px;\nheight: 650px;\nbackground: brown;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\n";
var grid = document.querySelector('#grid');
grid.style.width = '600px';
grid.style.height = '600px';
grid.style.display = 'grid';
grid.style.gridTemplateRows = 'repeat(8, 1fr)';
grid.style.gridTemplateColumns = 'repeat(8, 1fr)';
grid.style.position = 'relative';
// grid.style.cssText =
// `
// width: 600px;
// height: 600px;
// display: grid;
// grid-template-rows: repeat(8, 1fr);
// grid-template-columns: repeat(8, 1fr);
// grid.style.position: relative;
// `
var cells = document.querySelectorAll('.cell');
cells.forEach(function (element) {
    element.style.width = '70px';
    element.style.height = '70px';
});
var whites = document.querySelectorAll('.white');
whites.forEach(function (element) {
    element.style.background = 'white';
});
var blacks = document.querySelectorAll('.black');
blacks.forEach(function (element) {
    element.style.background = 'black';
});
var pieces = document.querySelectorAll('img');
pieces.forEach(function (element) {
    // element.style.width = '65px';
    // element.style.height = '65px';
    // element.style.position = 'absolute';
    // element.style.filter = 'drop-shadow(0px 0px 8px white)';
    // element.style.transition = 'ease 0.4s';
    element.style.cssText =
        "\n    width: 65px;\n    height: 65px;\n    position: absolute;\n    filter: drop-shadow(0px 0px 8px white);\n    transition: ease 0.4s;\n    ";
});
var kingBlack = document.querySelector('#kingB');
var kingWhite = document.querySelector('#kingW');
var knightBlack = document.querySelector('#knightB');
var bishopWhite = document.querySelector('#bishopW');
var rookWhite = document.querySelector('#rookW');
var pawnBlack = document.querySelector('#pawnB');
var pawnWhite = document.querySelector('#pawnW');
kingBlack.style.left = '450px';
pawnBlack.style.left = '450px';
pawnBlack.style.top = '80px';
kingWhite.style.top = '450px';
kingWhite.style.left = '75px';
knightBlack.style.left = '375px';
knightBlack.style.top = '80px';
rookWhite.style.top = '300px';
rookWhite.style.left = '300px';
bishopWhite.style.top = '530px';
bishopWhite.style.left = '530px';
pawnWhite.style.top = '380px';
pawnWhite.style.left = '75px';
var animationTime = 700;
var animationDelay = 3000;
var timeout1st = setTimeout(firstMove, animationDelay + animationTime); // 3700ms
var timeout2nd = setTimeout(secondMove, animationDelay + animationTime * 2); // 4400ms
var timeout3rd = setTimeout(thirdMove, animationDelay + animationTime * 3); //  5100ms 
var timeout4th = setTimeout(fourthMove, animationDelay + animationTime * 4); // 5800ms
var timeout5th = setTimeout(fifthMove, animationDelay + animationTime * 5); //  6500ms
function firstMove() {
    pawnWhite.style.top = '300px';
}
;
function secondMove() {
    knightBlack.style.left = '225px';
    knightBlack.style.top = '155px';
}
;
function thirdMove() {
    pawnWhite.style.top = '225px';
}
;
function fourthMove() {
    knightBlack.style.left = '300px';
    knightBlack.style.top = '305px';
    rookWhite.style.visibility = 'hidden';
}
;
function fifthMove() {
    bishopWhite.style.top = '305px';
    bishopWhite.style.left = '300px';
    knightBlack.style.visibility = 'hidden';
}
;
