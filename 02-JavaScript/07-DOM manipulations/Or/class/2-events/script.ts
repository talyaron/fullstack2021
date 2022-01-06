const firstButton = document.getElementById(`firstButton`);

const secondButton = document.getElementById(`secondButton`);

const thirdButton = document.getElementById(`thirdButton`);

firstButton.addEventListener(`click`, runFirstBtn);

function runFirstBtn(ev) {
    console.dir(ev)
    firstButton.style.background = `yellow`;
}

secondButton.addEventListener(`mouseenter`, (ev)=>{
    console.dir(ev)
    secondButton.style.fontSize = `3rem`;

})
function dblClick(ev){
    console.dir(ev)
    thirdButton.style.marginLeft = `150px`;
}
