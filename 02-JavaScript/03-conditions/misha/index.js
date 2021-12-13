// --- 1 --- //

// let a = window.prompt("what is the first number?");
// let b = window.prompt("what is the second number?");

// if( a>=b ){
// console.log(a);
// }

// else{
//     console.log(b);
// }


// --- 2 --- //

// let a = window.prompt("what is the first number?");
// let b = window.prompt("what is the second number?");
// let c = window.prompt("what is the third number?");

// if(a>0 && b>0 && c>0){
//     console.log("the sign is +");
// }
// else if(a<0 && b<0 && c<0){
//     console.log("the sign is -");
// }
// else if(a>0 && b<0 && c>0){
//     console.log("the sign is -");
// }
// else if(a>0 && b<0 && c<0){
//     console.log("the sign is +");
// }
// else{
//     console.log("the sign is -");
// }

// --- 3 --- //

// let a = window.prompt("what is the first number?");
// let b = window.prompt("what is the second number?");
// let c = window.prompt("what is the third number?");

// if(a>b && a>c){
//     if(b>c){
//         console.log(a + "," + b + "," + c);
//     }
//     else{
//         console.log(a + "," + c + "," + b);
//     }
// }

// else if(b>a && b>c){
//     if(a>c){
//         console.log(b + "," + a + "," + c);
//     }
//     else{
//         console.log(b + "," + c + "," + a);
//     }
    
// }

// else if(c>a && c>b){
//     if(a>b){
//         console.log(c + "," + a + "," + b);
//     }
//     else{
//         console.log(c + "," + b + "," + a);
//     }
// }

// --- 4 --- //

// let a = window.prompt("what is the first number?");
// let b = window.prompt("what is the second number?");
// let c = window.prompt("what is the third number?");
// let d = window.prompt("what is the fourth number?");
// let e = window.prompt("what is the fifth number?");

// if (a>b && a>c && a>d && a>e){
//     console.log(a);
// }

// else if(b>a && b>c && b>d && b>e){
//     console.log(b);
// }

// else if(c>a && c>b && c>d && c>e){
//     console.log(c);
// }

// else if(d>a && d>b && d>c && d>e){
//     console.log(d);
// }

// else{
//     console.log(e);
// }

// --- 5 --- //

// for(let i=0; i<=15; i++){

//     if(i % 2== 0){
//         console.log(i + " is even");
//     }
//     else{
//         console.log(i + " is odd");
//     }
// }

// --- 6 --- //


// const students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

// let marksum = 0;

// for(let i=0; i<students.length; i++){

// marksum += students[i][1];
// var avg = (marksum/students.length);
// }

// console.log("avg grade:" + avg);

//     if(avg<60){
//     console.log('F');
//     }
//     else if(avg<70){
//     console.log('D');
//     }
//     else if(avg<80){    
//     console.log('C');
//     }
//     else if(avg<90){
//         console.log('B');
//     }
//     else{
//         console.log('A');
//     }



// --- 7 --- //

// for(let i=1; i<100; i++){

//     if(i % 5 == 0 && i % 3 == 0){
//         console.log('FizzBuzz');
//     }
//     else if(i % 3 == 0){
//         console.log('Fizz');
//     }
//     else if(i % 5 == 0){
//         console.log('Buzz');
//     }
//     else{
//         console.log(i);
//     }

// }


// --- 8 --- //


// --- 10 --- //

// let pr = '*'
// console.log(pr);

// for( let i = 0; i<4; i++){

//     pr = pr + '*'
//     console.log(pr);
    
// }


// --- 11 --- //

 // let a = window.prompt("what is the first number?");
// let b = window.prompt("what is the second number?");

// if (a<0){
//     a*=-1;
// }

// if (b<0){
//     b*=-1;
// }

// if(a>b){
//     for(let i = a; i>0; i--);
//         if( a % i == 0 && b % i == 0){
//             console.log(i);
//         }
// }

// else{
//     for(let i = b; i>0; i--);
//         if( b % i == 0 && a % i == 0){
//             console.log(i);
//         }
// }




// --- 12 --- //

// let counter = 0;

// for( let i=0; i<1000; i++){

//     if(i % 3 == 0){
//     counter += i;
//     }
//     else if(i % 5 == 0){
//     counter += i;
//     }

// }

// console.log(counter);


