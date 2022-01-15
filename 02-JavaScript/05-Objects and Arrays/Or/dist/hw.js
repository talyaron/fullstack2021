var fullStackClass = {
    lessons: [
        {
            title: 'Objects - advance',
            grades: []
        }
    ],
    creatLesson: function (newLesson, names) {
        this.lessons.push({ title: newLesson, grades: [] });
        for (var i in students) {
            this.lessons[1].grades[i] = { name: names[i], grade: randomGrade() };
        }
    }
};
var students = ['Or', 'Livnat', 'Refael', 'Inon', 'Efi'];
fullStackClass.creatLesson("math", students);
function randomGrade() {
    return Math.floor((Math.random() * 61) + 40);
}
function insertGrades(classroom, names) {
    names.forEach(function (name, i) {
        classroom.lessons[0].grades[i] = { name: name, grade: randomGrade() };
    });
}
insertGrades(fullStackClass, students);
console.dir(fullStackClass.lessons);
