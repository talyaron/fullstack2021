const buttons = document.querySelectorAll('.buttons');
buttons.forEach(button=>{
    button.addEventListener('click', handleClick);
    button.addEventListener('mouseenter', handleMouseEnter)
})
const move =document.getElementById('moves');
function handleClick(ev):void{
    const id:string = ev.target.id 
    
    if (id==`left`){
        
        move.style.transform= 'translateX(10px)';


    }
    console.dir(ev);
    
    console.log(`I was clicked by button with id ${id}`);
}

function handleMouseEnter(ev){
    console.log(ev)
}