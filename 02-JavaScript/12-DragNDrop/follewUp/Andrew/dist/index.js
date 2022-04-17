var button = document.querySelector('#button');
var ball = document.querySelector('.ball');
var cups = document.querySelectorAll('.cup');
cups.forEach(function (cup) {
    // cup.ondragstart = handleDragStart;
    cup.ondragenter = handleDragEnter;
    cup.ondragleave = handleDragLeave;
    cup.ondrop = handleDrop;
    cup.ondragover = handleDragOver;
});
// ball.ondragend = handleDragEnd;
ball.ondrag = handleDrag;
ball.ondragstart = handleDragStart;
// cup.ondrag = handleDrag
// cup.ondragend = handleDragEnd;
var offset = {
    X: 0,
    Y: 0
};
var gameState = "placeBall";
function handleDragStart(ev) {
    var target = ev.target;
    offset.X = ev.offsetX;
    offset.Y = ev.offsetY;
    ev.dataTransfer.setData("id", target.id);
    ev.dataTransfer.effectAllowed = "move";
    // ev.dataTransfer.setData("text/plain", "das")
}
function handleDrag(ev) {
    ev.preventDefault();
}
function cupHandleDragEnd(ev) {
    var target = ev.target;
    // const data = ev.dataTransfer.getData("text/plain");
    target.style.top = ev.y - offset.Y + "px";
    target.style.left = ev.x - offset.X + "px";
    // console.log(ev.x,ev.y);
    // console.log(data);
}
function handleDrop(ev) {
    var data = ev.dataTransfer.getData("id");
    ev.target.appendChild(document.getElementById(data));
    var target = document.getElementById(data);
    // target.style.top = `${ev.y + offset.Y - ev.target.offsetHeight}px`;
    // target.style.left = `${ev.x - offset.X - ev.target.offsetWidth}px`;
    ev.target.dataset.ball = true;
    console.log(ev.target.dataset);
    target.style.display = "none";
    3;
    button.style.visibility = "visible";
    cups.forEach(function (cup) {
        cup.draggable = true;
        cup.ondragstart = handleDragStart;
        cup.ondragend = cupHandleDragEnd;
    });
    // console.log("dropped");
    // ev.target.style.border = "1px solid red"
    ev.target.style.transform = "scale(1)";
}
function handleDragOver(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
}
function handleDragEnter(ev) {
    ev.target.style.transform = "scale(1.1)";
}
function handleDragLeave(ev) {
    ev.target.style.transform = "scale(1)";
}
function handleReady() {
    cups.forEach(function (cup) {
        cup.draggable = false;
        cup.onclick = handleClick;
    });
    alert("Choose a Cup!");
}
function handleClick(ev) {
    console.log(ev.target.dataset.ball);
    if (ev.target.dataset.ball == "true") {
        alert("Correct!");
    }
    else {
        alert("Wrong!");
    }
}
