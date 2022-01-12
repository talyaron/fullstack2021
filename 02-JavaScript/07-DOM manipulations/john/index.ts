const theFirstButton = document.getElementById('theFirstButton');

theFirstButton.addEventListener('click', runButton1);
theFirstButton.addEventListener('mouseenter', runMouseEnter);
theFirstButton.addEventListener('mouseout', runMouseOut);
theFirstButton.addEventListener('dblclick', ()=>{
    console.log('I was double clicked')
})

function runButton1(){
    console.log('clicked!!!!')
}

function runMouseEnter(){
    console.log('Mouse enterd')
}

function runMouseOut(){
    console.log('Mouse out')
}

function handleRoll(){
    console.log('the wheel rolled');
}
