const box = document.querySelector(`.box`);
//console.dir(box)
box.style.background = `red`;
box.style.width = `100px`;
box.style.height = `100px`;
box.style.textAlign = `center`;
box.style.margin = `auto`;
box.style.transform = `rotate(20deg)`;

const circle = document.querySelector(`.circle`);
console.dir(circle)
circle.style.background = `blue`;
circle.style.width = `100px`;
circle.style.height = `100px`;
circle.style.borderRadius = `50%`;
circle.style.textAlign = `center`;
circle.style.marginLeft = `auto`;
circle.style.marginRight = `auto`;
circle.style.marginTop = `50px`;
circle.style.transition = `transform 2s`;

setTimeout(() => { circle.style.transform = 'rotatey(360deg)' }, 2000);