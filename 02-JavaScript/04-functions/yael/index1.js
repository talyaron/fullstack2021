// function bigFunction(n1, n2) { // The function returns the larger of n1 and n2
//     if (n2<n1)
//     return n1;
//     else{
//         return n2;
//     }   
//   }
//    let num= bigFunction(-7, 3);
//    console.log(num);

// -----------------------------------------------------------------------------------------------------------
/*
function calcAge(){
    // var inputAge=document.getElementById("DOB")
    let DOB=prompt("enter your date of birth in the format: year-month-day");
    console.log("date of birth:", DOB);

    //conertion to the Date object

    let birthDate=new Date (DOB);
    console.log("birthdate"+birthDate );

    //get diff from current date
    let currDate=Date.now();
    let diffdDate=currDate-birthDate;//calculated age in ms
    //console.log(diffdDate);

    //calculation of age
    let ageDate= new Date(diffdDate);
    let age= Math.abs(ageDate.getUTCFullYear()-1970);
    console.log(age); 

}

calcAge();
*/
// -------------------------------------------------------------------------------------------
/*
function monthName(){
let month;
let month_num=prompt("enter a number between 1-12");

switch (month_num) {
    case '1':
      month = "January";
      break;
    case '2':
       month = "February";
      break;
    case '3':
        month = "March";
      break;
    case '4':
        month = "April";
      break;
    case '5':
        month = "May";
      break;
    case '6':
        month = "June";
      break;
    case '7':
        month = "July";    
      break;
    case '8':
        month = "August";
      break;
    case '9':
        month = "September";
        break;
    case '10':
        month = "October";
        break;
    case '11':
        month = "November";
        break;
    case '12':
        month = "December";
        break;
    default:
        console.log("non valid number");
}
console.log(month);
}

monthName();
*/
//---------------------------------------------------------------------------------------------------------------------/*


function moneyConverter (price){
//    A function that converts a price in Israeli shekels to dollars/euro/yen.

    const dollarValue=3.14;
    const euroValue=3.54;
    const yenValue=0.028;
    const BahtValue=0.094;

    let currency=prompt("enter the currency you want to convert to: dollars/euro/yen/baht");
    switch (currency) {
    case 'dollars':
        currency= dollarValue * price;
        break;
    case 'euro':
        currency= euroValue * price;
        break;
    case 'yen':
        currency=yenValue*price;
        break;
    case 'baht':
        currency=BahtValue*price;
        break;
    default:
        console.log("non valid input");
        return;
}
	    console.log("The converted price is:"+currency);
}

moneyConverter(799);