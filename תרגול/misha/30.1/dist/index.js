// const a: number = 15;
// const b: number = 6;
// let r = 0;
// function gcd(x, y) {
//     if (a && b > 0) {
//         if (a > b) {
//             r = a % b;
//         }
//         else {
//             r = b % a;
//         }
//         return r;
//     }
// }
// r = gcd(a, b);
// console.log(r);
var str = prompt('input');
var sum = 0;
for (var i = 0; i < str.length; i++) {
    console.log(str.charAt(i));
    sum += +str.charAt(i);
}
console.log('-----------');
console.log("sum is : " + sum);
console.log('-----------');
console.log(str.charAt(str.length - 1));
for (var i = 1; i < str.length - 1; i++) {
    console.log(str.charAt(i));
}
console.log(str.charAt(0));
console.log('-----------');
// for (var i = str.length-1 ; i > 0; i--) {
//     console.log(str.charAt(i));
// }
// str.split("").reverse().join("")
console.log(str.split("").reverse().join(""));
