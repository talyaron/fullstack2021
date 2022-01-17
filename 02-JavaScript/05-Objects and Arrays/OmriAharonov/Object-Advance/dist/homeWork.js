var fullStackClass = {
    lessons: [
        {
            title: 'Objects - advance',
            grades: []
        },
    ],
    createLesson: function (newTitle, studentList) {
        var grades = this.lessons.slice(-1);
        for (var i = 0; i < studentList.length; i++) {
            grades[i] = { name: studentList[i], grade: getRnadomnNumber() };
        }
        this.lessons.push({ title: newTitle, grades: grades });
    }
};
//create a function which genrate random grades between 40 and 100 for all students (make the score an integer).
var students = ['Moshe', 'Aharon', 'Miriam', 'Dan', 'Levi'];
var getRnadomnNumber = function () {
    return Math.floor((Math.random() * (100 - 40)) + 40);
};
for (var i = 0; i < students.length; i++) {
    fullStackClass.lessons[0].grades[i] = { name: students[i], grade: getRnadomnNumber() };
}
console.log(fullStackClass);
//create an internal function to the object
fullStackClass.createLesson('SCSS', students);
fullStackClass.createLesson('Biology', students);
console.log(fullStackClass);
