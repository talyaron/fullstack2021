
/*
function bmi (weight, height){
    return weight/Math.pow(height, 2);
}

let q = bmi(83, 1.83);
bmiMeaning (q);



function bmiMeaning (bmi){
    if (bmi <= 18){
        console.log(bmi +' lowerWeight');
    } else if (bmi > 18 && bmi < 25){
        alert(bmi +'normal');
    } else {
        alert('${bmi} overWeight')
    }
}


//homeWork
//========

//1.1
function maxNumber (num1, num2){
   return Math.max(num1, num2);
}

let x = maxNumber(9, 10);
console.log(x);



//1.2 Anotehr option without using the easy way of Math.max() method.
function maxNumber (num1, num2){

    if(num1 > 0 && num2 < 0){
        console.log(num1);
    } else if (num1 == num2){
        console.log(num1);
    } else if (num1 < 0 && num2 > 0){
        console.log(num2);
    } else {
        if (num1 - num2 > num2 - num1){
            console.log(num1);
        } else {
            console.log(num2);
        }
    }
}

maxNumber(-10, -11);


//2
function month(numberMonth) {
let nameMonth = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
return nameMonth[numberMonth];
}

console.log(month(4));


//3
function age (year){
    let currentYear = new Date();
    currentYear = currentYear.getFullYear();
    return currentYear - year; 
}

let userAge = prompt('What is your year of birth?');
let calcAge = age(userAge);
console.log(calcAge);


//4
//Function that takes a positive integer, add up all the numbers from 1 to the number I passed to the function.
//For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

let sum = 0;
function addUp(sumNumber){
    for(let i=1; i<=sumNumber; i++){
        sum += i;
    }
    return sum;
}

console.log(addUp(4));

*/
















































