var students = ['moshe', 'ahron', 'miriam', 'dan', 'levi'];
var fullStackClass = {
    lessons: [
        {
            title: 'Objects - start',
            grades: []
        },
        {
            title: 'Objects - advance',
            grades: []
        },
        {
            title: 'Forms',
            grades: []
        }
    ],
    createRandomGrades: function (students) {
        this.lessons.forEach(function (lesson) {
            students.forEach(function (student) {
                //get random score
                var score = getRandomGrade();
                lesson.grades.push({ name: student, grade: score });
            });
        });
        return this;
    }
};
var UXClass = {
    lessons: [
        {
            title: 'strategy',
            grades: []
        },
        {
            title: 'scope',
            grades: []
        }
    ]
};
function createRandomGrades(classObj, students) {
    classObj.lessons.forEach(function (lesson) {
        students.forEach(function (student) {
            //get random score
            var score = getRandomGrade();
            lesson.grades.push({ name: student, grade: score });
        });
    });
    return classObj;
}
function getRandomNumber() {
    return Math.random() * 200;
}
var resultsUX = createRandomGrades(UXClass, students);
// const resultsFS:Class = createRandomGrades(fullStackClass, students);
console.log(resultsUX);
// console.log(resultsFS);
console.log(fullStackClass.createRandomGrades(students));
function renderLessons(classObj, domElement) {
    var html = '';
    classObj.lessons.forEach(function (lesson) {
        var lessonHTML = "<div class='card'><h2>" + lesson.title + "</h2>";
        lesson.grades.forEach(function (student) {
            lessonHTML += "<p>" + student.name + ": " + student.grade + "</p>";
        });
        lessonHTML += '</div>';
        html += lessonHTML;
    });
    domElement.innerHTML = html;
}
var root = document.querySelector('#rootLessons');
renderLessons(fullStackClass, root);
function getRandomGrade(max, min) {
    if (max === void 0) { max = 100; }
    if (min === void 0) { min = 40; }
    var diffrence = max - min;
    return Math.round((Math.random() * diffrence) + min);
}
//create a function which genrate random grades between 40 and 100 for all students (make the score an integer).
//at the end the object should look somthing like that:
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
