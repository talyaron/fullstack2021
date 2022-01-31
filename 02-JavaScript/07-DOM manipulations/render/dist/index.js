var student = ['no', 'se', 'daniel', 'yair', 'yonatan', 'nonoyos'];
var fullstack = {
    lessons: [{
            title: 'object - advenced',
            grades: []
        }],
    putNameAndGrades: function (students) {
        this.lessons.forEach(function (lesson) {
            students.forEach(function (student) {
                if (student === 'no') {
                    lesson.grades.push({ name: student, grade: 100 });
                }
                else if (student === 'se') {
                    lesson.grades.push({ name: student, grade: 95 });
                }
                else if (student === 'daniel') {
                    lesson.grades.push({ name: student, grade: 40 });
                }
                else if (student === 'yair') {
                    lesson.grades.push({ name: student, grade: 60 });
                }
                else if (student === 'yonatan') {
                    lesson.grades.push({ name: student, grade: 50 });
                }
                else if (student === 'nonoyos') {
                    lesson.grades.push({ name: student, grade: 20 });
                }
            });
        });
        return this;
    },
    renderFamily: function (domelement) {
        var html = '';
        this.lessons.forEach(function (lesson) {
            var lessonsHTML = "<div class = 'card'> <h1>" + lesson.title + "</h1>";
            var familyHTML = "";
            lesson.grades.forEach(function (someone) {
                familyHTML += "<p>" + someone.name + " : " + someone.grade + "  ";
            });
            lessonsHTML += familyHTML;
            lessonsHTML += "</div>";
            html += lessonsHTML;
        });
        domelement.innerHTML = html;
    }
};
var root = document.getElementById('root');
// fullstack.putNameAndGrades(fullstack ,student);
console.log(fullstack.renderFamily(fullstack, root));
