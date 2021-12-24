// create a function which get 2 number,
//  and return a string that says "the average of 
//  the numbers is (result)"

let a: number = 5;
let b: number = 4;

function age(a: number, b: number): number {
    return a + b / 2
}


function sayAvarage(name: string): string {
    return `hello ${age(a, b)}`
}

// console.log(age(1, 2));
console.log(sayAvarage('string'));
