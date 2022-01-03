const buttons= document.querySelectorAll(`.btn`);

buttons.forEach(button=>{
    button.addEventListener(`click`, handleClick)
})

console.dir(ev);

function handleClick( ev )
{  
    var clickedLink = e.target;    
    // getting location of clicked link.
    e.style.top = "200px";
    e.style.left = "200px"










