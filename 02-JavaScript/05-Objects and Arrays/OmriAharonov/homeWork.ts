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

const students = ['Moshe', 'Aharonn', 'Miriam', 'Dan', 'Levi'];

let random = Math.floor((Math.random() * (100 -40)) + 40);
