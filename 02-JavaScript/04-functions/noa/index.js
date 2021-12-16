//define
function bmi(height, weight) {
    return weight / (height * height)
};

function bmi(height, weight) {
    return weight / (height * height)
}
q = bmi(1.59, 52)

q = bmi(1.8, 90)

function bmiMeaning(bmi) {

    if (bmi > 18 && bmi <= 25) {
        return (bmi + ' תקין')
    }

if (q > 18 && q <= 25) {
    console.log(q, +' תקין')
}

else if (q <= 18) {
    console.log(q + 'תת משקל')
}

if (q > 25) {
    console.log(`${q} עודף משקל`)
}



function calcIntrest(loan, precentage, years) {
    let sum = loan;
    for (i = o; i <= year; i++) {
        sum = loan + ((precentage / 100) * loan)
    }
    return sum
}

let x = calcIntrest(100, 5, 10);
console.log(x);

    else if (bmi <= 18) {
        return (bmi + 'תת משקל')
    }

    if (bmi > 25) {
        return (`${bmi} עודף משקל`)
    }
}

//invoke
let q = bmi(1.59, 52)
console.log(q);
let meaning = bmiMeaning(q);
console.log(meaning);


q = bmi(1.8, 90);
console.log(q);
meaning = bmiMeaning(q);
console.log(meaning);

function calcIntrest(loan, precentage, years){
    return totalSum
}
