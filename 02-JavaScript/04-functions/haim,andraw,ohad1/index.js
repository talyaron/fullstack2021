//מחשב הלוואה עם ריבית דריבית
function calc (loan,precentrage, years)
{
    for(let i=0;i<years;i++){
        loan=loan+(loan*(precentrage/100));
    }
    return loan
}

let q= calc(100,5,1);
console.log(q);
document.write(q);