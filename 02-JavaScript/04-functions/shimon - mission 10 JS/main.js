/*question 1*/

function Mispar(){
    let num1, num2;
    num1 = window.prompt("Input the First Number");
    num2 = window.prompt("Input the second Number");
                                                     
    if (num1>num2) 
      { 
      alert("The larger Number is "+ num1);
      }   
    else if(num1<num2) 
      {
      alert("The larger Number is " + num2);
      }                  
    else
      {
     alert("The values "+ num1+ " and "+num2+ " are equal.");
      }
    }

    /*question 2*/

function Month_Num(){

    let num1 = window.prompt("Input the Month Number");
  
 if ( num1==1)
    {
       alert("The Month is " +"January");
    }
     else if (num1==2)
            {        
            alert("The Month is " +"February");
             }  
            else if (num1==3)
                {
                alert("The Month is " +"March");
                }
                 else if (num1==4)
                 {
                 alert("The Month is " +"April");
                 }

                 else if (num1==5)
                 {
                 alert("The Month is " +"May");
                 }

                 else if (num1==6)
                 {
                 alert("The Month is " +"June");
                 }  
                 
                 else if (num1==7)
                 {
                 alert("The Month is " +"July");
                 }  
                 
                 else if (num1==8)
                 {
                 alert("The Month is " +"August");
                 } 
                 
                 else if (num1==9)
                 {
                 alert("The Month is " +"September");
                 }
                 else if (num1==10)
                 {
                 alert("The Month is " +"October");
                 }  
                 
                 else if (num1==11)
                 {
                 alert("The Month is " +"November");
                 } 
                 
                 else if (num1==12)
                 {
                 alert("The Month is " +"December");
                 }
  }

      /*question 3*/

  function Age_Calculation(){
    let num = window.prompt("Enter your year of birth");
    let age=2021-num;
    alert("Your Age is: "+ age );
  }

      /*question 4*/

    function Mortgage(){
//track1
    let loan1 = window.prompt("Enter the amount of the first mortgage track");
    let percent1 = window.prompt("Enter the interest percentage of the first mortgage track");
    let year1 = window.prompt("Enter the number of years of the first mortgage track");
    let tutal1=loan1;
    percent1=(percent1/100);

    for(i=1;i<=year1;i++)
    {
    tutal1=tutal1*(1+percent1);
    }

//track2
    let loan2 = window.prompt("Enter the amount of the second mortgage track");
    let percent2 = window.prompt("Enter the interest percentage of the second mortgage track");
    let year2 = window.prompt("Enter the number of years of the second mortgage track");
    let tutal2=loan2;
    percent2=(percent2/100);

    for(i=1;i<=year2;i++)
    {
    tutal2=tutal2*(1+percent2);
    }

//track3
    let loan3 = window.prompt("Enter the amount of the third mortgage track");
    let percent3 = window.prompt("Enter the interest percentage of the third mortgage track");
    let year3 = window.prompt("Enter the number of years of the third mortgage track");
    let tutal3=loan3;
    percent3=(percent3/100);

    for(i=1;i<=year3;i++)
    {
    tutal3=tutal3*(1+percent3);
    }

//sum

    let total = tutal1+tutal2+tutal3;
    alert("The total mortgage repayment is: "+total)

  }