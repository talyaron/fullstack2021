var box = document.querySelector("#box");
box.ondragend = handleDragEnd;
box.ondragstart = handleDragStart;
var dragData = { offsetX: 0, offsetY: 0 };
function handleDragEnd(ev) {
    var target = ev.target;
    target.style.top = ev.y - dragData.offsetY + "px";
    target.style.left = ev.x - dragData.offsetX + "px";
}
function handleDragStart(ev) {
    dragData.offsetX = ev.offsetX;
    dragData.offsetY = ev.offsetY;
}
