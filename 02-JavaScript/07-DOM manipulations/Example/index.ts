console.log("hi");
console.dir(window)
console.dir(document)
console.dir(navigator)
const one = document.getElementById('one')
one.style.fontSize = '6rem';
one.innerText = 'Walla!';

const theInput = document.getElementById('theInput')
theInput.addEventListener('keyup', handleInput)

function handleInput(ev) {
    console.dir(ev)
    const text = ev.target.value; 
    one.innerText = text;
}

function handleColor(ev){
    const color = ev.target.value;

    document.body.style.background = color;
}

const button = document.getElementById('theButton');
button.addEventListener('click', toggleFullscreen)

function toggleFullscreen() {
    let elem = document.querySelector("video");
  
    if (!document.fullscreenElement) {
      elem.requestFullscreen().catch(err => {
        alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
    } else {
      document.exitFullscreen();
    }
  }