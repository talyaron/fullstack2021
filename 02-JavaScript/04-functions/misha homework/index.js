// PLEASE UNCOMMENT THE RIGHT SECTION TO ACTIVATE CODE //

// --- 1 --- //

let a = window.prompt("what is the first number?")
let b = window.prompt("what is the second number?")

function largest(a,b){

if(a>b){
    return a;
}
else if (b>a){
    return b;
}

}

alert("largest number is "+ largest(a,b));


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

// ------------------------------------------------- //
// ------------------------------------------------- //

// --- 4 --- //

// let num = window.prompt("enter a number to check if its a prime number");

// primecheck();

// function primecheck(num){

//     if(num<=1){
//        return false;
//     }

//      else if (num === 2){
//          return true;
//     }
    
//     else{
        
//         for (i=3; i<num; i++){
//             if(num % i == 0){
//                 return false;
//             }
//             else{
//                 return true;
//             }
            
//         }
//     }
// }

// if(primecheck(num) == false){
// alert(num + " is not prime");
// }

// else if(primecheck(num) == true){
// alert(num + " is prime");
// }

