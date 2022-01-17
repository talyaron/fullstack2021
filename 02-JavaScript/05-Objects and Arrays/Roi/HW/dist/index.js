var fullStackClass = {
    lessons: [
        {
            title: 'Objects - advance',
            grades: []
        }
    ]
};
var students = ['moshe, ahron, miriam', 'dan', 'levi'];
function getRandomgGrade() {
    return Math.floor(Math.random() * 61 + 40);
}
function generateGrades(theClass, studentList) {
    studentList.forEach(function (student, i) {
        theClass.lessons[0].grades[i] = { name: student, grade: getRandomgGrade() };
    });
}
generateGrades(fullStackClass, students);
