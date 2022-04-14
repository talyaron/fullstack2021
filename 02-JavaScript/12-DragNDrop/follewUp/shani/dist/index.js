var circle = document.querySelector(".circle");
circle.ondrag = handleDrag;
circle.ondragstart = handleDragStart;
circle.ondragend = handleDragEnd;
var box = document.querySelector(".box");
box.ondrag = handleDrag;
box.ondragstart = handleDragStart;
box.ondragend = handleDragEnd;
var dragData = { offsetX: 0, offsetY: 0 };
function handleDrag(ev) {
    // console.log(ev.x, ev.y)
}
function handleDragStart(ev) {
    console.log(ev.offsetX, ev.offsetY);
    dragData.offsetX = ev.offsetX;
    dragData.offsetY = ev.offsetY;
}
function handleDragEnd(ev) {
    console.log(ev.x, ev.y);
    console.log(ev.offsetX, ev.offsetY);
    var target = ev.target;
    target.style.top = ev.y - dragData.offsetY + "px";
    target.style.left = ev.x - dragData.offsetX + "px";
}
