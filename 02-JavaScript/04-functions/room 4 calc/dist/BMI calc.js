// BMI
function BMI(e) {
    var BMI = weight / (height * height);
    if (BMI <= 18.5) {
        alert("Underweight");
    }
    else if (BMI <= 24.9 && BMI > 18.5) {
        alert("Normal");
    }
    else if (BMI <= 29.9 && BMI > 24.9) {
        alert("Overweight");
    }
    else if (BMI <= 34.9 && BMI > 29.9) {
        alert("Fat");
    }
    else {
        alert("Dayum");
    }
}
var weight = document.querySelector('#weight').value;
var height = document.querySelector('#height').value;
console.log(x);
var x = BMI(weight, height);
