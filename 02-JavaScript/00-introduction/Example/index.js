let counter = 0;

const resultHTML = document.getElementById('theResult');


function addOne() {
    counter++;
    resultHTML.innerText = counter


}

function changeColor(ev){
    document.body.style.background = ev.target.value;
}