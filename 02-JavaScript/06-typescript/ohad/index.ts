function Avg(age1:number, age2:number ):string{
    let sum= 0, avg=0
    sum=age1+age2;
    avg= sum/2;
    return `The avg is ${avg}`;
}
let res= Avg(10,20);
console.log(res);