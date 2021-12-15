let David = 80;
let Vinoth = 77;
let Divya = 88;
let Ishitha = 95;
let Tomas = 68;

let average = (David + Vinoth + Divya + Ishitha + Tomas) / 5;
console.log(average);

if(90 < average && average < 100){
    console.log("The Grade is A");
}
if(80 < average && average < 90){
    console.log("The Grade is B");
}
if(70 < average && average < 80){
    console.log("The Grade is C");
}
if(60 < average && average < 70){
    console.log("The Grade is D");
}
if(average < 60){
    console.log("The Grade is F");
}