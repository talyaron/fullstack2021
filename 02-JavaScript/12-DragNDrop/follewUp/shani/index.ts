const circle:HTMLElement=document.querySelector(".circle")
circle.ondrag = handleDrag;
circle.ondragstart=handleDragStart;
circle.ondragend=handleDragEnd;

const pool:HTMLElement=document.querySelector("#pool")
pool.ondrop = handelDrop;
pool.ondragover = handelDragOver;
pool.ondragenter = handleDragEnter;
pool.ondragleave = handleDrageLeave;


const dragData = {offsetX:0, offsetY:0}

function handleDrag(ev: DragEvent) {
    // console.log(ev.x, ev.y)
}
function handleDragStart(ev:DragEvent){
    //shows when the drag starts
   // console.log(ev.offsetX, ev.offsetY);
    dragData.offsetX = ev.offsetX;
    dragData.offsetY = ev.offsetY
}

function handleDragEnd(ev:DragEvent){
    //shows when it ends
    //whats the difference between the ev.x and ev,offsetx
    //offsetX and offsetY are relative to the parent container, whereas pageX and pageY are relative to the document
    console.log(ev.x, ev.y);
    console.log(ev.offsetX, ev.offsetY);
    const target: any = ev.target;
    target.style.top = `${ev.y - dragData.offsetY}px`;
    target.style.left = `${ev.x - dragData.offsetX}px`;
}

//for .box

function handelDrop(ev:any){
    console.log(ev.type)
    ev.target.style.transform = 'scale(1.3)'
    
}

function handelDragOver(ev:DragEvent){
    ev.preventDefault()
    console.log(ev.type)
    ev.target.style.transform = 'scale(1.3)'
}
function handleDragEnter(ev:any){
    ev.target.style.transform = 'scale(1.3)'
}

function handleDrageLeave(ev:any){
    ev.target.style.transform = 'scale(1)'
}