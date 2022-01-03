function firstButtonClick() {
    console.log('Clicked!!!');
}
var secendButton = document.querySelector('#secendButton');
var thirdButton = document.querySelector('#thirdButton');
var fourthButton = document.querySelector('#fourthButton');
var fifthButton = document.querySelector('#fifthButton');
fifthButton.addEventListener('mousewheel', function () {
    console.log('mouse wheel was wheeled');
});
secendButton.addEventListener('mouseout', mouseOut);
secendButton.addEventListener('keydown', keyDown);
thirdButton.addEventListener('mousemove', mouseMove);
fourthButton.addEventListener('dblclick', doublClick);
function mouseOut() {
    console.log('The Mouse is out');
}
function keyDown() {
    console.log('The Down Key Was pressed');
}
function mouseMove() {
    console.log('the mouse wase moved over');
}
function doublClick() {
    console.log('it was doubled clicked');
}
