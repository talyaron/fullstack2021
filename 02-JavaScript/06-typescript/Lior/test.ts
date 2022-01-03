console.dir(document);
var container = document.getElementById('container');
container.style.width = '100%';
container.style.height = '100hv';
container.style.background = 'red';
container.innerText = 'Walla';
container.style.fontSize = '6rem';
const theInput=document.getElementById('theInput')
theInput.addEventListener('keyup', handleInput);


function handleInput(ev) 
{
    console.dir(ev);
    let text=ev.target.value;
    container.innerText = text;
}

function handleColor(ev)
{
    let color=ev.target.value
    document.body.style.background=color;
}
//titles
var titles = document.getElementsByClassName('title');
for (let i = 0; i < titles.length; i++) {
    titles[i].style.color = 'blue';
    titles[i].style.fontSize = '4rem';
    titles[i].style.marginLeft = '30vw';
}
