const box:HTMLElement = document.querySelector ('#box');
box.ondragstart = handleDragStart;
box.ondragend = handleDragEnd;

let dragData = {offsetX:0, offsetY:0}

function handleDragStart (ev:DragEvent){
    dragData.offsetX = ev.offsetX;
    dragData.offsetY = ev.offsetY
}


function handleDragEnd (ev:DragEvent){
    
const target:any = ev.target;
target.style.top = `${ev.y - dragData.offsetY}px`;
target.style.left = `${ev.x - dragData.offsetX}px`;
}