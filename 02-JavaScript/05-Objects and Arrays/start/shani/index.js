const shani = {
    name: 'Shani',
    lastName: 'Rom',
    math: 70,
    hebrew: -100,
    art:80,
    passed:false

}

function studentsGrade(student) {
    if (student.passed) {
        console.log(`${student.name} ${student.lastName} grade in math is ${student.math} ,grade in hebrew is ${student.hebrew} , 
        grade in art is ${student.art} and passed!`)
    } else {
        console.log(`${student.name} ${student.lastName} grade in math is ${student.math} ,grade in hebrew is ${student.hebrew} , 
        grade in art is ${student.art}, and didnt pass`)
    }
};

studentsGrade(shani);
