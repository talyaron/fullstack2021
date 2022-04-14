var squre = document.querySelector("#willy");
var triangle = document.querySelector("#box");
var circle = document.querySelector("#box");
var diamond = document.querySelector("#box");
var pool;
-squre;
HTMLElement = document.querySelector("#pool");
var pool;
-triangle;
HTMLElement = document.querySelector("#pool");
var pool;
-circle;
HTMLElement = document.querySelector("#pool");
var pool;
-diamond;
HTMLElement = document.querySelector("#pool");
squre.ondragstart = handlDragStart;
squre.ondragend = handleDragEnd;
circle.ondragstart = handlDragStart;
circle.ondragend = handleDragEnd;
squre.ondragstart = handlDragStart;
squre.ondragend = handleDragEnd;
triangle.ondragstart = handlDragStart;
triangle.ondragend = handleDragEnd;
pool.ondrop = handelDrop;
pool.ondragover = handelDragOver;
pool.ondragenter = handleDragEnter;
pool.ondragleave = handleDrageLeave;
var dragData = { offsetX: 0, offsetY: 0 };
function handlDragStart(ev) {
    ev.dataTransfer.dropEffect = "move";
    dragData.offsetX = ev.offsetX;
    dragData.offsetY = ev.offsetY;
}
function handleDragEnd(ev) {
    var target = ev.target;
    target.style.top = ev.y - dragData.offsetY + "px";
    target.style.left = ev.x - dragData.offsetX + "px";
}
function handelDrop(ev) {
    console.log(ev.type);
}
function handelDragOver(ev) {
    console.log(ev.type);
    ev.target.style.transform = 'scale(1.3)';
}
function handleDragEnter(ev) {
    ev.target.style.transform = 'scale(1.3)';
}
function handleDrageLeave(ev) {
    ev.target.style.transform = 'scale(1)';
}
