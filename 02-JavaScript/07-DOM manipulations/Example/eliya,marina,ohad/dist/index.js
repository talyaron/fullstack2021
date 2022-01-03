var right = document.getElementById('right');
var left = document.getElementById('lrft');
var up = document.getElementById('up');
var botom = document.getElementById('botom');
//const up = document.getElementById('up');
up.addEventListener('click', up1);
function up1() {
    console.log('clicked!!!!');
}
/*
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button=>{
    button.addEventListener('click', handleClick);
    //button.addEventListener('mouseenter', handleMouseEnter)
})*/
function handleClick(ev) {
    console.dir(ev);
    var id = ev.target.id;
    console.log("I was clicked by button with id " + id);
}
/*
function handleMouseEnter(ev){
    console.log(ev)
}*/ 
