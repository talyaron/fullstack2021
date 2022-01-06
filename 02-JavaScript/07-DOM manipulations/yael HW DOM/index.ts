const boxes:NodeList = document.querySelectorAll('.box');

console.dir(boxes);
boxes.forEach((elm:any)=>{
console.dir(elm)
elm.style.background = 'brown';
elm.style.margin='5px'
elm.style.borderRadius = '5px';
elm.style.textAlign ='center';
elm.style.color ='pink';
elm.style.fontSize = '2rem';
elm.style.borderRadius = '2rem';
});


const Target:any = document.querySelector('#simpleBox');
console.dir(Target);
Target.style.fontSize = '5rem';
Target.style.backgroundColor = 'yellow';
Target.style.border = '5px solid ';
Target.style.color ='red';
Target.style.textAlign = 'center';
setTimeout(function () { Target.style.transform = 'rotate(180deg)'; }, 3000);
setTimeout(function () { Target.style.transform = 'rotate(360deg)'; }, 6000);




const fontChange:any = document.querySelector('#simpleBox2');
fontChange.style.fontSize = '3rem';
fontChange.style.border = '5px solid ';
fontChange.style.backgroundColor = 'grey';
fontChange.style.color = 'purple';
fontChange.style.fontFamily = 'arial, sans-serif'
setTimeout(() => {fontChange.style.fontSize= '5rem'}, 3000);
setTimeout(() => {fontChange.style.color= 'pink'}, 3000);
setTimeout(() => {fontChange.style.textAlign= 'center'}, 3000);
setTimeout(() => {fontChange.style.backgroundColor= 'blue'}, 3000);

