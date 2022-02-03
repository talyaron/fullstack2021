const right = document.getElementById('right');
const left = document.getElementById('lrft');
const up = document.getElementById('up');
const bottom = document.getElementById('bottom');
const emoji = document.getElementById('emoji');







const buttons = document.querySelectorAll('.btn');
buttons.forEach(button=>{
    button.addEventListener('click', handleClick);
})

function handleClick(ev):void{
    console.dir(ev);
    const id:string = ev.target.id
    console.log(`I was clicked by button with id ${id}`);
    if(id=='left')
    emoji.style.left="200px"

    else if(id=='right')
    emoji.style.right="200px"

    else if(id=='up')
    emoji.style.top="200px"

    else if(id=='bottom')
    emoji.style.bottom="200px"
}
/*
function handleMouseEnter(ev){
    console.log(ev)
}*/