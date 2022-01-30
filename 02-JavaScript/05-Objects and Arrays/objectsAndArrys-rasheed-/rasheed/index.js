const student = {
    firstName: "Rasheed",
    lastName: "Jaber",
    mathGrade: "A+",
    englishGrad: "B+",
    sportGrad: "c+",
    totalGrads: "B-",
    didPass: true


}

const secandstudent = {
    firstName: "Martine",
    lastName: "alison",
    mathGrade: "c+",
    englishGrad: "a+",
    sportGrad: "c+",
    totalGrads: "B-",
    didPass: true
}

const thirdtudent = {
    firstName: "Mark",
    lastName: "night",
    mathGrade: "f+",
    englishGrad: "c+",
    sportGrad: "f+",
    totalGrads: "d-",
    didPass: false
}

function tellStudent(student) {
    if (student.didPass) {
        console.log(`${student.firstName} ${student.lastName} MathGrade is ${student.mathGrade} ,EnglishGrade is ${student.englishGrad} and SportGrade is ${student.sportGrad} so the total Grads sum is ${student.totalGrads} ${student.firstName} has passed`)
    }
    else {
        console.log(`${student.firstName} ${student.lastName} MathGrade is ${student.mathGrade} ,EnglishGrade is ${student.englishGrad} and SportGrade is ${student.sportGrad} so the total Grads sum is ${student.totalGrads} ${student.firstName} did'nt pass`)
    }
}

tellStudent(student)
tellStudent(secandstudent)
tellStudent(thirdtudent)



///////////////////////////////////////////


let input = window.prompt("Enter the Number of the Month");

function monthName(input) {

    let months = ["תשרי", "חשוון", "כסלו", "טבת", "שבט" ,"אדר א", "אדר", "הסמוך" ,"לניסן" ,"ניסן" ,"אייר", "סיוון", "תמוז" ,"אב" ,"אלל"]


    let output = months[input-1];
    return output;

}

if (input <= 0 || input >= 15) {
    alert("Error! Number Is Undifined")
}

else {

    alert("The Month is " + monthName(input));

}
