var z=10;

var y=2



console.log(z+4);


for(let w = 0 ; w<20 ; w ++) {
    console.log(w)
}

/*Hw  */
//exercise 1:
var num1,num2;
num1=window.prompt("Input the first integer", "0");
num2=window.prompt("Input the second integer", "0");
if(num1> num2){
    console.log(num1 +" is bigger than"+ num2)
}else{
    console.log(num2 + "is bigger than" + num1)
}

//exercise 2:
let num1, num2 ,num3;
num1=window.prompt("Put the first number", "0");
num2=window.prompt("Put the first number", "0");
num3=window.prompt("Put the first number", "0");

console.log("the sign is " + (Math.sign(num1)));
console.log("the sign is " + (Math.sign(num2)));
console.log("the sign is " + (Math.sign(num3)));

//exercise 3:
let num1,num2,num3,temp

num1=window.prompt("Put the first number", "0");
num2=window.prompt("Put the second number", "0");
num3=window.prompt("Put the third number", "0");
 
if (num1<num2) {
  temp=num2
  num2=num1
  num1=temp
  }
if (num1<num3) {
  temp=num3
  num3=num1
  num1=temp
 }
if (num2<num3) {
  temp=num3
  num3=num2
  num2=temp
}
  console.log(num1 +","+ num2  +","+  num3)

  //how do i do alert box to show my answer????

//exercise 4:

let num1,num2,num3,temp

num1=window.prompt("Put the first number", "0");
num2=window.prompt("Put the second number", "0");
num3=window.prompt("Put the third number", "0");
 
if (num1<num2) {
  temp=num2
  num2=num1
  num1=temp
  }
if (num1<num3) {
  temp=num3
  num3=num1
  num1=temp
 }
if (num2<num3) {
  temp=num3
  num3=num2
  num2=temp
}
  console.log(num1 )

  //or
  
let num1,num2,num3,num4,num5,max

num1=window.prompt("Put the first number", "0");
num2=window.prompt("Put the second number", "0");
num3=window.prompt("Put the third number", "0");
num4=window.prompt("Put the fourth number", "0");
num5=window.prompt("Put the fifth number", "0"); 


  max=num1
  
if (num2>max) {
  max=num2
}
 
if (num3>max) { 
  max=num3
}
   
if (num4>max) {
  max=num4
}
   
if (num5>max) {
  max=num5
  
}
console.log(max)




//exercise 5:


for(let x=0; x<=15; x++){
    if (x%2===0 ){
    console.log(x + " is even")
  }else{
    console.log(x+ " is odd")}
  }

  //exercise 6:
  



