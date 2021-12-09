var x=15;
var y=10;
var z=5;

x= y+z;
y= x-z;
z= x-y;

console.log(x); console.log(y+z);
console.log(y); console.log(x-z);
console.log(z); console.log(x-y);


function changeColor(ev){
    document.body.style.background = ev.target.value;
}

