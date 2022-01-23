interface Class {
    lessons: Array <{
        title: string,
        grades: Array <any>
    }>
}

let fullStackClass: Class = {
    lessons: [
        {
            title: 'Objects - advance',
            grades: []
        }
    ]
}

const students = ['moshe', 'aharonn', 'miriam', 'dan', 'levi'];

//console.dir(fullStackClass);
console.log(fullStackClass.lessons[0]['grades'])