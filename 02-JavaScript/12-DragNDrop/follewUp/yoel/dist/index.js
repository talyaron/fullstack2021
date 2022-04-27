var dropData = { offsetX: 0, offsetY: 0 };
var box = document.querySelector("#box");
box.ondragstart = handleDragStart;
box.ondragend = handleDragEnd;
function handleDragStart(ev) {
    // console.log( ev.offsetX ,  ev.offsetY);
    dropData.offsetX = ev.offsetX;
    dropData.offsetY = ev.offsetY;
}
function handleDragEnd(ev) {
    //console.log( ev.x ,  ev.y);
    var target = ev.target;
    target.style.top = ev.y - dropData.offsetY + "px";
    target.style.left = ev.x - dropData.offsetX + "px";
    //console.log("top is" + target.style.top  + "left it" +  target.style.left );
}
