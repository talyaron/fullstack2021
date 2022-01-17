;
var fullStackClass = {
    lessons: [{
            title: "Object-advanced",
            grades: []
        }],
    newLessonsFunc: function (newTitle, newStudents) {
        this.lessons.push({ title: newTitle, grades: [{}] });
        for (var j in newStudents) {
            this.lessons[this.lessons.length - 1].grades[j] = { name: newStudents[j], grade: randomization(100, 40) };
        }
    }
};
//*1. firs assginment
var students = ['moshe', 'shron', 'miriam', 'dan', 'levi'];
for (var i in students) {
    fullStackClass.lessons[0].grades[i] = { name: students[i], grades: randomization(100, 40) };
}
function randomization(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(fullStackClass);
//*2. create an internal function to the object
var newStudents = ['andrew', 'shimon', 'michael'];
fullStackClass.newLessonsFunc("Math", newStudents);
//at the end the object should look somthing like that:
// fullStackClass = {
//     lessons: [{title: 'Objects - advance', grades: [{name: 'moshe', grade: 45}, {name: 'ahron', grade: 67},]}],
// }
