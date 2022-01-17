;
var fullStackClass = {
    lessons: [{
            title: "Object-advanced",
            grades: []
        }],
    NewObj: function (newTitle, newStudents) {
        this.lessons.push({ title: newTitle, grades: [{}] });
        for (var j in newStudents) {
            this.lessons[this.lessons.length - 1].grades[j] = { name: newStudents[j], grade: GetRandomGrade(100, 40) };
        }
    }
};
fullStackClass.NewObj();
var students = ['moshe', 'shron', 'miriam', 'dan', 'levi'];
function GetRandomGrade(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function NewGrades(ClassName, nameStudents) {
    for (var i in nameStudents) {
        ClassName.lessons[0].grades[i] = { name: nameStudents[i], grade: GetRandomGrade(40, 100)
        };
    }
}
NewGrades(fullStackClass, students);
console.log(fullStackClass);
fullStackClass.NewObj("History", students);
