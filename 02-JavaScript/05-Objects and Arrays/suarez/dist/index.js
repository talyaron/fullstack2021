var students = ["moshe", "ahron", "miriam", "dan", "levi"];
var fullStackClass = {
    lessons: [
        {
            title: "Objects - start",
            grades: []
        },
        {
            title: "Objects - advance",
            grades: []
        },
        {
            title: "Forms",
            grades: []
        },
    ],
    createRandomGrades: function (students) {
        this.lessons.forEach(function (lesson) {
            students.forEach(function (student) {
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
            title: "strategy",
            grades: []
        },
        {
            title: "scope",
            grades: []
        },
    ]
};
function createRandomGrades(classObj, students) {
    classObj.lessons.forEach(function (lesson) {
        students.forEach(function (student) {
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
console.log(resultsUX);
// console.log(resultsFS);
console.log(fullStackClass.createRandomGrades(students));
function renderLessons(classObj, domElement) {
    var html = "";
    classObj.lessons.forEach(function (lesson) {
        var lessonHTML = "<divclass='card'><h2 style='color: red;'>" + lesson.title + "</h2>";
        lesson.grades.forEach(function (student) {
            lessonHTML += "<p>" + student.name + ":  <span style='color: blue;'> " + student.grade + " </span></p>";
        });
        lessonHTML += "</div>";
        html += lessonHTML;
    });
    domElement.innerHTML = html;
}
var root = document.querySelector("#rootLessons");
renderLessons(fullStackClass, root);
function getRandomGrade(max, min) {
    if (max === void 0) { max = 100; }
    if (min === void 0) { min = 40; }
    var diffrence = max - min;
    return Math.round(Math.random() * diffrence + min);
}
