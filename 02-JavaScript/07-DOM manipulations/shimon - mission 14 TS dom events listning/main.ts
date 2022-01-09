
const spiderman = document.getElementById('spider-man');
const xman = document.getElementById('x-men');
const batman = document.getElementById('batman');
const captainamerica = document.getElementById('captain-america');
const hulk = document.getElementById('hulk');

const text = document.getElementById("text");


spiderman.addEventListener('mouseenter', () => {
    text.innerHTML = 'spider-man'
})

xman.addEventListener('mouseenter', () => {
    text.innerHTML = 'x-men'
})

batman.addEventListener('mouseenter', () => {
    text.innerHTML = 'batman'
})

captainamerica.addEventListener('mouseenter', () => {
    text.innerHTML = 'captain america'
})

hulk.addEventListener('mouseenter', () => {
    text.innerHTML = 'hulk'
})