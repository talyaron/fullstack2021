const buttons = document.querySelectorAll('.btn');
buttons.forEach(button=>{
    button.addEventListener('click', moveDown);
    button.addEventListener('click', moveUp);
    button.addEventListener('click', moveLeft);
    button.addEventListener('click', moveRight);
})

function moveDown(ev){
    const id = ev.target.id
    document.getElementById('img').animate([
        { transform: 'rotate(0deg)' },
        { transform: 'rotate(180deg)' }
    ]);
}

function moveUp(ev){
    const id = ev.target.id
    document.getElementById('img').animate([
        { transform: 'rotate(0deg)' },
        { transform: 'rotate(360deg)' }
    ])
    
}
function moveLeft(ev){
    const id = ev.target.id
    document.getElementById('img').animate([
        { transform: 'rotate(0deg)' },
        { transform: 'rotate(360deg)' }
    ])
    
}
function moveRight(ev){
    const id = ev.target.id
    document.getElementById('img').animate([
        { transform: 'rotate(0deg)' },
        { transform: 'rotate(360deg)' }
    ])
    
}

////for many
// const buttons = document.querySelectorAll('.btn');
// buttons.forEach(button=>{
//     button.addEventListener('click', handleClick);
//     button.addEventListener('mouseenter', handleMouseEnter)
// })

// function handleClick(ev):void{
//     console.dir(ev);
//     const id:string = ev.target.id
//     console.log(`I was clicked by button with id ${id}`);
// }

// function handleMouseEnter(ev){
//     console.log(ev)
// }