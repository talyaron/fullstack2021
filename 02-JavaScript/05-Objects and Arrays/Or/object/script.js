const or = {
    name: 'Or',
    lastName: 'Avramashvili',
    english: 100,
    math: 80,
    gmara: 95,
    sport: 95,
    tanach: 90
}
const refael = {
    name: 'Refael',
    lastName: 'Avramashvili',
    english: 90,
    math: 100,
    gmara: 95,
    sport: 100,
    tanach: 95
}
function grades(student){
console.log(`Those are ${student.name} ${student.lastName} grades at the following classes: english:${student.english}, math:${student.math}, gmara:${student.gmara}, sport:${student.sport}, tanach:${student.tanach}`)
}
grades(or);
grades(refael);