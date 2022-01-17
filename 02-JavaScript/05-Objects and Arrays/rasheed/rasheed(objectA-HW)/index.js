;
var students = ['Oren ', 'Sami ', 'Noam ', 'Mark ', 'Steve'];
var fullStackClass = {
    lessons: [{
            title: 'Objects - Advanced',
            grades: []
        }],
    generateNewLessonsObject: function (newTitle, studentList) {
        var _this = this;
        this.lessons.push({ title: newTitle, grades: [] });
        studentList.forEach(function (student, i) {
            _this.lessons.slice(-1)[0].grades[i] = { name: student, grade: getRandomGrade() };
        });
    }
};
function getRandomGrade() {
    return Math.floor(Math.random() * (100 - 40 + 1)) + 40;
}
function generateGrades(theClass, studentList) {
    studentList.forEach(function (student, i) {
        theClass.lessons[0].grades[i] = { name: student, grade: getRandomGrade() };
    });
}
generateGrades(fullStackClass, students);
console.log(fullStackClass);
