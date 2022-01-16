interface Class {
    lessons: Array<{
        title: string,
        grades: Array<any>
    }>
    generateNewLesson(string, Array):void
}

const students: Array<string> = ['Moshe', 'Ahron', 'Miriam', 'Dan', 'Levi'];

let fullStackClass: Class = {
    lessons: [
        {
            title: 'Objects - advance',
            grades: []
        }
    ]

    //create a function which genrate random grades between 40 and 100 for all students (make the score an integer).
   function randomNumber()