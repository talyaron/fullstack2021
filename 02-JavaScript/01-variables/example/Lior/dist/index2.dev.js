"use strict";

/*function BMI(height,weight)
{
    let bmi=weight/math.pow(height,2);

    if (bmi>25)
    {
        console.log('You are overweitht')
    }

    elsif (bmi>18.5 && bmi<25)    
    {
        console.log('You are Normal')     
    } 

    else
    {
        console.log('You are underweight')     
    }
    
}*/
//Q1
function largest(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num2 > num1) {
    return num2;
  } else {
    console.log("they are equals");
  }
} //Q2


function month(num) {
  var list = ["January", "Febuary", "March", "April", "May", "June", "Julu", "August", "September", "Octoboer", "November", "December"];

  for (i = 1; i < list.length; i++) {
    if (num === i) {
      console.log(list[i]);
    }
  }
} //Q3


function Born(year) {
  return 2021 - year;
} //Q4