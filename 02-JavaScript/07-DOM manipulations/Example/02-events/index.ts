//for only one button

const theFirstButton = document.getElementById('theFirstButton');

theFirstButton.addEventListener('click', runButton1);
theFirstButton.addEventListener('mouseenter', runMouseEnter);
theFirstButton.addEventListener('mouseout', runMouseOut);
theFirstButton.addEventListener('dblclick', ()=>{
    console.log('I was double clicked')
})

function runButton1(){
    console.log('clicked!!!!')
}

function runMouseEnter(){
    console.log('Mouse enterd')
}

function runMouseOut(){
    console.log('Mouse out');
}

function handleRoll(){
    console.log('the wheel rolled');
}

//for many
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button=>{
    button.addEventListener('click', handleClick);
    button.addEventListener('mouseenter', handleMouseEnter)
})

function handleClick(ev):void{
    console.dir(ev);
    const id:string = ev.target.id
    console.log(`I was clicked by button with id ${id}`);
}

function handleMouseEnter(ev){
    console.log(ev)
}