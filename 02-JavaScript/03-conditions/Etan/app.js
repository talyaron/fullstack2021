let num1 = window.prompt("Input the first ineger", "0");
let num2 = window.prompt("Input the second ineger", "0");

if (parseInt(num1) > parseInt(num2)) {
  console.log("The larger of " + num1 + " and " + num2 + " is " + num1 + ".");
} else if (parseInt(num2) > parseInt(num1)) {
  console.log("The larger of " + num1 + " and " + num2 + " is " + num2 + ".");
} else {
  console.log("The values " + num1 + " and " + num2 + " are equal.");
}


let x = 2, y = 4, z = -5;
let product = x * y * z;

if(product>= 0){
    // alert("Sign is positive")
} else{
    // alert("Sign is negative")
}

let a = 3, b = 10;
if( x>y && x>z && x>a && x>b){
  alert(x)
}else if( y>x && y>z && y>a && y>b){
  alert(y)
}else if( z>x && z>y && z>a && z>b){
  alert(z)
}else if( a>x && a>z && a>y && a>b){
  alert(a)
} else{
  alert(b)
}
