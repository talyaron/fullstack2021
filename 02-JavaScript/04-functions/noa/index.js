
function bmi(height, weight) {
    return weight / (height * height)
}
q = bmi(1.59, 52)

q = bmi(1.8, 90)


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

