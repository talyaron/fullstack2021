
numberOfMonth = (5);

function monthName(number) {
    monthNamelist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return monthNamelist[number-1];
};

let mName = monthName(numberOfMonth);
console.log(`The name of month number ${numberOfMonth} is ${mName}.`);

