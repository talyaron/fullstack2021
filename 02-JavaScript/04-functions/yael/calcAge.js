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