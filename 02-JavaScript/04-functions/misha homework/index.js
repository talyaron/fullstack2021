// PLEASE UNCOMMENT THE RIGHT SECTION TO ACTIVATE CODE //

// --- 1 --- //

let x;
let y = true //false = boolean

let a = window.prompt("what is the first number?");
let b = window.prompt("what is the second number?");

console.log(typeof a);
console.log(typeof b);

a = parseInt(a);
b = parseInt(b);

console.log(typeof a)
console.log(typeof b)

function largest(a, b) {

    if (a > b) {
        return a;
    }
    else {
        return b;
    }
}

alert("largest number is " + largest(a, b));


// Also import not forget about equal numbers, (if (a==b))


// ------------------------------------------------- //
// ------------------------------------------------- //


/// --- 2 --- ///

// let a = window.prompt("enter a number between 1-12 to get the name of the month");

// let months = [".", "Januray", "Fabruary", "March", "April",
//  "May", "June", "July", "August", 
//  "September", "October", "November", "December"]

// function monthName(a){

//     let b = months[a];
//     return b;

//  }

// if(a<1 || a>12){
//     alert("No such month number, please try again!")
// }

// else{

// alert("month name: "+monthName(a));

// }

//In array you can write the months regular, without ["."] and when you got number, reduce 1 from the number.
//Also you can use switch ( https://www.w3schools.com/js/js_switch.asp )

// ------------------------------------------------- //
// ------------------------------------------------- //

// --- 3 --- //

// let yearborn = window.prompt("Enter the year you were born");
// let yearnow = 2021;

// function age(yearnow, yearborn){

//     return yearnow - yearborn;

// }

// let yourage = age(yearnow, yearborn);

// alert("you are "+ yourage + " years old");

/*

function age( yearborn){
    let day = new Date();
    return alert(day.getFullYear() - yearborn);
}

age( yearborn)

*/


// ------------------------------------------------- //
// ------------------------------------------------- //

// --- 4 --- //

// let num = window.prompt("enter a number to check if its a prime number");

// primecheck();

// function primecheck(num) {

//     if (num <= 1) {
//         return false;
//     }

//     else if (num === 2) {
//         return true;
//     }

//     else {

//         for (i = 3; i < num; i++) { //important to declare the i (let i=3)
//             if (num % i == 0) {
//                 return false;
//             }
//             else {
//                 return true;
//             }
//         }
//     }
// }

// if (primecheck(num) == false) {
//     alert(num + " is not prime");
// }

// else if (primecheck(num) == true) {
//     alert(num + " is prime");
// }