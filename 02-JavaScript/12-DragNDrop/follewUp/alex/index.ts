const willy: HTMLElement = document.querySelector("#willy");
const box: HTMLElement = document.querySelector("#box");
const pool: HTMLElement = document.querySelector("#pool");

willy.ondragstart = handleDragStart;
willy.ondragend = handleDragEnd;

box.ondragstart = handleDragStart;
box.ondragend = handleDragEnd;

pool.ondrop = handleDrop;
pool.ondragover =  handleDragOver;

const dragData = {offsetX:0, offsetY:0}

function handleDragStart(ev: DragEvent){
    dragData.offsetX = ev.offsetX;
    dragData.offsetY = ev.offsetY;
    

}

function handleDragEnd(ev: DragEvent){
const target: any = ev.target;
target.style.top = `${ev.y - dragData.offsetY}px`
target.style.left = `${ev.x - dragData.offsetX}px`
}
function handleDrop(ev:any){
console.log(ev)
}
function handleDragOver(ev:any){
console.log(ev)
}