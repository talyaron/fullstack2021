const dropData = {offsetX:0 , offsetY:0}
const box:HTMLElement = document.querySelector("#box");

box.ondragstart = handleDragStart;
box.ondragend = handleDragEnd;

function handleDragStart (ev:DragEvent){

    // console.log( ev.offsetX ,  ev.offsetY);
    
    dropData.offsetX = ev.offsetX;
    dropData.offsetY = ev.offsetY;

}
function handleDragEnd(ev:DragEvent){
    //console.log( ev.x ,  ev.y);
    const target:any = ev.target;

    target.style.top = `${ev.y - dropData.offsetY}px`
    target.style.left = `${ev.x - dropData.offsetX}px`

    //console.log("top is" + target.style.top  + "left it" +  target.style.left );
    
}