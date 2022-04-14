var willy = document.querySelector("#willy");
var box = document.querySelector("#box");
willy.ondrag = handleDrag;
willy.ondragend = handleDragEnd;
box.ondragend = handleDragEnd;
box.ondragstart = handlDragStart;
function handleDrag(ev) {
    // console.log(ev.x, ev.y)
}
var dragData = { offsetX: 0, offsetY: 0 };
function handleDragEnd(ev) {
    console.log(ev.x, ev.y);
    console.log(ev.offsetX, ev.offsetY);
    //   const result = ev.dataTransfer.getData("text");
    //   console.log(result)
    var target = ev.target;
    target.style.top = ev.y - dragData.offsetY + "px";
    target.style.left = ev.x - dragData.offsetX + "px";
}
function handlDragStart(ev) {
    console.log(ev.offsetX, ev.offsetY);
    //JSON.stringify({offsetX:ev.offsetX, offsetY:ev.offsetY})
    // ev.dataTransfer.setData("text", 'hi');
    dragData.offsetX = ev.offsetX;
    dragData.offsetY = ev.offsetY;
}
