// const student = {
//     name: 'yoel',
//     lastName: 'kraitman',
//     mathematics: 95,
//     english: 85,
//     sport: 49,
//     biologia: 79,
//     hebrow: 81,
// }

// function avg(biologia , english , hebrow, sport ,mathematics){
//     let sum = (biologia + english +hebrow + sport + mathematics)/5;

//     return sum;
// }

// console.log(student.name);
// console.log(student.lastName);
// console.log(student.biologia);
// console.log(student.english);
// console.log(student.hebrow);
// console.log(student.sport);
// console.log(student.mathematics);

// console.log(avg(student.biologia , student.english , student.hebrow , student.sport , student.mathematics));

num = window.prompt("enter month");

function month(num) {
    const arr = ['' , 'Tishrei', 'Cheshvan', 'Kislev', 'Tevet', 'Shevat', 'Adar ', 'Nisan ', 'Iyar	', 'Sivan', 'Tammuz', 'Av', 'Elul'];

    return (arr[num]);
}

alert(month(num));
