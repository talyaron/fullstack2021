const box: HTMLElement = document.querySelector("#box");
const pool: HTMLElement = document.querySelector('#pool')

box.ondragend = handleDragEnd;
box.ondragstart = handlDragStart;

// pool.ondragenter = handleDragEnter;
pool.ondragleave = handleDragLeave;
pool.ondrop = handelDrop;
pool.ondragover = handelDragOver;



const dragData = { offsetX: 0, offsetY: 0 }

function handlDragStart(ev: DragEvent) {

  console.log("start",ev.offsetX, ev.offsetY);
  //ev.dataTransfer.dropEffect = "move";

  dragData.offsetX = ev.offsetX;
  dragData.offsetY = ev.offsetY
}

function handleDragEnd(ev: DragEvent) {
  console.log("end x/y ", ev.x, ev.y);
  console.log("end offset x/y ", ev.offsetX, ev.offsetY);

  const target: any = ev.target;
  target.style.top = `${ev.y - dragData.offsetY}px`;
  target.style.left = `${ev.x - dragData.offsetX}px`;
}



// function handleDragEnter (ev){

//   const poolTarget = ev.target
//   poolTarget.style.transform = 'scale(1.5)'

// }

function handleDragLeave(ev) {

  const poolTarget = ev.target
  poolTarget.style.transform = 'scale(1)'

}

function handelDragOver(ev) {

  ev.preventDefault();


  const poolTarget = ev.target
  poolTarget.style.transform = 'scale(2)'

}

function handelDrop(ev: any) {
  console.log(ev.type)
  ev.target.style.transform = "scale(4)";


}