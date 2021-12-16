// ++++ exercise-1:

function numbers(a, b) {
    let result = Math.max(a, b);
    return result;
}
let largestNumber = numbers(100, 50);
console.log(`The largest number is: ${largestNumber}`);

// 



// ++++ exercise-2:

function monthName(number) {
    monthNamelist = ["Zero", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return monthNamelist[number];
}
numberOfMonth = (2);
let mName = monthName(numberOfMonth);
console.log(`The name of month number ${numberOfMonth} is ${mName}.`);

// 



// ++++ exercise-3:

function ageOfBirth(myYearOfBirth) {
    let result = 2022 - myYearOfBirth;
    return result;
}
let myYearOfBirth = (1977);
let age = ageOfBirth(myYearOfBirth);
console.log(`Year of born ${myYearOfBirth} = Age ${age}.`);

// 



// ++++ exercise-4: 
// total bill of number of products * tax, 
//  in the shortest way I came up with..

let bill = (producstPrices, tax) => {
    let total = 0;
    for (let i = 0; i < producstPrices.length; i++) {
        total += producstPrices[i] + producstPrices[i] * tax;
    }
    return total;
}
console.log(`Your total bill after tax is: ${bill([10, 15, 30], 0.2)}$`);

// 