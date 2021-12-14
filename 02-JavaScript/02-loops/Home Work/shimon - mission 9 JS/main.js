/*question 1*/
function Mispar(){
let num1, num2;
num1 = window.prompt("Input the First integer");
num2 = window.prompt("Input the second integer");
                                                 
if(num1>num2) 
  { 
  console.log("The larger Number is "+ num1);
  }   
else
  if(num1<num2) 
  {
  console.log("The larger Number is " + num2);
  }                  
else
  {
   console.log("The values "+ num1+ " and "+num2+ " are equal.");
  }
}
/*question 2*/
function Num_Sign(){
    let num1, num2, num3;
    num1 = window.prompt("Input the First Number");
    num2 = window.prompt("Input the second Number");
    num3 = window.prompt("Input the third Number");
 if ( num1>0 &&  num2>0 &&  num3>0)
    {
       alert("The sign is +");
    }
     else if (num1<0 && num2<0 && num3<0)
            {        
            alert("The sign is -");
             }  
            else if (num1>0 && num2<0 && num3<0)
                {
                alert("The sign is +");
                }
                 else if (num1<0 && num2>0 && num3<0)
                 {
                 alert("The sign is +");
                 }
                    else
                    {
                    alert("The sign is -");
                    }
 }
/*question 3*/

function Num_Sort(){
    let num1, num2, num3;
    num1 = window.prompt("Input the First Number");
    num2 = window.prompt("Input the second Number");
    num3 = window.prompt("Input the third Number");
 if (num1<num2 && num2<num3 )
            {        
            alert(num1 +", " + num2 +", " +num3);
             }  
            else if (num1>num2 && num2>num3)
                {
                alert(num3 +", " + num2 +", " +num1);
                }
                else if (num2>num1 && num1>num3)
                    {
                        alert(num3 +", " + num1 +", " +num2);
                    }
                        else if (num1>num2 && num3>num2)
                        {
                            alert(num2 +", " + num3 +", " +num1);
                        }
                        else
                        {
                            alert(num2 +", " + num3 +", " +num1);
                        }
              
} 

/*question 4*/
function Big_Num(){
    let num1, num2, num3, num4, num5 ;
    num1 = window.prompt("Input the First Number");
    num2 = window.prompt("Input the second Number");
    num3 = window.prompt("Input the third Number");
    num4 = window.prompt("Input the fourth Number");
    num5 = window.prompt("Input the fifth Number");


 if ( num1>num2 &&  num2>num3 &&  num3>num4 &&  num4>num5)
    {
       alert(num1);
    }
    else if (num2>num1 && num2>num3 &&  num2>num4 &&  num2>num5)
         {
        alert(num2);
         }
         else if (num3>num4 &&  num3>num5 && num3>num1 && num3>num2)
         {
         alert(num3);
         }
              else if (num4>num1 && num4>num2 && num4>num3 && num4>num5)
                  {
                 alert(num4);
                  }
                     else if (num5>num4 && num5>num3 && num5>num2 && num5>num1)
                     {
                     alert(num5)
                     }
  }
/*question 5*/

function Even_odd(){

    for (let x=0; x<=15; x++) { 
        if (x === 0) {
            console.log(x +  " is even");
         }
         else if (x % 2 === 0) {
            console.log(x + " is even");   
         }
         else {
            console.log(x + " is odd");
              }
    }
}

/*question 6*/

function Average_Grade(){
    let a=80;
    let b=77;
    let c=88;
    let d=95
    let e=68

    let sum=(a+b+c+d+e)
    let average=(sum/5)

    if ( average<60)
    {
       alert("The Grade Is "+ "F");
    }
    else if (average<70)
         {
        alert("The Grade Is "+ "D");
         }
         else if (average<80)
         {
         alert("The Grade Is "+ "C");
         }
              else if (average<90)
                  {
                 alert("The Grade Is "+ "B");
                  }
                     else if (naverage<100)
                     {
                     alert("The Grade Is "+ "A")
                     }
}

  /*question 7*/

  function Fizz_Buzz(){

    for (let i=1 ;i<101 ; i++)
         {   
         if(i%3==0 && i%5==0)
         {
         console.log(i + " FizzBuzz")
         }
             else if (i%3==0)
            {
            console.log(i + " Fizz")
             }
                else if (i%3==0)
                {
                 console.log(i + " Fizz")
                }
                     else if (i%5==0)
                    {
                    console.log(i + " Buzz")
                    }
                        else
                        {
                        console.log(i)
                        }
        }
  }


  /*question 8*/

  function Happy_number(){

    let num = window.prompt("Input Number between 1-99");
    
    let num1=(num-num%10);
    let a=(num1/10);
    let b=(num%10);

    let sum=((a*a)+(b*b));
    let c=(sum-sum%10);
    let d=(sum%10);
    let sum2=((c*c)+(d*d))

    let e=(sum2-sum2%100);
        e=(e/100)
    let f=(sum2%100);
    let g=(f%10)
        f=(f-f%10)
        f=f/10
   let sum3=((e*e)+(f*f)+(g*g))
   let x=(sum3-sum3%10);
       x=(x/10);
    let y=sum3%10
   let sum4=((x*x)+(y*y))

   if (sum4=1){
       alert(num + " is Happy Number")
   }
    else{
        alert(num + " is no Happy Number")
    }
  }





  /*question 9*/

  function Armstrong_number(){

     let num = window.prompt("Input Number");
     
     let num1=(num-num%100);
     let num2=(num%100);
     let num3=(num2%10);
     let a=(num1/100);
      num2=(num2-num2%10);
      let b=(num2/10);
      let c=num3;

      let sum_a=(a*a*a);
      let sum_b=(b*b*b);
      let sum_c=(c*c*c);
      let total=(sum_a + sum_b + sum_c);
      if(total==num) 
      {
      alert(num + " is an Armstrong number")  
      }
      else
      {
        alert(num + " is no Armstrong number")  
      }
  }


  /*question 10*/

  function Asterisk_Loop(){
      let x= " "
  for (let i=1 ;i<=5 ; i++)
  {
  x+=("*");
  console.log(x)
  }
}   

/*question 12*/

function multiples_3_5(){
let sum = 0;
for (var i = 0; i < 1000; i++)
{
    if (i % 3 === 0 || i % 5 === 0)
    {
       sum += i;
    }
}
console.log(sum);
}
