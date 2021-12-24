// create a function which get 2 number, and return a string that says "the average of the numbers is (result)"
let x: number = 2;
let y: number = 5;
let z: number = 2;

function average(a: number, b: number): number {
    return (a + b) / z;

}

function score(name: string): string {
    return `the average of the numbers is ${average(x, y)}`
}
console.log(score('name'))