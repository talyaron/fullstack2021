//exercise 1

function max(a,b){
    if (a>b) 
        return a;
    else    
        return b;
}

x = max(20,5)

console.log( `${x} is the larger number`);

//exercise 2

//Number=window.prompt("Input the number", "0");
console.log(month(Number));

function month(a){
    if (a==1)
        return "its January";
    else if (a==2)
        return "February";
    else if (a==3)
        return "March";
    else if (a==4)
        return "April";
    else if (a==5)
        return "May";
    else if (a==6)
        return "June";
    else if (a==7)
        return "July";
    else if (a==8)
        return "August";
    else if (a==9)
        return "September";
    else if (a==10)
        return "October";
    else if (a==11)
        return "November";
    else  
        return "December";
}

//exercise 3

function age(thisYear, bornYear){
    return thisYear-bornYear;
}

let q = age(2021,1997);

console.log(`Age is ${q}`);


//exercise 4 
//i made a function that gets how many hours since i last slept and returns if its okat to sleep now

Hours=window.prompt("Input the number of hours since youve woken up", "0");
console.log(sleep(Hours));

function sleep(zzz){
    if (zzz<3)
        return (`Hell no, ${zzz} hours ago you woke up`);
    else if (zzz<6)
        return ("Maybe like half an hour nap");
    else if (zzz<9)
        return("Take like an hour tops nap");
    else if (zzz<12)
        return("Okay go to bed you earned it");
    else
        return("Damn you deserve to hibernate");

}


