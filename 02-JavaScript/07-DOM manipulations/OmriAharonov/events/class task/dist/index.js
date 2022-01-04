var firstButton = document.getElementById('firstButton');
var secondButton = document.getElementById('secondButton');
var thirdButton = document.getElementById('thirdButton');
firstButton.addEventListener('click', handlefirstButton);
secondButton.addEventListener('mousedown', function () {
    console.log('went down');
});
function handlefirstButton() {
    console.log('clicked');
}
;
function handlePointer() {
    console.log('pointer moves out');
}
