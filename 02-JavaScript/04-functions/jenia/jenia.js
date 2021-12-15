
// targil 1
function BiggerNum(num1, num2) {
    if (num1 > num2) return num1;
    else return num2;
}

let w = BiggerNum(16, 9)
console.log(w);

// targil 2
let a = prompt('pick a number from 1-12', "<number goes here>");


function MonthTeller(num) {
    if (num == 1) return ('January');
    else if (num == 2) return ('Febuary');
    else if (num == 3) return ('March');
    else if (num == 4) return ('April');
    else if (num == 5) return ('May');
    else if (num == 6) return ('June');
    else if (num == 7) return ('July');
    else if (num == 8) return ('August');
    else if (num == 9) return ('September');
    else if (num == 10) return ('October');
    else if (num == 11) return ('November');
    else if (num == 12) return ('December');
    else return ("refrese and pick again");
}

console.log(MonthTeller(a));



// targil 3
let b = prompt('Year you was born', "<number goes here>");
let t = prompt('Year Today', "<number goes here>");
function AgeCal(yearBorn, YearToday) {
    return YearToday - yearBorn;
}
console.log(AgeCal(b,t));



// targil 4 my function - the function finds your "gen name" by checking your birth year"

function Gen(n1){
    if(n1<1890) return('didnt find the info too old');
    else if (n1>=1890 && n1<=1910) return('the lost generation');
    else if (n1>=1911 && n1<=1924) return('the greatest generation  ');
    else if (n1>=1925 && n1<=1945) return('the silent generation');
    else if (n1>=1946 && n1<=1964) return('baby boomers generation');
    else if (n1>=1965 && n1<=1979) return('xennials generation');
    else if (n1>=1980 && n1<=1994) return('millennials generation');
    else if (n1>=1995 && n1<=2012) return('gen z generation');
    else if (n1>=2013 && n1<=2025) return('gen alpha generation');
    else return('to be named');
}
console.log(Gen(b));
   










