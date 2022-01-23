const ohad = {
    name: 'Ohad',
    lastName: 'Gur',
    Math: 90,
    English:80,
    Physics: 69,
    Sciences:80
}

const Dan = {
    name: 'dan',
    lastName: 'cohen',
    Math: 70,
    English:90,
    Physics: 88,
    Sciences:68
}
document.write(`${ohad.name} ${ohad.lastName} got ${ohad.Math} in math, ${ohad.English} in english, ${ohad.Physics} in physics and ${ohad.Sciences} in sciences.`);
console.log(`${ohad.name} ${ohad.lastName} got ${ohad.Math}in math, ${ohad.English} in english, ${ohad.Physics} in physics and ${ohad.Sciences} in sciences.`);

function StudentGrades(student) {
    console.log(`${student.name} ${student.lastName} got ${student.Math}in math, ${student.English} in english, ${student.Physics} in physics and ${student.Sciences} in sciences.`);
}
StudentGrades(ohad);
StudentGrades(Dan);