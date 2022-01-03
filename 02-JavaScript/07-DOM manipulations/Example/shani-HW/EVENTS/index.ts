const theFirstButton:any = document.getElementById('theFirstButton');

theFirstButton.addEventListener('click',()=> {console.log('I WAS CLICKED!')});
theFirstButton.style.backgroundColor="red";

const theSecondButton:any = document.getElementById('theSecondButton');


theSecondButton.addEventListener('mousedown',()=> {console.log('ZE MOUSE IS DOWN')});
theSecondButton.style.backgroundColor="orange";



const theThirdButton:any = document.getElementById('theThirdButton');


theThirdButton.addEventListener('mousemove',()=> {console.log('ZE MOUSE MOVED')});
theThirdButton.style.backgroundColor="yellow";



const theFourthButton:any = document.getElementById('theFourthButton');


theFourthButton.addEventListener('mouseout',()=> {console.log('ZE MOUSE IS OUT')});
theFourthButton.style.backgroundColor="green";

theFourthButton.addEventListener('mouseover',()=> {console.log('ZE MOUSE IS OVER')});
theFourthButton.style.backgroundColor="green";
