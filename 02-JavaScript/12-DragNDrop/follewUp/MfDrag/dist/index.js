var box = document.querySelector("#box");
box.ondragend = handleDragEnd;
box.ondragstart = handlDragStart;
var dragData = { offsetX: 0, offsetY: 0 };
function handleDragEnd(ev) {
    console.log(ev.x, ev.y);
    console.log(ev.offsetX, ev.offsetY);
    var target = ev.target;
    target.style.top = ev.y - dragData.offsetY + "px";
    target.style.left = ev.x - dragData.offsetX + "px";
}
function handlDragStart(ev) {
    console.log(ev.offsetX, ev.offsetY);
    dragData.offsetX = ev.offsetX;
    dragData.offsetY = ev.offsetY;
}
