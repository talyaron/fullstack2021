// let weight = 85;
// let height = 1.80;
// let bmi = 0;

// function BMI(x , y ){
//      let bmi = x/(y*y);
//      let z;
     
//      if(bmi < 18.5) z = ' Underweight' ;
//      else if (bmi < 22.9) z = ' Normal range';
//      else if (bmi < 24.9) z = ' Overweight I';
//      else if (bmi < 29.9) z = ' Overweight II';
//      else if (bmi > 30) z = ' Overweight II';

//      return bmi +  `${z}`;

// }

// bmi = BMI(weight, height);
// console.log('the BMI is '+ bmi );

function ReturnValue (loan, precentage, years)
{
    let sum=loan;
    
    for(i=1; i<=years; i++)
    {
        sum+= (precentage*sum)/100;
    }

return sum;
}


let x = Math.round(ReturnValue(100,5,5));
console.log(x);
