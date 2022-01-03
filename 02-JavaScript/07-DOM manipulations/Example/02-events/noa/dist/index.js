var button1 = document.getElementById('button1');
button1.addEventListener('dblclick', function () {
    console.log('double click');
});
button1.addEventListener('wheel', RunButton1);
function RunButton1() {
    console.log("it's on wheel");
}
function RunMouseleave() {
    console.log('mouse leaved');
}
