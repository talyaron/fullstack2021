const newStudent = {
name : "etan",
lastName : "heyman",
}
const grades = {
hebrew : 70,
math : 80,
art : 65,
history : 85,
web : 60,
}


function reportCard(newStudent){

    console.log(`${newStudent.name} ${newStudent.lastName}'s report card`)
    console.log(`${grades}`)
    console.log(`You've passed this year`)

}
reportCard(newStudent);
