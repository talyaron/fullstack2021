const square: HTMLElement = document.querySelector("#squareOne")
const target: HTMLElement = document.querySelector("#squareTwo")

square.ondragstart = handleDragStart;
square.ondragend = handleDragEnd;

target.ondrop = handleDrop;
// target.ondragover = handleDragOver;
target.ondragenter = handleDragEnter;
// target.ondragleave = handleDragLeave;

const dragData = { offsetX: 0, offsetY:0; }

function handleDragStart(ev:DragEvent) {
    ev.dataTransfer.dropEffect = "move";
    dragData.offsetX = ev.offsetX;
    dragData.offsetY = ev.offsetY;
    ev.dataTransfer.setData("id", ev.target.id)
    // console.log(ev)
}

function handleDragEnd(ev: DragEvent){
    const target:any =  ev.target;
    target.style.top = `${ev.y - dragData.offsetY}px`;
    target.style.left = `${ev.x - dragData.offsetX}px`;

}

function handleDragEnter(ev:any, square){
    ev.target.style.transform = 'scale(1.3)'
    console.log(ev)
}

function handleDrop(ev:any){
    console.log(ev.type);

}
