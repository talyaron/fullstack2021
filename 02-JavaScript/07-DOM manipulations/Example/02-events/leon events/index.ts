const FirstButton = document.getElementById('firstbutton');
FirstButton.addEventListener('click',()=>{
    console.log(`clicked`)
})
function handleRoll(){
    console.log('the wheel rolled');
}
FirstButton.addEventListener(`mouseout`,runMouseOut);
function