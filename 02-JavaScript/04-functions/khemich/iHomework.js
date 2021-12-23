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

let e = Salary(200, 70)
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

const Revital = {
    firstname: 'Revital',
    lastname: 'Aharoni',
    history: 95,
    Math: 65,
    Hebrew: 99,

}

function tellmeabout(student) {
    return `${student.firstname}, ${student.lastname} got ${student.history} in history ${student.Math} in math and ${student.Hebrew} in hebrew`
}

console.log(tellmeabout(Revital));


const hebmonth = [`tishrei`, `heshvan`, `kislember`, `tevet`, `shvat`, `adar`, `nissan`, `iyar`, `sivan`, `tamuz`, `av`, `elul`];



function yebmonth(i) {
    if (typeof i !== 'number') {
        return `this is not a number`
    }
    if (i > 12 || i < 1)
        return `No please!`
    else
        return hebmonth[i - 1]
}
console.log(yebmonth(`h`));
// random bullshit
const Maria = {
    name: 'Maria',
    vegan: false,
    hobby: 'Boats',
    numberoflimbs: 4,
    otherfriends: ['gabadu', 'seniorR', 'susuman'],
}

const Alice = {
    name: "Alice",
    vegan: true,
    hobby: 'Pillow fighting',
    numberoflimbs: 4,
    otherfriends: ['bobo', 'philip', 'fatlip']
}

const Elen = {
    name: 'Elen',
    vegan: true,
    hobby: 'watching microwaves work',
    numberoflimbs: 3,
    otherfriends: ['linda', 'ema', 'samba'],
}

const Salim = {
    name: 'Salim',
    vegan: false,
    hobby: 'Drinking milk really fast',
    numberoflimbs: 2,
    otherfriends: ['daud', 'jerry', 'flavaslava'],
}

const Family = [Maria, Alice, Elen, Salim]

for (let i in Family) {
    console.log(Family[i].name);
}



// function whodat(Family) {
//     if (Family.vegan == true)
//         return `this is ${Family.name} , shes vegan,her hobby is ${Family.hobby} and her friends are ${Family.otherfriends}... ohhhh and she has ${Family.numberoflimbs} limbs`
//     else if ( Family.numberoflimbs>2 && Family.vegan==false)
//         return `this is ${Family.name} shes not vegan(phew)her hobby is ${Family.hobby} and her friends are ${Family.otherfriends}... she has ${Family.numberoflimbs} spectecular limbs `
//         if (Family.numberoflimbs==2)
//         return `this is ${Family.name} hes not vegan(at all) his hobby is ${Family.hobby} and hir friends are ${Family.otherfriends}... poor guy has only ${Family.numberoflimbs} limbs `
// }

// console.log(whodat(Maria));

function multi(a, b) {
    return a * b
}
console.log(multi(2, 2));

const multi2 = function (a, b) {
    return a * b
}

console.log(multi2(3, 7));

const multi3 = (a, b) => {
    return a * b
}

console.log(multi3(5, 5));


const singers = [`adele`, `maluma`, `fonzi`, `davidguetta`, `simon`]
//LOOP
// for (let i = 0;i<singers.length;i++){
//     console.log(singers[i]);

// }
 //IN LOOP
 // for(let i in singers){
//     console.log(singers[i]);
// }

//OF LOOP
// for(let singer of singers ){
//     console.log(singer);
// }

//EACH LOOP
singers.forEach(singer=> {
    console.log(singer);
});

const footballTeams = [
    { teamName: 'Macabi Tel-Aviv', place: 16 },
    { teamName: 'Beitar Jeruslam', place: 7 },
    { teamName: 'Hapoel Haifa', place: 5 },
    { teamName: 'Bnei-Sachnin', place: 6 }
];

console.log(footballTeams.slice(1,2));

footballTeams.forEach(footballTeam=>{
    console.log();
})
