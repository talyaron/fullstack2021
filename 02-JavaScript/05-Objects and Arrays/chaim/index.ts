interface Class {
    lessons: Array<{
        title: string,
        grades: Array<any>
    }>
    createanewlesson(string, Array):void
}
const students = ['chaim', 'meir', 'yakov', 'yosi', 'menachem'];


const fullStackClass: Class = {
    lessons: [
        {
            title: 'Objects - advance',
            grades: []
        }
    ],
    createanewlesson(newTitle, studentList) {
        this.lessons.push({ title: newTitle, grades: [] });
        studentList.forEach((student, i) => {
            this.lessons(-1)[0].grades[i] = { name: student, grade: RandomgGrade() }
        })
    }
}
console.log(fullStackClass)

function RandomgGrade() {
    return Math.floor(Math.random() * 61 + 40);
}
function generateGrades(theClass, studentList) {
    studentList.forEach((student, i) => {
        theClass.lessons[0].grades[i] = { name: student, grade: RandomgGrade() }
    });
}


generateGrades(fullStackClass, students);
console.dir(fullStackClass)