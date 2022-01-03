const box:any = document.querySelector('.box');
box.style.width = '400px';
box.style.height = '600px';
box.style.background = 'rgb(0, 102, 255)';
box.style.margin = 'auto';

const header:any = document.querySelector('#header');
header.style.color = 'orange';
header.style.margin = '0px 110px'

const img:any = document.querySelector('.img');
img.style.margin = '10px 100px';
img.style.paddingTop = '50px';


const text:any = document.querySelector('.text');
text.style.margin = '5px 100px';
text.style.fontSize = '17px';

function myHeader() {
    document.getElementById("header").innerHTML = " Article Header"
  }

  const myTimeout = setTimeout(myHeader, 3000);