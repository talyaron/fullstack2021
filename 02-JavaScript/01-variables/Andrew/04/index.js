let a,b,c,d,e;

a = window.prompt("Enter the 1st number:");
b = window.prompt("Enter the 2nd number:");
c = window.prompt("Enter the 3rd number:");
d = window.prompt("Enter the 4th number:");
e = window.prompt("Enter the 5th number:");

if(a > b && a > c && a > d && a > e){
    console.log(a);
}
else if(b > a && b > c && b > d && b > e){
    console.log(b);
}
else if(c > b && c > a && c > d && c > e){
    console.log(c);
}
else if(d > b && d > c && d > a && d > e){
    console.log(d);
}
else if(e > b && e > c && e > d && e > a){
    console.log(e);
}