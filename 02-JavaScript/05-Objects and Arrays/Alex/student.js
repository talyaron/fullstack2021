const josh = {
    math: 80,
    english: 90,
    science: 85,
    cooking: 100,
    wood:87
}

// console.log(josh.math);

function studentGrades(student) {
if (student.math) {
    console.log (`${student.math}`)
} else {
    console.log (`${student.wood}`)
}
}

studentGrades(josh)