
console.log('####1####');
let x = 4;  
let y = 20;

if(x > y){
    console.log(x);
}
else{
    console.log(y)
}

console.log('####2####');

let num1 = 3;
let num2 = -7;
let num3 = 2;

if ((num1 * num2 * num3)> 0 ){
    console.log('+')
}
else{
    console.log('-')
}

console.log('####3####');
let number1 = 5;
let number2 = -6;
let number3 = -2;
let big, mid, small;

if(number1 > number2 && number1 > number3){
    big = number1;
    if(number2 > number3){
        mid = number2;
        small = number3;
    }
    else{
        mid = number3;
        small = number2;
    }
}

if(number2 > number1 && number2 > number3){
    big = number2;
    if(number1 > number3){
        mid = number1;
        small = number3;
    }
    else{
        mid = number3;
        small = number1;
    }
}

if(number3 > number2 && number3 > number1){
    big = number3;
    if(number2 > number1){
        mid = number2;
        small = number1;
    }
    else{
        mid = number1;
        small = number2;
    }
}

console.log(big, mid, small)

console.log('####4####');

console.log('####5####');

for(let i = 0; i < 16; i++){
    if((i % 2) === 0){
        console.log(i + ' is even')
    }
    else{
        console.log(i + ' is odd')
    }
}

console.log('####6####');

let David = 80;
let Vinoth = 77;
let Divya = 88;
let Ishitha = 95;
let Thomas = 68;
let sum = (David + Vinoth + Divya + Ishitha + Thomas) / 5;

if(sum < 60){
    console.log('grade is F' );
}
else if((sum < 70) && (sum >= 6)){
    console.log('grade is D' );
}
else if((sum < 80) && (sum >= 70)){
    console.log('grade is C' );
}
else if((sum < 90) && (sum >= 80)){
    console.log('grade is B' );
}
else if((sum < 100) && (sum >= 90)){
    console.log(sum +'grade is A' );
}

console.log('####7####');

for(let i = 1; i < 101; i++){
    if(((i % 3) === 0) && ((i % 5) === 0)){
        console.log('FizzBuzz')
    }
    else if (i % 3 === 0){
        console.log('Fizz')
    }
    else if(i % 5 === 0){
        console.log('Buzz')
    }
    else{
        console.log(i)
    }
}


