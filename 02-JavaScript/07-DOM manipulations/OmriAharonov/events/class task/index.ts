const firstButton:any = document.getElementById('firstButton');
const secondButton:any = document.getElementById('secondButton');
const thirdButton:any = document.getElementById('thirdButton');

firstButton.addEventListener('click', handlefirstButton);
secondButton.addEventListener('mousedown', ()=>{
    console.log('went down');
});

function handlefirstButton(){
    console.log('clicked');
};

function handlePointer(){
    console.log('pointer moves out')
}
