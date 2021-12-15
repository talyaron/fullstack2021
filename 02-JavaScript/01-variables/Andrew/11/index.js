let a = window.prompt("enter the first number:");
let b = window.prompt("enter the second number:");
let i;
    for(i = b; i > 0; i--){
        if(a % i == 0 && b % i ==0){
            break;
        }
    }
console.log(i +" is the GCD");