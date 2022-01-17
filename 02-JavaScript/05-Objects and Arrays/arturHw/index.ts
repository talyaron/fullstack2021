interface Class {
    lessons: Array < {
        title: string,
        grades: Array < any >
    } > ,
    NewObj():void
};

let fullStackClass: Class = {
    lessons: [{
        title: "Object-advanced",
        grades: [],
    }],
    NewObj (newTitle, newStudents){
        this.lessons.push({title: newTitle, grades: [{}]});

        for (let j in newStudents){
            this.lessons[this.lessons.length-1].grades[j] =  {name: newStudents[j], grade: GetRandomGrade(100, 40)}
        }
    }
}


fullStackClass.NewObj();

const students = ['moshe', 'shron', 'miriam', 'dan', 'levi'];


function GetRandomGrade(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

}

function NewGrades(ClassName,nameStudents) {
    for (let i in nameStudents) {
        ClassName.lessons[0].grades[i] = { name: nameStudents[i],  grade: GetRandomGrade(40, 100)
        }
    }
}


NewGrades(fullStackClass,students)

console.log(fullStackClass)
fullStackClass.NewObj ("History", students)