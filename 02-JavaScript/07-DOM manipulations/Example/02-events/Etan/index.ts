const btn1 = document.querySelector('#first');
const btn2 = document.querySelector('#second');
const btn3 = document.querySelector('#third');
const field = document.querySelector('h1');
const btns:any = document.querySelectorAll('.btn');


btn1.addEventListener('click', hello);
function hello(){
    field.textContent = 'Hello!'
}

field.addEventListener('click', () =>{
    field.textContent = 'Change me!';
})

function goodBye(){
    field.textContent = 'Good Bye!'
}

function how(){
    field.textContent = 'how\'s it going?'
}

btns.forEach(button=> {button.style.color = 'red'});