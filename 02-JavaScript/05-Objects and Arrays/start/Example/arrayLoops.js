// methods in array



//loops

// for (let i = 0; i<students.length; i++){
//     console.log(students[i])
// }

// in loop
// for(let i in students){
//     console.log(students[i])
// }
const students = [{ name: 'mira', grades: [100, 78, 43] }, { name: 'yoni', grades: [90, 89, 79, 76] }]
//of loop
for (let student of students) {
    console.log(student)
}

//arrow function (callback)
students.forEach(student => {
    const name = student.name;

    let sum = 0;
    const n = student.grades.length; //n = number of elelments

    student.grades.forEach(grade => {
        sum += grade;
    })
    const avarge = sum / n;

    console.log(`${name} has an avarge of ${avarge.toFixed(1)}`);
})

