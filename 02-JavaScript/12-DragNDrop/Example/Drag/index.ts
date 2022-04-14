const willy: HTMLElement = document.querySelector("#willy");
const box: HTMLElement = document.querySelector("#box");
const pool: HTMLElement = document.querySelector("#pool");

willy.ondragstart = handlDragStart;
// willy.ondragend = handleDragEnd;

box.ondragstart = handlDragStart;
box.ondragend = handleDragEnd;

pool.ondrop = handelDrop;
pool.ondragover = handelDragOver;
pool.ondragenter = handleDragEnter;
pool.ondragleave = handleDrageLeave;

const dragData = { offsetX: 0, offsetY: 0 };

function handlDragStart(ev: any) {
  ev.dataTransfer.dropEffect = "move";
  dragData.offsetX = ev.offsetX;
  dragData.offsetY = ev.offsetY;
  ev.dataTransfer.setData("id", ev.target.id);
  
  ev.dataTransfer.dropEffect = "move";

}

function handleDragEnd(ev: DragEvent) {
  const target: any = ev.target;
  target.style.top = `${ev.y - dragData.offsetY}px`;
  target.style.left = `${ev.x - dragData.offsetX}px`;
}

function handelDrop(ev: any) {
  console.log(ev.type);
  ev.target.style.transform = "scale(2)";
  console.log(ev);
  const dropedTargetId = ev.dataTransfer.getData("id");
  const dropped = document.getElementById(dropedTargetId);
    dropped.style.top = `${ev.y - dragData.offsetY}px`;
    dropped.style.left = `${ev.x - dragData.offsetX}px`;
//   ev.target.appendChild(dropped);
}

<<<<<<< HEAD
function handelDragOver(ev:DragEvent){
    console.log(ev.type)
    ev.target.style.transform = 'scale(1.3)'
    
=======
function handelDragOver(ev: DragEvent) {
  ev.preventDefault();
 
  ev.dataTransfer.dropEffect = "move";
  ev.target.style.transform = "scale(1.3)";
>>>>>>> 82077adb6000e0d23f80f1644f5725903ee0562b
}
function handleDragEnter(ev: any) {
  ev.target.style.transform = "scale(1.3)";
}

function handleDrageLeave(ev: any) {
  ev.target.style.transform = "scale(1)";
}
