var showGrades = document.querySelector('.main-show');
var newTitle = document.getElementById('input');
var listAverage = document.getElementById('listAverage');
var fullStackClass = {
    lessons: [
        {
            title: 'Objects - advance',
            grades: []
        }
    ],
    createClass: function (titleName) {
        this.lessons.push({ title: titleName, grades: [] });
        for (var i = 0; i < students.length; i++) {
            this.lessons[this.lessons.length - 1].grades[i] = { student: students[i], grade: randomNumber() };
        }
    }
};
// ------------------------------------------- //
var students = ['Ido', 'Tamir', 'Bar', 'Sean', 'Moshe', 'Ben'];
function creatGrades(full, names) {
    for (var i = 0; i < students.length; i++) {
        full.lessons[0].grades[i] = { name: names[i], grade: randomNumber() };
        // full.lessons[0].grades.push({name:names[i] , grade:randomNumber()});
    }
    // return full;
}
creatGrades(fullStackClass, students);
console.log(fullStackClass.lessons);
fullStackClass.createClass("DOM");
function randomNumber() {
    return Math.round(Math.random() * 60 + 40);
}
function displayGrades(ev) {
    ev.preventDefault();
    var newClass;
    for (var _i = 0, _a = ev.target; _i < _a.length; _i++) {
        var field = _a[_i];
        if (field.name !== "submit") {
            if (field.value !== " ") {
                field.name = field.value;
                newClass = field.name;
                fullStackClass.createClass(newClass);
            }
        }
    }
    creatPage(fullStackClass.lessons[fullStackClass.lessons.length - 1], students);
}
function creatPage(object, studentList) {
    var details = "<h3>Class : " + object.title + "<h3/>";
    var sum = 0;
    for (var i = 0; i < studentList.length; i++) {
        details += "<p> NAME: " + object.grades[i].student + " ,  GRADE: " + object.grades[i].grade + " <p/>";
        var grade = parseInt("" + object.grades[i].grade, 10);
        sum = sum + grade;
    }
    var average = sum / students.length;
    // console.log(average);
    details += "<h4> The avarage is : " + average + " <h4/>";
    showGrades.innerHTML = details;
    var list = "<h3>above/below average in " + object.title + ": <h3/>";
    for (var i = 0; i < studentList.length; i++) {
        var grade = parseInt("" + object.grades[i].grade, 10);
        if (grade > average) {
            list += "<p> " + object.grades[i].student + " with " + object.grades[i].grade + " , is above average<p/>";
        }
        else if (grade < average) {
            list += "<p> " + object.grades[i].student + " with " + object.grades[i].grade + ", is below average<p/>";
        }
    }
    console.log(list);
    listAverage.innerHTML = list;
}
