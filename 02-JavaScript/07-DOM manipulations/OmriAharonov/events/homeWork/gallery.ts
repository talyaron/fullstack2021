const pic: any = document.querySelectorAll('.pic');
const description: any = document.querySelector('.description');

const text1: any = document.getElementById('1');
text1.style.cssText =
    `
position: absolute;
margin-top: 500px;
margin-left: 650px;
white-space: nowrap;
opacity:0;

`

const text2: any = document.getElementById('2');
text2.style.cssText =
    `
position: absolute;
margin-top: 500px;
margin-left: 350px;
white-space: nowrap;
opacity:0;

`

const text3: any = document.getElementById('3');
text3.style.cssText =
    `
position: absolute;
margin-top: 500px;
margin-left: 100px;
white-space: nowrap;
opacity:0;

`

const text4: any = document.getElementById('4');
text4.style.cssText =
    `
position: absolute;
margin-top: 500px;
margin-left: -350px;
white-space: nowrap;
opacity: 0;

`

const text5: any = document.getElementById('5');
text5.style.cssText =
    `
position: absolute;
margin-top: 500px;
margin-left: -500px;
white-space: nowrap;
opacity: 0;

`



pic.forEach(picture => {
    picture.addEventListener('mousemove', handleHover)
    picture.addEventListener('mouseleave', handleHoveroff)
});

function handleHover() {
   for( let i = 0; i < pic.length; i++){
    this.getElementsByClassName('description')[i].style.opacity = '1';
   }
};

function handleHoveroff() {
    for( let i = 0; i < pic.length; i++){
        this.getElementsByClassName('description')[i].style.opacity = '0';
       }
};



