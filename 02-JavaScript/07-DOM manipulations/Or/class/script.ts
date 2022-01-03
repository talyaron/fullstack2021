const box = document.getElementById(`box`);
console.dir(box)
box.style.background = `orange`;
box.style.color = `blue`;
box.style.fontSize = `2rem`;
box.style.width = `200px`;
box.style.height = `200px`;
box.style.textAlign = `center`;
box.style.margin = `auto`;
box.style.borderRadius = `10px`;


const circles = document.querySelectorAll(`.circle`);
console.dir(circles);
circles.forEach((circle: any) => {
    circle.style.background = `blue`;
    circle.style.color = `orange`;
    circle.style.fontSize = `2rem`;
    circle.style.width = `200px`;
    circle.style.height = `200px`;
    circle.style.marginLeft = `auto`;
    circle.style.marginRight = `auto`;
    circle.style.textAlign = `center`;
    circle.style.marginTop = `50px`;
    circle.style.borderRadius = `50%`;
});
const triangle: any = document.querySelector(`.triangle`);
console.dir(triangle);
triangle.style.fontSize = `2rem`;
triangle.style.textAlign = `center`;
triangle.style.margin = `auto`;
triangle.style.marginTop = `50px`;
triangle.style.fontSize = `2rem`;
triangle.style.width = `0`;
triangle.style.height = `0`;
triangle.style.borderLeft = `100px solid transparent`;
triangle.style.borderRight = `100px solid transparent`;
triangle.style.borderBottom = `200px solid salmon`;
triangle.style.transition = `transform 2s`;
setTimeout(() => { triangle.style.transform = 'rotatey(360deg)' }, 2000);

