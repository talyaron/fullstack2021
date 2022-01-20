;
var students = ['tamir', 'shron', 'nisan', 'ariel', 'itai'];
var fulstackClass = {
    lessons: [
        {
            title: 'objects-advance',
            grades: []
        }
    ],
    newLesson: function (titleNew, studentNames) {
        this.lessons.push({ title: titleNew, grades: [] });
        for (var i in studentNames) {
            this.lessons[this.lessons.length - 1].grades[i] = { name: studentNames[i], grade: RandomGrade(40, 100) };
        }
    }
};
for (var i in students) {
    fulstackClass.lessons[0].grades[i] = { name: students[i], grade: RandomGrade(40, 100) };
}
function RandomGrade(minGrade, maxGrade) {
    return Math.floor(Math.random() * (maxGrade - minGrade + 1) + minGrade);
}
console.log(fulstackClass);
fulstackClass.newLesson("sport", students);
