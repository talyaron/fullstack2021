var student = ['shir', 'moshe', 'miri', 'david', 'lea'];
var fullStackClass = {
    lessons: [
        {
            title: 'object - advanced',
            grades: []
        }
    ],
    newLesson: function (newTitle, studentList) {
        var _this = this;
        this.lessons.push({ title: newTitle, grades: [] });
        studentList.forEach(function (student, i) {
            _this.lessons[_this.lessons.length - 1].grades[i] = { name: student, grade: getRandomgGrade() };
        });
    }
};
function getRandomgGrade() {
    return Math.floor(Math.random() * 61) + 40;
}
function generateTheGrade(theClass, studentList) {
    studentList.forEach(function (student, i) {
        theClass.lessons[0].grades[i] = { name: student, grade: getRandomgGrade() };
    });
}
generateTheGrade(fullStackClass, student);
console.log(fullStackClass);
fullStackClass.newLesson("form", student);
