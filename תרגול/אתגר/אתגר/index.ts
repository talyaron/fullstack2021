//variables for input & storage
let textStorage = [];
let theInput = document.querySelector('.form');
const textDemo = document.querySelector('.demoText');


let textEvent = document.querySelectorAll('.input');



textEvent.forEach(elem => {
    elem.addEventListener('keyup', event => {
        textStorage = event.target.value;
        console.dir(event);

    })

});


// textEvent.addEventListener('keyup', handleText);


theInput.addEventListener('submit', handleInput);

function handleInput(ev) {
    console.dir(ev);
    textDemo.innerHTML = textStorage;
}





