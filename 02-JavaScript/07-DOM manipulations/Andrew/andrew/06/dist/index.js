var a = Number(prompt("please Enter variable A:"));
var b = Number(prompt("please Enter variable B:"));
var c = Number(prompt("please Enter variable C:"));
console.log(-1 * b);
console.log(2 * a);
console.log(b * b - (4 * a * c));
console.log("the equation is: " + a + "X\u00B2 + " + b + "X + " + c);
function quadraticEquation() {
    if ((b * b - (4 * a * c)) < 0) {
        console.log("there is no solution");
        return;
    }
    var x1 = ((b * -1) + Math.sqrt(b * b - (4 * a * c))) / 2 * a;
    var x2 = ((b * -1) - Math.sqrt(b * b - (4 * a * c))) / 2 * a;
    console.log(x1);
    if (x1 === x2)
        return;
    console.log(x2);
}
quadraticEquation();
