function BMI(height,weight)
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
    
}