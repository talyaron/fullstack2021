console.log("hi");
console.dir(window);
console.dir(document);
console.dir(navigator);
var one = document.getElementById('one');
one.style.fontSize = '6rem';
one.innerText = 'Walla!';
var theInput = document.getElementById('theInput');
theInput.addEventListener('keyup', handleInput);
function handleInput(ev) {
    console.dir(ev);
    var text = ev.target.value;
    one.innerText = text;
}
function handleColor(ev) {
    var color = ev.target.value;
    document.body.style.background = color;
}
var button = document.getElementById('theButton');
button.addEventListener('click', toggleFullscreen);
function toggleFullscreen() {
    var elem = document.querySelector("video");
    if (!document.fullscreenElement) {
        elem.requestFullscreen()["catch"](function (err) {
            alert("Error attempting to enable full-screen mode: " + err.message + " (" + err.name + ")");
        });
    }
    else {
        document.exitFullscreen();
    }
}
