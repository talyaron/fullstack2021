//create an internal function to the object
var students = ['moshe', 'ahron', 'miriam', 'dan', 'levi'];
var fullStackClass = {
    lessons: [
        {
            title: 'Objects - advance',
            grades: []
        }
    ],
    newLesson: function (newTitle, student) {
        this.lessons.push({ title: newTitle, grades: [] });
        for (var i = 0; i < students.length; i++) {
            this.lessons.slice(-1)[0].grades[i] = { name: student[i], grade: getRandomgGrade() };
        }
        return 'newLesson()';
    }
};
fullStackClass.newLesson("DOM manipulation", students);
console.log(fullStackClass);
//create a function which genrate random grades between 40 and 100 for all students (make the score an integer).
function getRandomgGrade() {
    return Math.floor(Math.random() * (100 - 40 + 1)) + 40;
}
//console.log(getRandomgGrade())
function creatGrades(fullStack, student) {
    for (var i = 0; i < students.length; i++) {
        fullStack.lessons[0].grades[i] = { name: student[i], grade: getRandomgGrade() };
    }
    return 'fullStack.lessons[0].grades';
}
creatGrades(fullStackClass, students);
