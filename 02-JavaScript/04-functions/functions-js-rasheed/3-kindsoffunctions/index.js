let a=3;
let b=4;
/////regular function

function sum(a,b){
return (a*b);
}
console.log(sum(a,b))

console.log("-------------------")

//anonymous function

const sum2 = function(sum2){
    return(a*b);
}
console.log(sum2(a,b))

console.log("----------------")

//arrow function

const sum3 = (a,b)=>{
    return(a*b);
}

console.log(sum3(a,b))
