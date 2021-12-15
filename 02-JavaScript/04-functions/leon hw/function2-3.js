/*function 2*/
const a = window.prompt("Input the number of the month");

function month(a) {
    if (a == 1)
        return "its January";
    else if (a == 2)
        return "February";
    else if (a == 3)
        return "March";
    else if (a == 4)
        return "April";
    else if (a == 5)
        return "May";
    else if (a == 6)
        return "June";
    else if (a == 7)
        return "July";
    else if (a == 8)
        return "August";
    else if (a == 9)
        return "September";
    else if (a == 10)
        return "October";
    else if (a == 11)
        return "November";
    else
        return "December";
}

console.log(month(a));


    
/*function 3*/
function age(thisYear, bornYear){
    return thisYear-bornYear;
}

let q = age(2021,1993);

console.log(`Age is ${q}`);
