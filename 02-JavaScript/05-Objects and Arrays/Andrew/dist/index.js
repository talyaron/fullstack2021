var students = ['Moshe', 'Ahron', 'Miriam', 'Dan', 'Levi'];
//create an internal function to the object
var fullStackClass = {
    lessons: [
        {
            title: 'Objects - advance',
            grades: []
        }
    ],
    generateNewLesson: function (newTitle, studentList) {
        var _this = this;
        this.lessons.push({ title: newTitle, grades: [] });
        studentList.forEach(function (student, i) {
            _this.lessons.slice(-1)[0].grades[i] = { name: student, grade: getRandomgGrade() };
        });
    }
};
//create a function which genrate random grades between 40 and 100 for all students (make the score an integer).
function getRandomgGrade() {
    return Math.floor(Math.random() * 61 + 40);
}
function generateGrades(theClass, studentList) {
    studentList.forEach(function (student, i) {
        theClass.lessons[0].grades[i] = { name: student, grade: getRandomgGrade() };
    });
}
generateGrades(fullStackClass, students);
//למי שמשעמם שיעשה את זה גם בDOM
function Sumbit(ev) {
    ev.preventDefault();
    var input = document.querySelector('#input').value;
    fullStackClass.generateNewLesson(input, students);
    console.log(fullStackClass);
    var newDiv = document.createElement("span");
    var startDiv = document.querySelector("#first class");
    document.body.insertBefore(newDiv, startDiv);
    var text = "";
    for (var i = 0; i < fullStackClass.lessons.slice(-1)[0].grades.length; i++) {
        text += "<div class=\"class__grade\">" + fullStackClass.lessons.slice(-1)[0].grades[i].name + ": " + fullStackClass.lessons.slice(-1)[0].grades[i].grade + "</div> ";
    }
    var newClass = "<div class=\"class\">\n    <h2 class=\"class__title\">Lesson: " + fullStackClass.lessons.slice(-1)[0].title + "</h2>\n    <div class=\"class__grades\">\n        " + text + "\n    </div>\n    </div>";
    document.querySelector("span").outerHTML = "" + newClass;
}
//at the end the object should look somthing like that:
// fullStackClass = {
//     lessons: [{
//         title: 'Objects - advance',
//         grades: [
//             {
//                 name: 'moshe',
//                 grade: 45
//             },
//             {
//                 name: 'ahron',
//                 grade: 67
//             },
//             {
//                 name: 'miriam',
//                 grade: 78
//             },
//             {
//                 name: 'dan',
//                 grade: 45
//             },
//             {
//                 name: 'levi',
//                 grade: 45
//             }
//         ]
//     }
//     ]
// }
//create an internal function to the object
