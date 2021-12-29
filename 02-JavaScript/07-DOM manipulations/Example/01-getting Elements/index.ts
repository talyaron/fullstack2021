//by id

const target = document.getElementById('theTarget');
console.dir(target);
target.style.color = 'blue';
target.style.background = 'yellow';
target.style.fontSize = '2rem';

const boxes = document.querySelectorAll('.box');
console.dir(boxes)

boxes.forEach((elm:any)=>{
    console.dir(elm)
    elm.style.color = 'red'
})

const theParagraph:any = document.querySelector('#theParagraph')
theParagraph.style.transform = 'rotate(230deg)'
theParagraph.style.width = 'fit-content'
