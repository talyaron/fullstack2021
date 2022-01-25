let a = Number(prompt("please Enter variable A:"))
let b = Number(prompt("please Enter variable B:"))
let c = Number(prompt("please Enter variable C:"))

console.log(-1 * b);
console.log(2 * a);
console.log(b * b - (4 * a * c));

console.log(`the equation is: ${a}X² + ${b}X + ${c}`);

function quadraticEquation() {
    if ((b * b - (4 * a * c)) < 0) {
        console.log(`there is no solution`);
        return;
    }
    let x1 = ((b * -1) + Math.sqrt(b * b - (4 * a * c))) / 2 * a;
    let x2 = ((b * -1) - Math.sqrt(b * b - (4 * a * c))) / 2 * a;
    console.log(x1);
    if (x1 === x2) return;
    console.log(x2);
}

quadraticEquation()



