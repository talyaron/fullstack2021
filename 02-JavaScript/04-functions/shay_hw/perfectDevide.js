
function devided(x,y){
    let result='';
if(x%y){

    alert('your devided a number with a leftover of '+x%y);
}
else if(x/y){
    alert('your number is devided perfectly '+x/y)
}


}
devided(x=prompt('enter any number'),(y=prompt('enter any number')));