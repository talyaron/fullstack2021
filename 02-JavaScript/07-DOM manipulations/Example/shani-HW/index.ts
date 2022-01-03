



document.title='Shanis Page';

//id="Greetings"
let greetings:any=document.querySelector("#Greetings");
greetings.style.fontFamily="Impact,Charcoal,sans-serif";



const greetings1:any= document.getElementById('welcome');
console.dir(greetings1);
setTimeout(function innertext() {greetings1.innerText= 'Welcome'; greetings1.style.color='blue';}, 3000);

const greetings2:any= document.getElementById('shalom');
console.dir(greetings2);
setTimeout(function innertext() {greetings2.innerText= "Shalom"; greetings2.style.color='green';},5000);

let greetings3:any= document.getElementById('hola');
console.dir(greetings3);
setTimeout(function innertext() {greetings3.innerText= "Hola"; greetings3.style.color='red';},7000);




const greetingsAll:any=document.querySelector("#Greetings");
console.dir(greetingsAll);
setTimeout(()=> {greetingsAll.style.transform='rotate(180deg)';},9000);


let pathway:any=document.querySelector("#path");
pathway.style.width="100%"
pathway.style.height="3rem"
pathway.style.backgroundColor="black";
pathway.style.marginTop="5rem";
pathway.style.display="flex";
pathway.style.flexDirection="row"; 
pathway.style.justifyContent=" space-between";



//class="pacman"
let pacman:any=document.querySelector(".pacman")
pacman.style.backgroundColor="yellow";
pacman.style.width="3rem";
pacman.style.height="3rem";
pacman.style.borderRadius="50%";

//how do i make pacman move???//
setTimeout(()=> {pacman.style.transform='translateX(90vw)';},1000);






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
let dots:any=document.querySelectorAll ('.dot');
console.dir (dots);

dots.forEach((element: any) => {
  console.dir (element);
  element.style.backgroundColor="white";
  element.style.width="1rem";
  element.style.height="1rem";
  element.style.borderRadius="50%";
  element.style.margin="15px";  
 
});



const dot0:any= document.querySelectorAll('.dot');
console.dir(dot0);
console.dir(dot0[0]);
setTimeout(function a() {dot0[0].style.backgroundColor='blue'},3000);


const dot1:any= document.querySelectorAll('.dot');
console.dir(dot1);
console.dir(dot1[1]);
setTimeout(function b() {dot1[1].style.backgroundColor='green'},5000);

const dot2:any= document.querySelectorAll('.dot');
console.dir(dot2);
console.dir(dot2[2]);
setTimeout(function c() {dot2[2].style.backgroundColor='red'},7000);

const dot3:any= document.querySelectorAll('.dot');
console.dir(dot3);
console.dir(dot3[3]);
setTimeout(function d() {dot3[3].style.backgroundColor='red'},9000);

const dot4:any= document.querySelectorAll('.dot');
console.dir(dot4);
console.dir(dot4[4]);
setTimeout(function e() {dot4[4].style.backgroundColor='green'},9000);

const dot5:any= document.querySelectorAll('.dot');
console.dir(dot5);
console.dir(dot5[5]);
setTimeout(function f() {dot5[5].style.backgroundColor='blue'},9000);


//id="Bye"

let bye:any=document.querySelector("#Bye");
bye.style.fontFamily="Impact,Charcoal,sans-serif";
bye.style.transform='rotate(180deg)'

const goodbye:any=document.getElementById('goodbye');
goodbye.style.color="blue";

const shalom:any=document.getElementById('shalombye');
shalom.style.color="green";

const adios:any=document.getElementById('adios');
adios.style.color="red";

const goodbye1:any= document.getElementById('goodbye');
console.dir(goodbye1);
setTimeout(function a() {goodbye1.style.color='black'; },3000);

const shalom1:any= document.getElementById('shalombye');
console.dir(shalom1);
setTimeout(function a() {shalom1.style.color='black'; },5000);

const adios1:any= document.getElementById('adios');
console.dir(adios1);
setTimeout(function a() {adios1.style.color='black'; },7000);





const byeAll:any=document.querySelector("#Bye");
console.dir(byeAll);
setTimeout(function transform() {byeAll.style.transform='none';},9000);




let bye1:any= document.getElementById('goodbye');
console.dir( bye1);
setTimeout(function innertext() { bye1.innerText= "Good bye";},9000);

let  bye2:any= document.getElementById('shalombye');
console.dir(bye2);
setTimeout(function innertext() {bye2.innerText= "Shalom";},9000);

let  bye3:any= document.getElementById('adios');
console.dir(bye3);
setTimeout(function innertext() {bye3.innerText= "Adios";},9000);





