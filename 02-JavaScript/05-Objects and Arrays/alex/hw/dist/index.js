var fullStackClass = {
    subjects: [
        {
            title: "Math",
            grades: [],
            func: function () {
                return (this.grades);
            }
        },
    ]
};
var students = ["moshe", "yoni", "ahron", "dan", "levi"];
var result = fullStackClass.subjects[0].grades;
var subject = fullStackClass.subjects[0].title;
var funky = fullStackClass.subjects[0].func();
function putNameInGrade() {
    for (var i = 0; i < students.length; i++) {
        result.unshift({ name: students[i], grade: getRandomGrade() });
    }
}
function getRandomGrade() {
    return Math.floor(Math.random() * (100 - 40) + 40);
}
console.log(subject, result, putNameInGrade());
console.log(funky);
