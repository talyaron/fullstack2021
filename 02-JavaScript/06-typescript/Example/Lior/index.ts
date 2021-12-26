function AVG(num1: number , num2: number):string
{
    try 
    {
        let average=(num1+num2)/2;
        return `the average of both numbers is ${average}`;
    } 
    
    catch (error) 
    {
      console.error(error)  
    }
}

console.log(AVG(15,3))