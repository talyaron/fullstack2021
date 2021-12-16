// question number 3
function age(year) {

    return 2021 - year
}

let a = age(1921)
console.log(a);

//quuestion number 1
function scale(num1, num2) {
    if (num1 > num2) {
        return num1
    }
    if (num2 > num1) {
        return num2
    }
    if (num1 == num2) {
        return 'BALANCE'
    }

}

let b = scale(14, 13);
console.log(b);


//question number 2

function month(number) {
    if (number == 1) {
        return 'january'
    }
    if (number == 2) {
        return 'febuary'
    }
    if (number == 3) {
        return 'march'
    }
    if (number == 4) {
        return 'april'
    }
    if (number == 5) {
        return 'may'
    }
    if (number == 6) {
        return 'june'
    }
    if (number == 7) {
        return 'july'
    }
    if (number == 8) {
        return 'august'
    }
    if (number == 9) {
        return 'september'
    }
    if (number == 10) {
        return 'october'
    }
    if (number == 11) {
        return 'november'
    }
    if (number == 12) {
        return 'december'
    }

}
let d = month(1)
console.log(d);

//question number 4

function Salary(hours, HourlyPay) {
    if (hours <= 8) {
        return hours * HourlyPay
    } else if (hours > 8 && hours <= 10) {
        return hours * HourlyPay + ((hours - 8) * 0.25 * HourlyPay)
    }
    if (hours > 10 && hours <= 12) {
        return hours * HourlyPay + ((hours - 8) * 0.25 * HourlyPay) + ((hours - 10) * 0.25 * HourlyPay)
    }
    if (hours > 12) {
        return hours * HourlyPay + ((hours - 8) * 0.25 * HourlyPay) + ((hours - 10) * 0.25 * HourlyPay) + ((hours - 12) * 0.25 * HourlyPay)
    }
}

let e = Salary(70, 350)
console.log(e);

function percentage(number, percentage) {
    return number * (percentage / 100)
}
let f = percentage(777, 2)
console.log(f);


const Moshe = {
    firstname: 'Moshe',
    lastname: "Chaim",
    History: 88,
    Math: 65,
    Hebrew: 79,
}

const Ginadi = {
    firstname: 'Ginadi',
    lastname: 'Gondor',
    history: 65,
    Math: 95,
    Hebrew: 77,
}

const Revital={
    firstname:'Revital',
    lastname:'Aharoni',
    history: 95,
    Math:65,
    Hebrew:99,

}

function tellmeabout(student){
    return  `${student.firstname}, ${student.lastname} got ${student.history} in history ${student.Math} in math and ${student.Hebrew} in hebrew`
}

console.log(tellmeabout(Revital));


