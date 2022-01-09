
const text = document.querySelector('.span1');
const boxes = document.querySelectorAll(".box");

boxes.forEach((box)=> {
    box.addEventListener('mouseover', ()=> {
        console.dir(box)
        text.innerHTML = box.id;
    })
});



// let images = document.querySelectorAll('img');
// images.forEach(img => {
//     img.addEventListener("mouseover", () => {
//         console.dir(img);
//         text.innerHTML = img.id;

//     })
// });

// for (let i of images){
//         i.addEventListener("mouseover", () => {
//         console.dir(i);
//         text.innerHTML = i.alt

//     })
// };

// const spider = document.getElementById("spiderman");
// const cat = document.getElementById("supercat");
// const super1 = document.getElementById("superman");
// const girl = document.getElementById("supergirl");

// spider.addEventListener('mouseover', (e)=>{
//     text.innerHTML = "spider";
// });










