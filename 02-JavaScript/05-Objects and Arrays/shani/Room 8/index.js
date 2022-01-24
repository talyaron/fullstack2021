
// i=window.prompt("Choose a number")


// const months=["Tishrai", "Heshvan", "Kislev","Tevet","Shvat","Adar","Nisan","Iyar","Sivan","Tammuz","Av","Elul","Error month not found"]

//  function convertMonth(i){
//      if(i<=1){
//          return months[0]
     
//         } 
//     else if (i==2){
//          return months[1]
//      }
//      else if (i==3){
//         return months[2]
//     }
//     else if (i==4){
//         return months[3]
//     }
//     else if (i==5){
//         return months[4]
//     }
//     else if (i==6){
//         return months[5]
//     }
//     else if (i==7){
//         return months[6]
//     }
//     else if (i==8){
//         return months[7]
//     }
//     else if (i==9){
//         return months[8]
//     }
//     else if (i==10){
//         return months[9]
//     }
//     else if (i==11){
//         return months[10]
//     }
//     else if (i==12){
//         return months[11]
//     }
//     else{
//         alert(months[12])
//     }


//    }

//  console.log(convertMonth(i))



//a shorter way to do so

// x=window.prompt("Choose a number")


// const jewishMonths=["Error month not found","Tishrai", "Heshvan", "Kislev","Tevet","Shvat","Adar","Nisan","Iyar","Sivan","Tammuz","Av","Elul"];
// function convertJewishMonth(y){
//     if(y<=0 || y>12){
//         alert(jewishMonths[0]);
//     }else{
//         return(jewishMonths[y]);
//     }
// }

// console.log(convertJewishMonth(x))


//trying in array of objects
z=window.prompt("Choose a number")
const jewishAndOtherMonths=["Error month not found", 
                            {jewish:"Tishrai", other:"October"}, 
                            {jewish:"Heshvan", other:"November"}, 
                            {jewish:"Kislev", other:"December"}, 
                            {jewish:"Tevet", other:"January"}, 
                            {jewish:"Shvat", other:"February"}, 
                            {jewish:"Adar", other:"Match"}, 
                            {jewish:"Nisan", other:"April"}, 
                            {jewish:"Iyar", other:"May"}, 
                            {jewish:"Sivan", other:"June"}, 
                            {jewish:"Tammuz", other:"July"}, 
                            {jewish:"Av", other:"August"}, 
                            {jewish:"Elul", other:"September"}];

let myMonth = convertJewishMonth(z);
if(myMonth == "err"){
    alert(jewishAndOtherMonths[0]);
} else {
    alert("The " + z + "th Jewish month is: " + myMonth.jewish);
    alert("The regular month is: " + myMonth.other);
}

/*
let name1 = window.prompt("enter name of jewish month to find regular month: ")
let result=searchHebrew(name1);
if(result==undefined){
   console.log(jewishAndOtherMonths[0])
}else{
    console.log(result.other)
}

name1 = window.prompt("enter name of regular month to find jewish month: ")
result=searchOther(jewishAndOtherMonths,name1);
if(result==undefined){
    console.log(jewishAndOtherMonths[0])
}else{
    console.log(result.jewish)
}




function searchHebrew(name){
	return jewishAndOtherMonths.find(element => element.jewish == name);
}


function searchOther(arr, name){
	return arr.find(element => element.other == name);
}
*/

function convertJewishMonth(v){
    if(v<=0 || v>12){
        return "err";
    }else{
        return(jewishAndOtherMonths[v]);
    }
}