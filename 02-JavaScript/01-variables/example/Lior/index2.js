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

function largest(num1,num2)
num1 = parseInt(num1);
num2 = parseInt(num2);

{
    if (num1>num2)
    {
        return num1
    }
    else if (num2>num1)
    {
        return num2
    }

    else 
    {
        console.log("they are equals")
    }
}


//Q2

function month(num)
{

    let list=["January", "Febuary", "March",
     "April", "May", "June" , "Julu", "August",
      "September", "Octoboer", "November", "December"]

    for (i=0; i<list.length; i++)

    {
        if (num===i)
        {
            console.log(list[i])
        }
    }
}

//Q3

function Born(year)
{
    return (2021-year)
}



//Q4

function countPaths(maxRow,maxCol)
{
     count=0;
     array=array(maxRow,maxCol)
     maxRow=array.length;
     maxCol=array[0].length;
     moveByRow=array[0][0]/10;
     moveByCol=array[0][0]%10;
     array=array(maxRow,maxCol)

    if(moveByCol<maxCol && moveByRow<maxRow)
    {
      return countPaths(array,count,moveByCol,moveByRow);
    }
    if(moveByRow<maxCol &&moveByCol<maxRow)
    {
        return countPaths(array,count,moveByRow,moveByCol);
    }
    return count;
}
function countPaths( array, count, currentCol, currentRow)
{
     maxRow=array.length-1;
     maxCol=array[0].length-1;
     moveByRow=array[currentRow][currentCol]/10;
     moveByCol=array[currentRow][currentCol]%10;
    
    if(moveByCol+currentCol<maxCol && moveByRow+currentRow<maxRow)
    
      return countPaths(array,count,moveByCol,moveByRow);
      else if(currentRow==maxRow && currentRow==maxCol)
         return count++;
    
    if(moveByRow+currentCol<maxCol && moveByCol+currentRow<maxRow)
    
        return countPaths(array,count,moveByRow,moveByCol);
        else if(currentRow==maxRow &&currentCol==maxCol)
             return count++;
    return count;
}



friends=['Barak', 'Yefet', 'Igor', 'Eyal', 'Or', 'Shimon'];
