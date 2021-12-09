var x=15;
var y=10;
var z=5;

x= y+z;
y= x-z;
z= x-y;

console.log(x);
console.log(y);
console.log(z);

function changeColor(ev){
    document.body.style.background = ev.target.value;
}

