var square = document.querySelector("#squareOne");
var target = document.querySelector("#squareTwo");
square.ondragstart = handleDragStart;
square.ondragend = handleDragEnd;
target.ondrop = handleDrop;
// target.ondragover = handleDragOver;
target.ondragenter = handleDragEnter;
// target.ondragleave = handleDragLeave;
var dragData = { offsetX: 0, offsetY: 0 };
function handleDragStart(ev) {
    ev.dataTransfer.dropEffect = "move";
    dragData.offsetX = ev.offsetX;
    dragData.offsetY = ev.offsetY;
    ev.dataTransfer.setData("id", ev.target.id);
    // console.log(ev)
}
function handleDragEnd(ev) {
    var target = ev.target;
    target.style.top = ev.y - dragData.offsetY + "px";
    target.style.left = ev.x - dragData.offsetX + "px";
}
function handleDragEnter(ev, square) {
    ev.target.style.transform = 'scale(1.3)';
    console.log(ev);
}
function handleDrop(ev) {
    console.log(ev.type);
}
