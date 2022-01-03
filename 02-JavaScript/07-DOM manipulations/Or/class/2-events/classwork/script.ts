const upBtn = document.getElementById(`upBtn`);
const downBtn = document.getElementById(`downBtn`);
const leftBtn = document.getElementById(`leftBtn`);
const rightBtn = document.getElementById(`rightBtn`);
const ball = document.getElementById(`ball`)

upBtn.addEventListener('click', ()=>{
    ball.style.marginTop=`45vh`
})
downBtn.addEventListener('click', ()=>{
    ball.style.marginTop=`55VH`
})
leftBtn.addEventListener('click', ()=>{
    ball.style.marginLeft=`35VW`
})
rightBtn.addEventListener('click', ()=>{
    ball.style.marginLeft=`45Vw`
})