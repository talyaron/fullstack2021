let weight= window.prompt("what is your weight?");
let height= window.prompt("what is your height?");


function bmicalc(weight, height){

   return weight/(height*height);

}

bmi = bmicalc;
console.log(bmi);