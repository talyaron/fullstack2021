var text = document.querySelector('#text');
text.style.fontSize = '10rem';
text.style.color = 'black';
text.style.marginLeft = '400px';
setTimeout("document.bgColor='white'", 1000);
setTimeout("document.bgColor='lightpink'", 1500);
setTimeout("document.bgColor = 'pink'", 2000);
setTimeout("document.bgColor =  'deeppink'", 2500);
setTimeout("document.bgColor = 'red'", 3000);
setTimeout("document.bgColor = 'tomato'", 3500);
setTimeout("document.bgColor = 'darkred'", 4000);
setTimeout("document.bgColor = 'blue'", 4000);
setTimeout("document.bgColor = 'yellow'", 5000);
var loader = document.querySelector('.loader');
loader.style.marginLeft = '650px';
loader.style.border = '16px solid lightGray';
loader.style.borderTop = '16px solid transparent';
loader.style.borderRadius = '50%';
loader.style.width = '120px';
loader.style.height = '120px';
loader.style.animation = 'spin 2s linear infinite';
document.querySelector('.loader').animate([
    { transform: 'rotate(0deg)' },
    { transform: 'rotate(360deg)' }
], {
    duration: 1000,
    iterations: Infinity
});
