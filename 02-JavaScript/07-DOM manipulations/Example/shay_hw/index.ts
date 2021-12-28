//id element
const target:any = document.querySelector('#theTarget');
console.dir(target);
target.style.backgroundColor = 'gold';
target.style.color ='turquoise';
target.style.fontSize = '5rem';
target.style.textAlign = 'center';

//class element
const boxes:NodeList = document.querySelectorAll('.boxFirst');

console.dir(boxes);
boxes.forEach((elm:any)=>{
console.dir(elm)
elm.style.margin=' 10px';
elm.style.borderRadius = '5px';
elm.style.background = 'purple';
elm.style.textAlign ='center';
elm.style.color ='turquoise';
elm.style.fontSize = '5rem';
});

const boxeSec:NodeList = document.querySelectorAll('.boxSecond');

console.dir(boxeSec);
boxeSec.forEach((secElem:any) => {
    console.dir(secElem);
secElem.style.fontSize = '20rem';   
secElem.style.background = 'blue';
secElem.style.textAlign ='center';
secElem.style.color ='turquoise'; 
secElem.style.borderRadius = '5px';
secElem.style.animation = 'color 5s 2';


});

//element with animation
const colorChange = document.querySelector('p');
colorChange.style.fontSize = '5rem';
colorChange.style.fontFamily = 'arial, sans-serif'
colorChange.style.color = 'turquoise';
colorChange.style.background = 'purple';
colorChange.style.textAlign ='center';
colorChange.style.borderRadius = '15px';
setTimeout(() => {colorChange.style.color= 'purple'}, 3000);
setTimeout(() => {colorChange.style.background= 'turquoise'}, 3000);