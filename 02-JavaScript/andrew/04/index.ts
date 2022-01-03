const boxUp:any = document.querySelector(`#box1`);
const boxRight:any = document.querySelector(`#box2`);
const boxLeft:any = document.querySelector(`#box3`);
const boxDown:any = document.querySelector(`#box4`);

const cat:any = document.querySelector(`#cat`);

let yAxis = 0;
let xAxis = 0;
let moveAmount= 50;


boxUp.addEventListener("click", ()=>{yAxis = yAxis-moveAmount;cat.style.top = `${yAxis}px`});
boxRight.addEventListener("click", ()=>{xAxis = xAxis+moveAmount;cat.style.left = `${xAxis}px`});
boxLeft.addEventListener("click", ()=>{xAxis = xAxis-moveAmount;cat.style.left =  `${xAxis}px`});
boxDown.addEventListener("click", ()=>{yAxis = yAxis+moveAmount;cat.style.top = `${yAxis}px`});

