var students = ["Moshe", "yamkale", "suzi", "randomsadasdas"];
var fullStackClass = {
    lessons: [
        {
            title: 'Objects - advance',
            grades: []
        }
    ],
    generateNewLesson: function (newtitle, studentlist) {
        var _this = this;
        this.lessons.push({ title: newtitle, grades: [] });
        studentlist.forEach(function (student, i) {
            _this.lessons.slice(-1)[0].grades[i] = { name: student, grade: getRandomgGrade() };
        });
    }
};
//create a function which genrate random grades between 40 and 100 for all students (make the score an integer).
//at the end the object should look somthing like that:
function getRandomgGrade() {
    return Math.floor(Math.random() * 61 + 40);
}
function generateGrades(theClass, studentlist) {
    studentlist.forEach(function (student, i) {
        theClass.lessons[0].grades[i] = { name: student, grade: getRandomgGrade() };
    });
}
fullStackClass = {
    lessons: [{
            title: 'Objects - advance',
            grades: [
                {
                    name: 'moshe',
                    grade: 45
                },
                {
                    name: 'ahron',
                    grade: 67
                },
                {
                    name: 'miriam',
                    grade: 78
                },
                {
                    name: 'dan',
                    grade: 45
                },
                {
                    name: 'levi',
                    grade: 45
                }
            ]
        }
    ]
};
//create an internal function to the object
