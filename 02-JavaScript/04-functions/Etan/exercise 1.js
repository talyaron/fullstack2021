//-------------- exercise 1
function choose(){
    let num1 = window.prompt("Choose the first number", "0");
    let num2 = window.prompt("Choose the secont number", "0");
    let answer = "the bigger number is "

    if(num1 > num2){
        return (answer + num1);
    } else{
        return (answer + num2);
    }
    
    
}
console.log(choose());

