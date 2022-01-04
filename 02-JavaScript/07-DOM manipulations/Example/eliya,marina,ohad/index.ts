const right = document.getElementById('right');
const left = document.getElementById('lrft');
const up = document.getElementById('up');
const botom = document.getElementById('botom');


//const up = document.getElementById('up');


up.addEventListener('click', up1);

function up1(){
    console.log('clicked!!!!')
}



/*
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button=>{
    button.addEventListener('click', handleClick);
    //button.addEventListener('mouseenter', handleMouseEnter)
})*/

function handleClick(ev):void{
    console.dir(ev);
    const id:string = ev.target.id
    console.log(`I was clicked by button with id ${id}`);
}
/*
function handleMouseEnter(ev){
    console.log(ev)
}*/