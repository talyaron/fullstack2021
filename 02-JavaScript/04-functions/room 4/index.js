// BMI
function BMI(weight, height) {
  let BMI = weight / (height*height);
  if (BMI <= 18.5) {
    console.log("Underweight");
  } else if (BMI <= 24.9 && BMI > 18.5) {
    console.log("Normal");
  } else if (BMI <= 29.9 && BMI > 24.9) {
    console.log("Overweight"); 
  } else if (BMI <= 34.9 && BMI > 29.9) {
    console.log("Fat");
  } else {
    console.log("Dayum");
  }
}
weight = window.prompt("Input your weight", "weight")
height = window.prompt("Input your heigh", "height")
let x = BMI (weight, height);
console.log(x)
