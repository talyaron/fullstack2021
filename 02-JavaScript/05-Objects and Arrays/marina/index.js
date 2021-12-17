
const dori = {
    name: 'Dori',
    lastName: 'Ziv',
    math: 45,
    physic: 95,
    biology: 93,
    english: 100
}


console.log(dori.name);
console.log(dori['biology']);

function tellAboutTheStudent(student) {
    if (student.physic > 93) {
        console.log(`${student.name} ${student.lastName} have  ${student.physic}  on physic`)
    } 
    
    if (student.math <= 80) {
        console.log(`${student.name} ${student.lastName} has ${student.math} on math`)
    } else {
        console.log(`${student.name} ${student.lastName} have ${student.math} on math`)
    }
}

tellAboutTheStudent(dori);