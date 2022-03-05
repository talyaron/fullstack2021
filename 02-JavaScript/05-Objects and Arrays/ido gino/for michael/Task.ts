interface Class {
    lessons: Array<{
        title: string
        grades: Array<any>
    }>
}


let fullStackClass: any = {
    lessons: [
        {
            title: 'Objects - advance',
            grades: []
        }
        //{
        //     title:'DOM',
        //     grades:[]
        //}
    ],
    createClass(titleName) {
        this.lessons.push({ title: titleName, grades: [] })
        for (let i = 0; i < students.length; i++) {
            this.lessons[this.lessons.length-1].grades[i] = {student:students[i], grade: randomNumber() };
        }
    }
}

const students = ['Ido', 'Tamir', 'Neta', 'Sahar', 'Didi', 'Ben']

function creatGrades(full, names) {
    for (let i = 0; i < students.length; i++) {
        full.lessons[0].grades[i] = { name: names[i], grade: randomNumber() };
        // full.lessons[0].grades.push({name:names[i] , grade:randomNumber()});
    }
    return full;
}
creatGrades(fullStackClass, students)

function randomNumber() {
    return Math.round(Math.random() * 60 + 40);
}

console.log(fullStackClass);

fullStackClass.createClass("DOM");


