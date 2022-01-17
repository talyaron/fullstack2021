//variables for input & storage
let textStorage = [];
let theInput = document.querySelector('.form');
let textDemo =<HTMLElement>document.querySelector('.demoText');


let textEvent = document.querySelectorAll('.input');



textEvent.forEach(elem => {
    elem.addEventListener('keyup', event => {
        var textStorage = (<HTMLInputElement>event.target).value;
        console.dir(event);
        console.log(textStorage);

    })

});


// textEvent.addEventListener('keyup', handleText);


theInput.addEventListener('submit', handleInput);

function handleInput(ev) {
    console.dir(ev);
    textDemo.innerHTML = textStorage;
    //textDemo.innerHTML = 'abba';

}





