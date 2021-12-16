function BMI(height,weight)
{
    let bmi=weight/(Mth.pow(height,2));

    if (bmi>25)
    {
        console.log('You are overweitht')
    }

    else if (bmi>18.5 && bmi<25)    
    {
        console.log('You are Normal')     
    }
    
    else
    {
        console.log('You are underweight')     
    }
    
}





function ReturnValue (loan, precentage, years)
{
    let sum=loan;
    
    for(i=1; i<=years; i++)
    {
        sum+= (precentage*sum)/100;
    }

return sum;
}


let x = ReturnValue(100,5,5);
console.log(x)


