const button1 = document.querySelector('#button1')
const button2 = document.querySelector('#button2')
const button3 = document.querySelector('#button3')
const button4 = document.querySelector('#button4')
const fly: any = document.querySelector('#fly')

// const position = fly.getBoundingClientRect();

button1.addEventListener('click', function () {
    const position = fly.getBoundingClientRect();
    fly.style.left = `${position.left - 80}px`;
});

button2.addEventListener('click', function () {
    const position = fly.getBoundingClientRect();
    fly.style.top = `${position.top - 80}px`;
});

button3.addEventListener('click', function () {
    const position = fly.getBoundingClientRect();
    fly.style.top = `${position.top + 80}px`;
});

button4.addEventListener('click', function () {
    const position = fly.getBoundingClientRect();
    fly.style.left = `${position.left + 80}px`;
});

function refreshPage(){
    window.location.reload();
} 
// function handClick(ev):void {
//     const fly =document.getElementById('fly')
//     const id = ev.target.id;


// const position = fly.getBoundingRect();



// switch(button1){
//     case 'click':
// }


// button1.addEventListener('click', function () {
//     soldier.style.top = `${position.top + 200}px`;
// });

// button2.addEventListener('click', function () {
//     soldier.style.left = `${position.left - 200}px`;
// });





// button2.addEventListener('click', function () {
//     soldier.style.top = soldier.style.top - 100;
// });

  // soldier.style.left = soldier.style.left - 100;