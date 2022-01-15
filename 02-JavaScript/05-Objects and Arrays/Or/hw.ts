interface Class {
    lessons: Array<{
        title: string,
        grades: Array<any>
    }>
    creatLesson(string,array):void
}


let fullStackClass: Class = {
    lessons: [
        {
            title: 'Objects - advance',
            grades: []
        }
    ],
    creatLesson(newLesson,names){
        this.lessons.push({ title:newLesson , grades: [] });
        for (let i in students) {
            this.lessons[1].grades[i] = { name: names[i], grade: randomGrade() };

         }
    }
}

const students = ['Or', 'Livnat', 'Refael', 'Inon', 'Efi'];

fullStackClass.creatLesson(`math`,students)

function randomGrade() {
    return Math.floor((Math.random() * 61) + 40);

}

function insertGrades(classroom, names) {
    names.forEach((name, i) => {
        classroom.lessons[0].grades[i] = { name: name, grade: randomGrade() }
    });
}
insertGrades(fullStackClass,students)
console.dir(fullStackClass.lessons)