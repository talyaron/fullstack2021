//ex1
// let input1=prompt("print num");
// let input2=prompt("print 2nd num");
// if (input1>input2){console.log(input1)}
// else {console.log(input2)};
//ex1
/*--------------------------------------------------------------------------------------------------------------------*/

//ex2
// countNeg=0;
// for (i=1; i<=3;i++){
//     num=prompt("Please enter a number");
//     if (num<0){
//         countNeg++;
//     }}

//     if (countNeg%2===0){
//         console.log("Positive")
//     }
//     else{console.log("Negative")
// }
//ex2

/*--------------------------------------------------------------------------------------------------------------------*/
//ex3
// Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result
/*
num1=prompt("Please enter a 1st number");
num2=prompt("Please enter a 2nd number");
num3=prompt("Please enter a 3rd number");
if (num1>num2){
    if (num1>num3){//max is num1
        if (num2>num3){
            console.log(num1, num2, num3);
        }
        else{
            console.log(num1,num3,num2);
        }
        
    }
    else{//num3>num1>num2
        console.log(num3,num1,num2);

    }
}
else{//num2>num1
    if (num1>num3){
        console.log(num2,num1,num3);

    }
    else{//num3>num1
        if (num2>num3){
            console.log(num2,num3,num1);
   
        }
        else{//num3>num2
            console.log(num3,num2,num1);


        }

    }
    
}
*/
//ex3


/*--------------------------------------------------------------------------------------------------------------------*/
//ex4
/*Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result*/
/*
let max=0;
for (i=1;i<=5;i++){
    let num1=prompt("Please enter a number");
    if (num1>max){
        max=num1;
    }
}
console.log("The largest number is",max)
*/
//ex4
/*--------------------------------------------------------------------------------------------------------------------*/
//ex5
/*Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen */
/*
for (i=1;i<=15;i++){
    let num=prompt("Please enter a number");
    if (num%2===0){
        console.log(num,"is even")
    }
    else{
        console.log(num,"is odd")
    }
}
*/
//ex5
/*--------------------------------------------------------------------------------------------------------------------*/
//ex6
/*
let sum=0;
for (i=1;i<=5;i++){

    let num=prompt("Please enter next student's grade");
    sum+=parseInt(num);
}
let average=sum/5;
if (average<60){
    console.log("The class garde is F");
}
else if(average<70){
    console.log("The class garde is D");
}
else if(average<80){
    console.log("The class garde is C");
}
else if(average<90){
    console.log("The class garde is B");
}
else if(average<100){
    console.log("The class garde is A");
}
*/
/*--------------------------------------------------------------------------------------------------------------------*/
//ex7
/*
Write a JavaScript program which iterates the integers from 1 to 100. 
But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". 
For numbers which are multiples of both three and five print "FizzBuzz"
*/
/*
for(i=1;i<=100;i++){
    if ((i%3===0)&&(i%5===0)){
        console.log("FizzBuzz");}
    
    else if (i%3===0){
        console.log("Fizz");
    }
    else if (i%5===0){
        console.log("Buzz");
    }

}*///ex7
/*--------------------------------------------------------------------------------------------------------------------*/
//ex8
/*
According to Wikipedia a happy number is defined by the following process :
"Starting with any positive integer, replace the number by the sum of the squares of its digits, 
and repeat the process until the number equals 1 (where it will stay), 
or it loops endlessly in a cycle which does not include 1. 
Those numbers for which this process ends in 1 are happy numbers, 
while those that do not end in 1 are unhappy numbers (or sad numbers)".
Write a JavaScript program to find and print the first 5 happy numbers
*/
/*
function happyNumber(n) {
    let sum = 0;
    while (n > 0) {
      let e = n % 10;
      n = Math.floor(n / 10);
      sum += e * e;
    }
    if (sum === 1) {
      return true;
    } else if (sum > 1 && sum <= 4) {
      return false;
    }
    return happyNumber(sum);
    
}    

let counter=5;
let num=1;
let happyFive="";
while (counter-->0){
    while (!(happyNumber(num))){//if the happyNumber function returned false check next number
        num++;
    }
    //else if a happynumber was found
    happyFive=happyFive+(num+" ");
    num++;
}
console.log('1st 5 happy numbers: ', happyFive);  
*///ex8
/*--------------------------------------------------------------------------------------------------------------------*/
//ex9
// Write a JavaScript program to find the armstrong numbers of 3 digits. 
/*
for (i=1;i<10;i++){
    for (j=0;j<10;j++){
        for (k=0;k<10;k++){
            num=i*100+j*10+k;

            if (((Math.pow(i,3))+(Math.pow(j,3))+(Math.pow(k,3)))===(num)){
                console.log(num, "is Armstrong");
            }
    }
 }
}
*///ex9
/*--------------------------------------------------------------------------------------------------------------------*/
//ex10
/*
Write a JavaScript program to construct the following pattern, using a nested for loop. 

*  
* *  
* * *  
* * * *  
* * * * *  
*/
/*
let char="";    
for (i=1;i<=5;i++){
        for (j=1;j<=i;j++){

            char=char+"*";
        }
        console.log(char+'\n');
        char="";
    }
*///ex10
/*--------------------------------------------------------------------------------------------------------------------*/
//ex11
/*11. Write a JavaScript program to compute the greatest common divisor (GCD)
 of two positive integers. Go to the editor
 */
/*
 num1=parseInt(prompt("Please enter a 1st number"));
 num2=parseInt(prompt("Please enter a 2nd number"));
 
 while (num1!=num2){ 
 if(num1>num2){
     num1=num1-num2;
 }
 else{
     num2=num2-num1;
 }
}
console.log(num1);
*/
//ex11
 /*--------------------------------------------------------------------------------------------------------------------*/

 //ex12
//  Write a JavaScript program to sum the multiples of 3 and 5 under 1000. Go to the editor
/*
let sum=0;
for(i=1;i<=1000;i++){
    if ((i%3===0)||(i%5===0)){
        sum+=i;
    }
}
console.log(sum);*/
 /*--------------------------------------------------------------------------------------------------------------------*/

//ex12