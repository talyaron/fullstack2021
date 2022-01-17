var studs = ['john', 'priscilia', 'chloe', 'dan'];
var fullStackClass = {
    lessons: [
        {
            title: 'Objects - advance',
            grades: []
        }
    ],
    newLesson: function (newTitle, stud) {
        this.lessons.push({ title: newTitle, grades: [] });
        for (var i = 0; i < studs.length; i++) {
            this.lessons.slice(-1)[0].grades[i] = { name: stud[i], grade: getGrade() };
        }
        return 'newLesson()';
    }
};
function getGrade() {
    return Math.floor(Math.random() * (100 - 40 + 1)) + 40;
}
fullStackClass.newLesson("DOM manipulation", studs);
console.log(fullStackClass);
