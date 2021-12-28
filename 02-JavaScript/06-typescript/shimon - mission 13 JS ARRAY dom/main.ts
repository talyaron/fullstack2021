const type11 = document.querySelector('.type1');
console.dir(type11);
console.log(type11);
type11.style.color='blue';

const type12 = document.querySelector('.type2');
console.dir(type12);
console.log(type12);
type12.style.backgroundColor='yellow';

const type13 = document.querySelector('.type3');
console.dir(type13);
console.log(type13);
type13.style.fontSize='40px';

const type14 = document.querySelector(".type4");
console.dir(type14);
console.log(type14);
type14.style.fontSize='30px';

const type15 = document.querySelector(".type5");
console.dir(type15);
console.log(type15);
type15.style.fontSize='30px';
type15.style.backgroundColor='#8A2BE2';
type15.style.padding='5px';


const type16 = document.getElementById("box1");
console.dir(type16);
console.log(type16);
type16.style.fontSize='30px';
type16.style.backgroundColor='#6495ED';
type16.style.padding='30px';

const type17 = document.getElementById("box2");
console.dir(type17);
console.log(type17);
type17.style.fontSize='60px';
type17.style.backgroundColor='#3434ED';
type17.style.padding='10px';


let timeout;

function myFunction() {
  timeout = setTimeout(alertFunc, 3000);
}

function alertFunc() {
  alert("Hello!");
}


