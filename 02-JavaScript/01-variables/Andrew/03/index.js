let numOne, numTwo, numThree;

numOne = window.prompt("enter the first number:");
numTwo = window.prompt("enter the second number:");
numThree = window.prompt("enter the third number:");

if(numOne > numTwo){
    if(numTwo > numThree){
        console.log(numOne + numTwo + numThree);
    }
    else if(numThree > numOne){
        console.log(numThree + numOne + numTwo);
    }
    else if(numOne >= numThree && numThree >= numTwo){
        console.log(numOne + numThree + numTwo);
    }
}
if(numOne <= numTwo){
    if(numTwo < numThree){
        console.log(numThree + numTwo + numOne);
    }
    else if(numThree < numOne){
        console.log(numTwo + numOne + numThree);
    }
    else if(numTwo >= numThree && numThree >= numOne){
        console.log(numTwo + numThree + numOne);
    }
}