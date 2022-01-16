var fullStackClass = {
    lessons: [
        {
            title: 'Objects - advance',
            grades: []
        },
    ],
    createLesson: function (newTitle) {
        this.lessons.push({ title: newTitle, grades: [] });
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
console.log(fullStackClass.lessons[0].grades);
//create an internal function to the object
fullStackClass.createLesson('SCSS');
console.log(fullStackClass);
//https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/
