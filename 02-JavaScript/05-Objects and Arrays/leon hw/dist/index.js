var students = ['Moshe', 'Ahron', 'Miriam', 'Dan', 'Levi'];
var fullStackClass = {
    lessons: [
        {
            title: 'Objects - advance',
            grades: []
        }
    ],
    Lesson: function (newTitle, studentList) {
        var _this = this;
        this.lessons.push({ title: newTitle, grades: [] });
        studentList.forEach(function (student, i) {
            _this.lessons.slice(-1)[0].grades[i] = { name: student, grade: RandomGrade() };
        });
    }
};
function RandomGrade() {
    return Math.floor(Math.random() * 60) + 40;
}
function generateTheGrade(theClass, studentList) {
    studentList.forEach(function (student, i) {
        theClass.lessons[0].grades[i] = { name: student, grade: RandomGrade() };
    });
}
generateTheGrade(fullStackClass, students);
console.log(fullStackClass);
fullStackClass.Lesson("form", students);
