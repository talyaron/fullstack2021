let numOne, numTwo, numThree, product;

numOne = window.prompt("enter the first number:");
numTwo = window.prompt("enter the second number:");
numThree = window.prompt("enter the third number:");

product = numOne * numTwo * numThree;

if(product < 0){
    console.log("The product sign is: -");
}
else if(product > 0){
    console.log("The product sign is: +");
}
else{
    console.log("The product is: 0");
}