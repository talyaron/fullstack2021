
let box:any = document.getElementById('boxi');

box.style.border = '5px solid red ';
box.style.background = 'black';

const boxi:any = document.querySelectorAll('.box');

boxi.forEach(elm =>{
    elm.style.color = 'white';
    elm.style.fontSize = '70px' ; 
    elm.style.margin = 'auto' ; 
});

let para = document.querySelector('p');

para.style.fontWeight = 'bold';
setTimeout(() => {para.style.transform = 'rotateX(180deg)'}, 2000);
setTimeout(() => {para.style.transform = 'rotateY(180deg)'}, 4000);
setTimeout(() => {para.style.transform = 'rotateY(0deg)'}, 6000);



let btnCircle = document.getElementById("btnCircle");

btnCircle.onclick = function(){
    if(box.className == "circle" ){
     box.className = " ";
}else{
    box.className = "circle"
}
}

let btnText = document.getElementById('btnText');

btnText.onclick = function(){
    
    if(para.textContent == "Hey!"){
        para.textContent = "Hello";
        para.style.color = "Purple";
        btnText.style.color = " black"
    }else{
        para.textContent = "Hey!";
        para.style.color = "green";
        btnText.style.color = " red"
    }
}








