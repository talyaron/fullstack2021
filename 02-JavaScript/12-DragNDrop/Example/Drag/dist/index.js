var willy = document.querySelector("#willy");
var box = document.querySelector("#box");
willy.ondragstart = handlDragStart;
willy.ondragend = handleDragEnd;
box.ondragstart = handlDragStart;
box.ondragend = handleDragEnd;
function handleDrag(ev) {
    // console.log(ev.x, ev.y)
}
var dragData = { offsetX: 0, offsetY: 0 };
function handleDragEnd(ev) {
    //   const result = ev.dataTransfer.getData("text");
    //   console.log(result)
    var target = ev.target;
    target.style.top = ev.y - dragData.offsetY + "px";
    target.style.left = ev.x - dragData.offsetX + "px";
}
function handlDragStart(ev) {
    //JSON.stringify({offsetX:ev.offsetX, offsetY:ev.offsetY})
    // ev.dataTransfer.setData("text", 'hi');
    dragData.offsetX = ev.offsetX;
    dragData.offsetY = ev.offsetY;
}
