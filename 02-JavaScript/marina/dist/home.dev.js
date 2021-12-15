"use strict";

// let p = 5;
// let t = 'hello wold';
// let j = 12;
// console.log(p);
// console.log(t);
// console.log(t, + p);
// console.log(12/5+85-p)
// for(let x = 15; x>1; x-=3){
//     console.log(x)
// }
// for(let y = 0; y<10; y++){
//     console.log(y)
// }
// for(let r = 10; r>2; r-=2){
//     console.log(r);
// }
// for(let b = 0; b<10; b++){
//     console.log(b)
// }
// for(let a = 17; a>6 && a<18; a-=5){
//     console.log(a)
// }
// for(let u = 9; u<20 && u>8; u+=4){
//     console.log(u+1)
// }
// for(let i = 0; i<5; i+=2){
//     console.log(i);
//     let y = 6;
//     let b = 4;
//     console.log(y+b-i);
// }
// let sum = 12;
// for(let x = 12; x>1; x--){
//     sum = sum * (x-1);
//     console.log(sum);
// }
// let number = 13;
// for(let i = 13; i>1; i--){
//     console.log('--------');
//     console.log('i = ' + i)
//     console.log('number =', + number);
//     number = number * (i-1);
//     console.log('number * (i-1) =', + number);
// }
// console.log('13! =', number)
// let gh = 3;
// if(gh>2){
//     console.log('true');
// }
// let marina = "marina";
// if(marina = 'marina'){
//     console.log('yes, u r marina')
// } else {
//     console.log('no, u r NOT marina');
// }
// if(marina = "Marina"){
//     console.log('u r NOT marina! call marina');
// }
// 1.
var a = 6;
var b = 8;

if (a > b) {
  console.log(a);
} else {
  console.log(b);
} // 2.


var x = 3;
var y = -7;
var z = 2;
var result = x * y * z;

if (result < 0) {
  console.log(result);
} else {
  console.log('no result');
} // 3.


var q = -1;
var w = 0;
var e = 4;

if (q > w) {
  console.log(q);
} else {
  console.log(w); // w > q
}

if (q > e) {
  console.log(q);
} else {
  console.log(e); // e > q
}

if (w > e) {
  console.log(w);
} else {
  console.log(e); // e > w
}

if (e > w && w > q) {
  console.log(e, w, q);
} else {
  console.log('none');
} // 4.


var t = -5;
var u = -2;
var s = -6;
var d = 0;
var f = -1;

if (t > u && t > s && t > d && t > f) {
  console.log(t);
} else if (u > t && u > s && u > d && u > f) {
  console.log(u);
} else if (s > t && s > u && s > d && u > f) {
  console.log(s);
} else if (d > t && d > u && d > s && d > f) {
  console.log(d);
} // 5.


for (i = 15; i > 0; i--) {
  if (i % 2) {
    console.log(i + ' is even');
  } else {
    console.log(i + ' is odd');
  }
} // 6. ??????????????


var students = [['david', 80], ['vinoth', 77], ['divya', 88], ['ishitha', 95], ['thomas', 68]];
console.log(students.length);
var range = 81.6; // let range = (david + vinoth + divya + ishitha + thomas) / 5;
// console.log((david + vinoth + divya + ishitha + thomas) / 5);

for (range = 81.6; range < students.length; students.length++) {
  console.log(students.length);

  if ('range' < 60) {
    console.log('grade = F');
  } else if ('range' < 70) {
    console.log('grade = D');
  } else if ('range' < 80) {
    console.log('grade = C');
  } else if ('range' < 90) {
    console.log('grade = B');
  }
} // 7.


for (i = 0; i <= 100; i++) {
  if (i % 3) {
    console.log('Fizz');
  } else if (i % 5) {
    console.log('Buzz');
  } else if (i % 3 && i % 5) {
    console.log('FizzBuzz'); // ??????????????
  }
} // 8.


Math.pow(); // 8.

var c = c;

for (i = 0; i < 5; i++) {
  c = i + '*';
  console.log(c);
} // 12.  ??????????????


var sum = i % 3 + i % 5;

for (i = 0; i <= 1000; i++) {
  var _sum = i % 3 + i % 5;

  if (i % 3 || i % 5) {
    console.log(_sum + i);
  }
}