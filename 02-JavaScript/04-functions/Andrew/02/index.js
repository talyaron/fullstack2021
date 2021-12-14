//a function that gets a number between 1 and 12, and returns the name of the month (1 = January, 2 = February ...)
function convertToDate(a){
    let monthes = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    return monthes[a-1];
}
let x = window.prompt("Please enter a Number between 1 and 12:")*1;
if(x<1 || x>12){
    alert(x +" is not a valid number.");
}
x = convertToDate(x);
alert("The month is: " +x);