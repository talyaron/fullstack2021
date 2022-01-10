const pictures: any = document.querySelectorAll('.pic');
const description: any = document.querySelector('.description');

const text1: any = document.getElementById('1');
text1.style.cssText =
    `
position: absolute;
margin-top: 550px;
margin-left: 600px;
white-space: nowrap;
opacity:0;

`

const text2: any = document.getElementById('2');
text2.style.cssText =
    `
position: absolute;
margin-top: 550px;
margin-left: 250px;
white-space: nowrap;
opacity:0;

`



const text3: any = document.getElementById('3');
text3.style.cssText =
    `
position: absolute;
margin-top: 550px;
margin-left: -400px;
white-space: nowrap;
opacity: 0;

`

const text4: any = document.getElementById('4');
text4.style.cssText =
    `
position: absolute;
margin-top: 550px;
margin-left: -500px;
white-space: nowrap;
opacity: 0;

`



pictures.forEach(picture => {
    picture.addEventListener('mouseenter',   ()=>handleHover(picture))
    picture.addEventListener('mouseleave', ()=>handleHoveroff(picture))
});

function handleHover(picture) {
    picture.children[2].style.opacity = '1';
};

function handleHoveroff(picture) {
    picture.children[2].style.opacity = '0';
};



