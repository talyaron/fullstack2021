const willy: HTMLElement = document.querySelector("#willy");
const box: HTMLElement = document.querySelector("#box");
willy.ondrag = handleDrag;
willy.ondragend = handleDragEnd;
box.ondragend = handleDragEnd;
box.ondragstart = handlDragStart;

function handleDrag(ev: DragEvent) {
  // console.log(ev.x, ev.y)
}
const dragData = {offsetX:0, offsetY:0}

function handleDragEnd(ev: DragEvent) {
  console.log(ev.x, ev.y);
  console.log(ev.offsetX, ev.offsetY);
//   const result = ev.dataTransfer.getData("text");
//   console.log(result)
  const target: any = ev.target;
  target.style.top = `${ev.y - dragData.offsetY}px`;
  target.style.left = `${ev.x - dragData.offsetX}px`;
}

function handlDragStart(ev:DragEvent){
   
    console.log(ev.offsetX, ev.offsetY);
//JSON.stringify({offsetX:ev.offsetX, offsetY:ev.offsetY})
    // ev.dataTransfer.setData("text", 'hi');
    dragData.offsetX = ev.offsetX;
    dragData.offsetY = ev.offsetY
}