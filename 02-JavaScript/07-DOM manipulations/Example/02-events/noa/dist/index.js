// const button1= document.getElementById('button1');
// button1.addEventListener('dblclick', ()=>{
//     console.log('double click')
// } )
// button1.addEventListener('wheel', RunButton1);
// function RunButton1(){
//     console.log("it's on wheel")
// }
// function RunMouseleave(){
//     console.log('mouse leaved')
// }
var buttons = document.querySelectorAll('.button');
buttons.forEach(function (button) {
    button.addEventListener('click', onclick);
});
var img = document.getElementById('image');
img.style.margin = '10px';
function onclick(ev) {
    var id = ev.target.id;
    if (id = 'buttonUp') {
        console.log('up');
        // moveY = moveY - 10
        img.style.transform = 'translateY(-10px)';
    }
    if (id = 'buttonDown') {
        console.log('down');
        // moveY = moveY + 10
        img.style.transform = 'translateY(10px)';
    }
    if (id = 'buttonRight') {
        console.log('right');
        img.style.transform = 'translateX(10px)';
    }
    if (id = 'buttonLeft') {
        console.log('left');
        img.style.transform = 'translateX(-10px)';
    }
}
