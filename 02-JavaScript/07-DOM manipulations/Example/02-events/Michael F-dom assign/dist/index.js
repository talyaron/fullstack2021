var text = document.querySelector('.span1');
var boxes = document.querySelectorAll(".box");
boxes.forEach(function (box) {
    box.addEventListener('mouseover', function () {
        console.dir(box);
        text.innerHTML = box.id;
    });
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
