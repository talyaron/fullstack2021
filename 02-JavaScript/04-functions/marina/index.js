

// //definition
// function doSomthing(argument1, argument2, argument3, etc) {
//     //do somthing with the arguments
//     const result = argument1 + argument2 + argument3 + etc;

//     //return some result
//     return argument1 + argument2 + argument3 + etc;
// }

// //envocation
// let x = doSomthing(134,20,'ps',4);

// console.log(x);
// console.log(doSomthing(134,20,'ps',4))

// function add(a,b){
//     return a+b;
// }

// let q = add(1,7);


// function multi(a,b){
//     console.log(a);
//     return a*b;
// }


// q = multi(5,4);
// console.log(q);
// q = multi(200,13);
// console.log(q);

// console.log(multi(12,56))
// console.log(multi(76,89));

// function sayHello(name){
//     return `Hello ${name}`;
// }

// console.log(sayHello('Noa'));
// console.log(sayHello('Leon'))







// function bmi(massa, height){
//     let result = (massa / (height * height));
//     return result;
// }

// let q = bmi (43, 1.5)
// console.log(q);

// if(q<= 18.5){
//     console.log('under weight');

// }

// if (q >= 18.5 && q < 25){
//     console.log('normal weight')
// }

// if (q >= 25 && q < 30){
//     console.log('class 1');
// }

// if (q >= 30 && q < 35){
//     console.log('class 2');
// }

// if (q >= 35 && q < 40){
//     console.log('class 3');
// }

// if (q >= 45){
//     console.log('class 4');
// }








// function calcInterest(loan, percentage, years){
//     let totalSun = loan;

//     for(let i = 0; i < 10; i ++ ){
//         totalSun = totalSun + (totalSun * percentage);
//     }

// }

// return totalSun

// let intrest = calcInterest( 100, 5, 10);
// console.log(intrest);







// function* range(_start_, _end_) {
//       for (let h = _start_; h <= _end_; h++) {
//       yield h;
//       }
// }

      
// for (h of range(1, 6)) {
//     console.log(h);
//     }  



  
  
    
//     for (let step = 1; step < 13; step++){
//         console.log(step)
//     }
    
//     function* range(start=1, end=null, step=1) {
//         if (end == null) {
//           end = start;
//           start = 1;
//         }
      
//         for (let i=start; i < end; i+=step) {
//           yield i;
//         }
    
        
//     }
      
    






function multi (a, b) {
    return a * b;
    
}
let q = multi (2, 3)
console.log(q);



const multi2 = function (a, b) {
    return a * b;
}
let w = multi2 (4, 6)
console.log(w);


const multi3 = (a, b) => {
    return a * b;
}

let e = multi3 (7, 8);
console.log(e);







