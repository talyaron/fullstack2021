// 1. Write a JavaScript program that accept two integers and display the larger.


const one = prompt(" what is the number one?")
const two = prompt("what is the number two?")

function LargerNum(one,two){
if(one > two ){
    return one;
}else{
    return two;
}
}

console.log("the larger number is : " + LargerNum(one ,two));


////////

// 2.a function that gets a number between 1 and 12, and returns the name of the month (1 = January, 2 = February ...)


const months = ["empty" , "January" , "Febuary" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , " December"];
let monthNum = prompt("Type the number of the month you are looking for");
let x ;

function MonthName(monthNum){

for(let i=0; i<=12; i++){
    if(monthNum == i){
        x =months[i];
    }
}
return x;

}
console.log(MonthName(monthNum));


// 3.a function that gets the year the user was born and calculates his/her age.

let BirthYear = prompt("which year were you born in ?");
let y = 2021;

function Age(BirthYear){
    y = y -BirthYear;
    return y;
}
console.log(Age(BirthYear));


// 4.Think of your own function. The function should calculate something that interests you


let currencyGive = prompt("whice currency would you like to convert from to shekel? ");
let howMuch = prompt(" How much would you like to convert ?");
let a;

function convertor(currencyGive){
if(currencyGive == "dollar" || currencyGive == "Us dollar"){
    a = howMuch*3.11;
}else if(currencyGive == "euro" || currencyGive == "Euro"){
     a = howMuch*3.51;
}else if(currencyGive == "GBP" || currencyGive == "gbp"){
    a = howMuch*4.12;
}else{
    a = "sorry we only convert dollar , euro or GBP currencies ."
}
return a;
}
console.log(convertor(currencyGive));
















