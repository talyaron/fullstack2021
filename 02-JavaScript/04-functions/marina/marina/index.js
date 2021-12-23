

//variable

var a = 2;  //משתנה ישן ולא בשימוש
const z = 'Good mornning';
let w = 45;  

let  wLet;   //hoisted
var  wVar;

b = 3;
c = 4;
d = 5;
a = a + 5;
b = c * d;
c = b - (a * 2 / 3);
d = 3 * 6 / c;

x = 'hi all'
a = a + ' hi all';
// z = 'Good evening';
w = w + 10;

wLet = 10;
wVar = 20;



console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(x);
console.log(w);
console.log(wLet, wVar);






//loops

//for(initial value; condition to be true; increment){
//code block
//}

for(let i = 0; i<10; i++){
    console.log(i);
}



for(let i = 10; i>0; i--){
    console.log(i);
}

for(let i = 20; i>4; i-=4){
    console.log(i);
    console.log(i * 5 - 2);
}

for(let i = 5; i>3 && i<10; i ++){
    console.log('I is '+ i);
}



for (let i = 0; i < 10; i++) {
    console.log(i);

    let a = 12;
    var b = 23;

    console.log(a)

};

console.log(b); //no error
// console.log(a); //error


let result = 14;
for(let n = 14; n>1; n--){
    result = result * (n-1);
    console.log(result)
}




let counter = 14;

for(let n = 14; n>1; n--){
    // console.log('----------');
    // console.log('n = ' + n);
    // console.log('counter =', counter);
    counter = counter * (n-1);
    // console.log('counter * (n-1) = ', counter)
   
}
console.log('14! = ' + counter)







// let counter = 14;

for(let n = 13; n>1; n--){
    // console.log('----------');
    // console.log('n = ' + n);
    // console.log('counter =', counter);
    counter = counter * n;
    // console.log('counter * (n-1) = ', counter)
   
}
console.log('14! = ' + counter)









//conditions

let s = '3';

if(s>1){
    console.log('it was true')
}


if(s>3){
    console.log('the 2nd was true')
}

let y = 'Hi';

if (y == 'Hi'){
    console.log('y is Hi')
}


if (y == 'hi'){
    console.log('y is Hi')
} else {
    console.log('y is not Hi')
}


if( s === '3'){
    console.log('s === 3')
}

