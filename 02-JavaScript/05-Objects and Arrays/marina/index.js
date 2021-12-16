
const dori = {
    name: 'Dori',
    lastName: 'Ziv',
    math: 90,
    physic: 95,
    biology: 93,
    english: 100
}


console.log(dori.name);
console.log(dori['biology']);

function tellAboutTheStudent(student) {
    if (student.physic > 93) {
        console.log(`${student.name} ${student.lastName} have  ${student.physic}  on physic`)
    } else if (student.test<=80) {
        console.log(`${student.name} ${student.lastName} have ${student.math} on math`)
    } else 
    console.log(`${student.name} ${student.lastName} have ${student.test} passed`)
}

tellAboutTheStudent(dori);