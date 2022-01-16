;
var fulstackClass = {
    lessons: [
        {
            title: 'objects-advance',
            grades: []
        }
    ],
    "const": students = ['moshe', 'shron', 'miriam', 'dan', 'levi'],
    newLesson: function (titleNew, studentNames) {
        this.lessons.push({ title: titleNew, grades: [] });
        for (var i in studentNames) {
            this.lessons[this.lessons.length - 1].grades[i] = { name: studentNames[i], grade: createRandomGradeFunc(40, 100) };
        }
    }
};
for (var i in students) {
    fulstackClass.lessons[0].grades[i] = { name: students[i], grade: createRandomGradeFunc(40, 100) };
}
function createRandomGradeFunc(minGrade, maxGrade) {
    return Math.floor(Math.random() * (maxGrade - minGrade + 1) + minGrade);
}
console.log(fulstackClass);
fulstackClass.newLesson("math", students);
