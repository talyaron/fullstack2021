const willy: HTMLElement = document.querySelector("#willy");
const box: HTMLElement = document.querySelector("#box");
const pool:HTMLElement = document.querySelector("#pool")

willy.ondragstart = handlDragStart;
willy.ondragend = handleDragEnd;


box.ondragstart = handlDragStart;
box.ondragend = handleDragEnd;


pool.ondrop = handelDrop;
pool.ondragover = handelDragOver;
pool.ondragenter = handleDragEnter;
pool.ondragleave = handleDrageLeave;


const dragData = { offsetX: 0, offsetY: 0 };

function handlDragStart(ev: DragEvent) {
  ev.dataTransfer.dropEffect = "move";
  dragData.offsetX = ev.offsetX;
  dragData.offsetY = ev.offsetY;
}

function handleDragEnd(ev: DragEvent) {
 
  const target: any = ev.target;
  target.style.top = `${ev.y - dragData.offsetY}px`;
  target.style.left = `${ev.x - dragData.offsetX}px`;
}


function handelDrop(ev:DragEvent){
    console.log(ev.type)
    
}

function handelDragOver(ev:DragEvent){
    console.log(ev.type)
    ev.target.style.transform = 'scale(1.3)'
}
function handleDragEnter(ev:any){
    ev.target.style.transform = 'scale(1.3)'
}

function handleDrageLeave(ev:any){
    ev.target.style.transform = 'scale(1)'
}