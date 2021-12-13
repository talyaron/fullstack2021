//Q1//
let x,y;
x = window.prompt("Input the First integer", "0");
y = window.prompt("Input the second integer", "0");

if (x>y)
{
  console.log(x);
}
else
{
  console.log(y);
}


//Q2//

let x=3
let y=-7
let z=2

if (x>0 || y>0 || z>0)
{
    console.log("the multiplication is negative");
}

else
{
    console.log("the multiplication is positive");

}

//Q3//
x = window.prompt("Input the First integer", "0");
y = window.prompt("Input the second integer", "0");
z = window.prompt("Input the third integer", "0");

    if(x>y && x>z)
    {
        if(y>z)
        {
        console.log(x + ", " + y + ", " +z);
        }
        else
        {
        console.log(x + ", " + z + ", " +y);
        }
    }

    if(y>x && y>z)
    {
        if(x>z)
        {
        console.log(y + ", " + x + ", " +z);
        }
        else
        {
        console.log(y + ", " + z + ", " +x);
        }
    }

    if(z>y && z>x)
    {
        if(z>y)
        {
        console.log(z + ", " + y + ", " +x);
        }
        else
        {
        console.log(z + ", " + x + ", " +y);
        }
    }

//Q4//

let temp=0;
x = window.prompt("Input the First integer", "0");
y = window.prompt("Input the second integer", "0");
z = window.prompt("Input the third integer", "0");
a = window.prompt("Input the third integer", "0");
b = window.prompt("Input the third integer", "0");
const numbers=[x,y,z,a,b];

for (i=0;i<=numbers.length;i++)
{
    if (numbers[i]>numbers[i+1])
    {
        temp=numbers[i];
    }
    else
    {
        temp=numbers[i+1];
    }
}
console.log(temp);

//Q5//

const numbers2=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

for(i=0;i<numbers2.length;i++)
{
    if((numbers2[i]/2)%2==0)
    {
        console.log(numbers2[i]+" is even");
    }
    else
    {
        console.log(numbers2[i]+" is odd");
    }
}


//Q6//

const grades=[['David',80],['vinoth',70],['divya',88],['ishitha',95],['thomas',65]]

var sum=0;
let average=0;

for(i=0;i<=grades.length;i++)
{
    sum=sum+grades[i,1];    
}

average=sum/grades.length;

if (average < 60)
{
    console.log("Grade : F");      
} 

else if (average < 70) 
{
    console.log("Grade : D"); 
} 

else if (average < 80) 
{
    console.log("Grade : C");
} 

else if (average < 90) 
{
    console.log("Grade : B"); 
}
   
else if (average < 100) 
{
    console.log("Grade : A"); 
}

//Q7//

for(i=0;i<=100;i++)
{
    
    if(i%5==0 && i%3==0)
    {
        console.log(i + "FizzBuzz"); 
    }
    
    elseif(i%3==0)
    {
        console.log(i + "Fizz"); 
    }

    elseif (i%5==0) 
    {
        console.log(i + "Buzz");  
    }
}

//Q9//
function armstrong_number()
{
    for(i=1;i<10;i++)
    {
        for(j=1;j<10;j++)
        {
            for(k=1;k<10;k++)
            {
                if(Math.pow(i,3)+Math.pow(j,3)+Math.pow(k,3)==(i*100+j*10+k))
                {
                    console.log(i*100+j*10+k + 'this is armstrong number')
                }

                else
                {
                    console.log(i*100+j*10+k + 'this is not armstrong number')
                }
            }
        }
    }
}

//Q10//

var chr;
for(i=1; i <=6; i++)
{
   for (j=1; j < i; j++)
    {
        chr=chr+("*");        
    }
    console.log(chr);
    chr='';    
}