document.title = 'Shanis Page';
//id="Greetings"
var greetings = document.querySelector("#Greetings");
greetings.style.fontFamily = "Impact,Charcoal,sans-serif";
var greetings1 = document.getElementById('welcome');
console.dir(greetings1);
setTimeout(function innertext() { greetings1.innerText = 'Welcome'; greetings1.style.color = 'blue'; }, 3000);
var greetings2 = document.getElementById('shalom');
console.dir(greetings2);
setTimeout(function innertext() { greetings2.innerText = "Shalom"; greetings2.style.color = 'green'; }, 5000);
var greetings3 = document.getElementById('hola');
console.dir(greetings3);
setTimeout(function innertext() { greetings3.innerText = "Hola"; greetings3.style.color = 'red'; }, 7000);
var greetingsAll = document.querySelector("#Greetings");
console.dir(greetingsAll);
setTimeout(function () { greetingsAll.style.transform = 'rotate(180deg)'; }, 9000);
var pathway = document.querySelector("#path");
pathway.style.width = "100%";
pathway.style.height = "3rem";
pathway.style.backgroundColor = "black";
pathway.style.marginTop = "5rem";
pathway.style.display = "flex";
pathway.style.flexDirection = "row";
pathway.style.justifyContent = " space-between";
//class="pacman"
var pacman = document.querySelector(".pacman");
pacman.style.backgroundColor = "yellow";
pacman.style.width = "3rem";
pacman.style.height = "3rem";
//pacman.style.borderRadius="50%";
//how do i make pacman move???//
setTimeout(function () { pacman.style.transform = 'translateX(90vw)'; }, 1000);
// /i tried to the dots in a loop form but it didnt work out for me
// let dots:any=document.querySelectorAll('.dot');
// for(let i=0;i<=dots.length;i++){
//     function type() {
//         dots.style.backgroundColor="white";
//         dots.style.width="1rem";
//         dots.style.height="1rem";
//         dots.style.borderRadius="50%";
//         dots.style.margin="15px";       
//     }
//class="dot"
var dots = document.querySelectorAll('.dot');
console.dir(dots);
dots.forEach(function (element) {
    console.dir(element);
    element.style.backgroundColor = "white";
    element.style.width = "1rem";
    element.style.height = "1rem";
    element.style.borderRadius = "50%";
    element.style.margin = "15px";
});
var dot0 = document.querySelectorAll('.dot');
console.dir(dot0);
console.dir(dot0[0]);
setTimeout(function a() { dot0[0].style.backgroundColor = 'blue'; }, 3000);
var dot1 = document.querySelectorAll('.dot');
console.dir(dot1);
console.dir(dot1[1]);
setTimeout(function b() { dot1[1].style.backgroundColor = 'green'; }, 5000);
var dot2 = document.querySelectorAll('.dot');
console.dir(dot2);
console.dir(dot2[2]);
setTimeout(function c() { dot2[2].style.backgroundColor = 'red'; }, 7000);
var dot3 = document.querySelectorAll('.dot');
console.dir(dot3);
console.dir(dot3[3]);
setTimeout(function d() { dot3[3].style.backgroundColor = 'red'; }, 9000);
var dot4 = document.querySelectorAll('.dot');
console.dir(dot4);
console.dir(dot4[4]);
setTimeout(function e() { dot4[4].style.backgroundColor = 'green'; }, 9000);
var dot5 = document.querySelectorAll('.dot');
console.dir(dot5);
console.dir(dot5[5]);
setTimeout(function f() { dot5[5].style.backgroundColor = 'blue'; }, 9000);
//id="Bye"
var bye = document.querySelector("#Bye");
bye.style.fontFamily = "Impact,Charcoal,sans-serif";
bye.style.transform = 'rotate(180deg)';
var goodbye = document.getElementById('goodbye');
goodbye.style.color = "blue";
var shalom = document.getElementById('shalombye');
shalom.style.color = "green";
var adios = document.getElementById('adios');
adios.style.color = "red";
var goodbye1 = document.getElementById('goodbye');
console.dir(goodbye1);
setTimeout(function a() { goodbye1.style.color = 'black'; }, 3000);
var shalom1 = document.getElementById('shalombye');
console.dir(shalom1);
setTimeout(function a() { shalom1.style.color = 'black'; }, 5000);
var adios1 = document.getElementById('adios');
console.dir(adios1);
setTimeout(function a() { adios1.style.color = 'black'; }, 7000);
var byeAll = document.querySelector("#Bye");
console.dir(byeAll);
setTimeout(function transform() { byeAll.style.transform = 'none'; }, 9000);
var bye1 = document.getElementById('goodbye');
console.dir(bye1);
setTimeout(function innertext() { bye1.innerText = "Good bye"; }, 9000);
var bye2 = document.getElementById('shalombye');
console.dir(bye2);
setTimeout(function innertext() { bye2.innerText = "Shalom"; }, 9000);
var bye3 = document.getElementById('adios');
console.dir(bye3);
setTimeout(function innertext() { bye3.innerText = "Adios"; }, 9000);
