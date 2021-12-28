
//id
const contain:any = document.querySelector('#container')
contain.style.border = '3px solid blue';
// const contain = document.getElementById('container');
// contain.style.border = '3px solid blue';


//.qSelectors
const box1:any = document.querySelector('.box');
box1.style.color = 'red';
box1.style.fontSize = '3rem';

const boxes:any = document.querySelectorAll('.box');
boxes.forEach(elm => {
    elm.style.backgroundColor = 'pink';   
});

//p style & setTimeout
const pargraph = document.querySelector('p');
pargraph.style.fontWeight = 'bold';
pargraph.style.fontFamily = 'arial, sans-serif'
setTimeout(() => {pargraph.style.transform = 'rotateY(180deg)'}, 3000);



