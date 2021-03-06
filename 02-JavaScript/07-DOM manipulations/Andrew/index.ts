const board: any = document.querySelector('#board');
// board.style.width = '650px';
// board.style.height = '650px';
// board.style.background = 'brown';
// board.style.display = 'flex';
// board.style.justifyContent = 'center';
// board.style.alignItems = 'center';
board.style.cssText =
`
width: 650px;
height: 650px;
background: brown;
display: flex;
justify-content: center;
align-items: center;
`

const grid: any = document.querySelector('#grid');
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

const cells: any = document.querySelectorAll('.cell');
cells.forEach(element => {
    element.style.width = '70px';
    element.style.height = '70px';
});

const whites: any = document.querySelectorAll('.white');
whites.forEach(element => {
    element.style.background = 'white';
});
const blacks: any = document.querySelectorAll('.black');
blacks.forEach(element => {
    element.style.background = 'black';
});

const pieces: any = document.querySelectorAll('img');
pieces.forEach(element => {
    // element.style.width = '65px';
    // element.style.height = '65px';
    // element.style.position = 'absolute';
    // element.style.filter = 'drop-shadow(0px 0px 8px white)';
    // element.style.transition = 'ease 0.4s';
    element.style.cssText =
    `
    width: 65px;
    height: 65px;
    position: absolute;
    filter: drop-shadow(0px 0px 8px white);
    transition: ease 0.4s;
    `
});
const kingBlack: any = document.querySelector('#kingB');
const kingWhite: any = document.querySelector('#kingW');
const knightBlack: any = document.querySelector('#knightB');
const bishopWhite: any = document.querySelector('#bishopW');
const rookWhite: any = document.querySelector('#rookW');
const pawnBlack: any = document.querySelector('#pawnB');
const pawnWhite: any = document.querySelector('#pawnW');

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




const animationTime = 700;
const animationDelay = 3000;

const timeout1st = setTimeout(firstMove,  animationDelay+animationTime);     // 3700ms
const timeout2nd = setTimeout(secondMove, animationDelay+animationTime*2);   // 4400ms
const timeout3rd = setTimeout(thirdMove, animationDelay+animationTime*3);   //  5100ms 
const timeout4th = setTimeout(fourthMove, animationDelay+animationTime*4);   // 5800ms
const timeout5th = setTimeout(fifthMove, animationDelay+animationTime*5);   //  6500ms

function firstMove() {
    pawnWhite.style.top = '300px';
};
function secondMove() {
    knightBlack.style.left = '225px';
    knightBlack.style.top = '155px';
};
function thirdMove() {
    pawnWhite.style.top = '225px';
};
function fourthMove() {
    knightBlack.style.left = '300px';
    knightBlack.style.top = '305px';
    rookWhite.style.visibility = 'hidden';
};
function fifthMove() {
    bishopWhite.style.top = '305px';
    bishopWhite.style.left = '300px';
    knightBlack.style.visibility = 'hidden';
};