const body: any = document.querySelector('body');
body.style.display = 'flex';
body.style.backgroundColor = 'black';
body.style.height = '100vh';
body.style.fontFamily = "'VT323', monospace";

let letters: any = document.querySelectorAll('.logtext');

for(let i=0;i<=letters.length;i++){
function type() {
    letters[i].style.fontSize = '40px';
    letters[i].style.color = '#03A062';

}

setTimeout(type,3000);

}
const dot: any = document.getElementById('lastdot');

function flash(){

    dot.style.display = 'none';

}

setTimeout(flash,4000);

function flashon(){

    dot.style.display = 'block';

}

setTimeout(flashon,5000);

setTimeout(flash, 6000);
setTimeout(flashon, 7000);
setTimeout(flash, 8000);
setTimeout(flashon, 9000);
setTimeout(flash, 10000);
setTimeout(flashon, 11000);

// hi Katya, i know its not the most efficient code. 
// i tried to activate 'for' loop with delays inside for 5 hours straight but i failed =(
//     good day !!

