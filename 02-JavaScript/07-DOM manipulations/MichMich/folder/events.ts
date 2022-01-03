const button1 = document.getElementById("btnone");
const button2 = document.getElementById(`btn2`);


button1.addEventListener(`click`,()=>{
    console.log(`it was clicked`);
    
})

button2.addEventListener(`mouseenter`,runMouseEnter);

function runMouseEnter(){
    console.log(`mouse innnnnnnnn`);
    
}





