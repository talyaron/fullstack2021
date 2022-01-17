var fullStackClass = {
    lessons: [
        {
            title: 'Objects - advance',
            grades: []
        }
    ]
};
var students = ['moshe, ahron, miriam', 'dan', 'levi'];
var grades = RandomGradeGenerator(40, 100);
function RandomGradeGeneratorcreateR(minGrade, maxGrade) {
    return Mathfloor(Math.random()) * (maxGrade - minGrade) + minGrade + 1;
}
