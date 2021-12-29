//id
let header:any=document.querySelector(`#header`);
header.style.borderBottom=`solid 2px #ccc`;
header.innerHTML = 'Hello world';
//button click event
let button=document.querySelector(`#myButton`);
button.addEventListener(`click`,(event)=>{
    console.log(`click!`);
});


//class
let container:any=document.querySelector(`.container`);
container.style.color=`blue`;
container.style.fontSize=`40px`;
 
let box:any=document.querySelectorAll(`.box`);
box.forEach(element => {
    element.style.color=`black`;
    element.style.border=`2px solid black`;
    
});

//setTimeout

const myTimeout:any = setTimeout(myGreeting, 3000);
function myGreeting() {
  document.querySelector("#greet").innerHTML = "Happy Birthday!"
}


//Another settimeout
const timey:any = document.querySelector('#timey');
timey.style.fontWeight=`bold`;
timey.style.fontSize=`30px`;
setTimeout(()=>{timey.style.color=`red`;
timey.style.transform='rotateX(180deg)';
timey.style.backgroundColor=`black`;
},3000);


