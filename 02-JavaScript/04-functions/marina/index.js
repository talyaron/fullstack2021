


function bmi(massa, height){
    let result = (massa / (height * height));
    return result;
}

let q = bmi (43, 1.5)
console.log(q);

if(q<= 18.5){
    console.log('under weight');

}

if (q >= 18.5 && q < 25){
    console.log('normal weight')
}

if (q >= 25 && q < 30){
    console.log('class 1');
}

if (q >= 30 && q < 35){
    console.log('class 2');
}

if (q >= 35 && q < 40){
    console.log('class 3');
}

if (q >= 45){
    console.log('class 4');
}








function calcInterest(loan, percentage, years){
    let totalSun = loan;

    for(let i = 0; i < 10; i ++ ){
        totalSun = totalSun + (totalSun * percentage);
    }

}

return totalSun

let intrest = calcInterest( 100, 5, 10);
console.log(intrest);










