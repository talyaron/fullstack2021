const Omri = {
    name: 'Omri',
    lastName: 'Aharonov',
    engScore: 88,
    mathScore: 90,
    hstScore: 75,
    verbalSkill: 100,
}

function studentGrades(student){
    console.log(`${student.name} ${student.lastName} grades are: English = ${student.engScore}, 
     Math = ${student.mathScore}, History = ${student.hstScore}, velbarl Skill = ${student.verbalSkill}`)
}

studentGrades(Omri)