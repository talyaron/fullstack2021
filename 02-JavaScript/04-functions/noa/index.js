//define
function bmi(height, weight) {
    return weight / (height * height)
};


function bmiMeaning(bmi) {

    if (bmi > 18 && bmi <= 25) {
        return (bmi + ' תקין')
    }

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
