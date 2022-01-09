const circle = document.getElementById('circle');
console.dir(circle);
circle.style.color = 'red';
circle.style.background = `blue`;
circle.style.color = `red`;
circle.style.fontSize = `3em`;
circle.style.width = '300px';
circle.style.height = '300px';
circle.style.textAlign = `center`;
circle.style.borderRadius = `75%`

const boxes = document.querySelectorAll('.box');
console.dir(boxes);
boxes.forEach((box: any) => {
    box.style.background = `orange`;
    box.style.color = `blue`;
    box.style.fontSize = `2rem`;
    box.style.width = `200px`;
    box.style.height = `200px`;
    box.style.textAlign = `start`;
    box.style.margin = `15px`;
})


const myTimeout:any = setTimeout(myGreeting, 3000);
function myGreeting() {
  document.querySelector("#greet").innerHTML = "Happy Birthday!"
}
const btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

btn.addEventListener('click', () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});