let numOne, numTwo;

numOne = window.prompt("input firts int");
numTwo = window.prompt("input second int");

if(numOne > numTwo){
    console.log("The larger Integer is: "+numOne);
}
else if(numTwo > numOne){
    console.log("The larger Integer is: "+numTwo);
}
else{
    console.log("Both integers are the same and equal "+numTwo);
}