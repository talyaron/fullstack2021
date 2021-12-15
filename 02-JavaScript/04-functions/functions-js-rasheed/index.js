///Qustion One////

let num1 = window.prompt("Input First number?")
let num2 = window.prompt("Input second number?")

function largerNumber(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    else {
        return num2;

    }

}



alert(largerNumber(num1, num2) + " Is larger ");


///Qustion Two////

let input = window.prompt("Enter the Number of the Month");

function monthName(input) {

    let months = [".", "Januray", "Fabruary", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"]


    let output = months[input];
    return output;

}

if (input < 1 || input > 12) {
    alert("Error! Number Is Undifined")
}

else {

    alert("The Month is " + monthName(input));

}

///Qustion Three////

let yearofbirth = window.prompt("Enter the year of Birth");
let yearnow = 2021
let age = yearnow - yearofbirth

function yourAge(age) {
    return age;
}

alert("You'r Age is " + yourAge(age));

///Qustion Four////









