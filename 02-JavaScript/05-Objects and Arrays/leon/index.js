const leon ={
    name="leon",
    sport:90,
    english:80,
    math:40,
    history:70,
    goodstudent:false
}
const joe ={
    name="joe",
    goodstudent:true,
    sport:90,
    english:80,
    math:40,
    history:70,
}
function tellAboutTheStudent(student){
    if (student.goodstudent)
    { 
        console.log(`${student.name}got ${student[`math`]} in math and ${student.sport} in sport
    and ${student.math} in math, in history he got ${student.history} he is good student`)
}


else {
    console.log (`${student.name} got ${student[`math`]} in math and ${student.sport} in sport
    and ${student.math} in math, in history he got ${student.history} he is  not good student`)
}}




tellAboutTheStudent(leon)
tellAboutTheStudent(joe)