//a function that gets two numbers, and returns the largest number
function biggerNumber(a,b){
    if(a>b){
        return a;
    }
    else if(b>a){
        return b;
    }
}
let x = window.prompt("please enter the first number:")*1;
let y = window.prompt("please enter the second number:")*1;
let awnser = biggerNumber(x,y);
alert("The bigger number is: " +awnser);