function firstButtonClick() {
    console.log('Clicked!!!')
}

const secendButton:any = document.querySelector('#secendButton');
const thirdButton:any = document.querySelector('#thirdButton');
const fourthButton:any = document.querySelector('#fourthButton');
const fifthButton:any = document.querySelector('#fifthButton');
fifthButton.addEventListener('mousewheel',()=>{
    console.log('mouse wheel was wheeled');
    
})

secendButton.addEventListener('mouseout', mouseOut);
secendButton.addEventListener('keydown', keyDown);
thirdButton.addEventListener('mousemove', mouseMove);
fourthButton.addEventListener('dblclick', doublClick);

function mouseOut(){
    console.log('The Mouse is out')
}

function keyDown(){
    console.log('The Down Key Was pressed')
}

function mouseMove(){
    console.log('the mouse wase moved over')
}

function doublClick(){
    console.log('it was doubled clicked')
}

