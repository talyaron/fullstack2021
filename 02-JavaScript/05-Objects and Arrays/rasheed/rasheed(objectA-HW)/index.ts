interface Class {
    lessons: Array<{
        title: string,
        grades: Array<any>
    }>
    generateNewLessonsObject(string, Array),
};

const students: string[] = ['Oren ', 'Sami ', 'Noam ', 'Mark ', 'Steve'];

let fullStackClass: Class = {
    lessons:
        [{
            title: 'Objects - Advanced',
            grades: []

        }],
    generateNewLessonsObject(newTitle, studentList) {
        this.lessons.push({ title: newTitle, grades: [] });
        studentList.forEach((student, i) => {
            this.lessons.slice(-1)[0].grades[i] = { name: student, grade: getRandomGrade() }
        });
    }
}

function getRandomGrade() {
    return Math.floor(Math.random() * (100 - 40 + 1)) + 40;
}

function generateGrades(theClass, studentList) {
    studentList.forEach((student, i) => {
        theClass.lessons[0].grades[i] = { name: student, grade: getRandomGrade() }
    });
}
generateGrades(fullStackClass, students);
console.log(fullStackClass);












