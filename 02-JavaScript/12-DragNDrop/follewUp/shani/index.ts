const circle:HTMLElement=document.querySelector(".circle")
circle.ondrag = handleDrag;
circle.ondragstart=handleDragStart;
circle.ondragend=handleDragEnd;

const box:HTMLElement=document.querySelector(".box")
box.ondrag = handleDrag;
box.ondragstart=handleDragStart;
box.ondragend=handleDragEnd;


const dragData = {offsetX:0, offsetY:0}

function handleDrag(ev: DragEvent) {
    // console.log(ev.x, ev.y)
}
function handleDragStart(ev:DragEvent){
    console.log(ev.offsetX, ev.offsetY);
    dragData.offsetX = ev.offsetX;
    dragData.offsetY = ev.offsetY
}

function handleDragEnd(ev:DragEvent){
    console.log(ev.x, ev.y);
    console.log(ev.offsetX, ev.offsetY);
    const target: any = ev.target;
    target.style.top = `${ev.y - dragData.offsetY}px`;
    target.style.left = `${ev.x - dragData.offsetX}px`;
}