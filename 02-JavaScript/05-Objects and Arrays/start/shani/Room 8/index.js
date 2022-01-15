
i=window.prompt("Choose a number")


const months=["Tishrai", "Heshvan", "Kislev","Tevet","Shvat","Adar","Nisan","Iyar","Sivan","Tammuz","Av","Elul","Error month not found"]

 function convertMonth(i){
     if(i<=1){
         return months[0]
     
        } 
    else if (i==2){
         return months[1]
     }
     else if (i==3){
        return months[2]
    }
    else if (i==4){
        return months[3]
    }
    else if (i==5){
        return months[4]
    }
    else if (i==6){
        return months[5]
    }
    else if (i==7){
        return months[6]
    }
    else if (i==8){
        return months[7]
    }
    else if (i==9){
        return months[8]
    }
    else if (i==10){
        return months[9]
    }
    else if (i==11){
        return months[10]
    }
    else if (i==12){
        return months[11]
    }
    else{
        alert(months[12])
    }


   }

 console.log(convertMonth(i))