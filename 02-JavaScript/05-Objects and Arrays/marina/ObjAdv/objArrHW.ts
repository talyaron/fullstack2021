
interface Class {
    lessons: Array<{
        title: string,
        grades: Array<any>
    }>
}

const students: Array<string> = ['moshe', 'ahron', 'miriam', 'dan', 'levi'];


// internal function to the object

let fullStackClass: Class = {
    lessons: [
        {
            title: 'Objects - advance',
            grades: []
        }
    ],

    newLesson(newTitle, student) {
        this.lessons.push({ title: newTitle, grades: [] });
        for (let i = 0; i < students.length; i++) {
            this.lessons.slice(-1)[0].grades[i] = { name: student[i], grade: randomGrade() };

        }
        return 'newLesson()'
    }
    
}

fullStackClass.newLesson('Type script', students);

console.log(fullStackClass)



// a function which genrate random grades between 40 and 100 for all students(make the score an integer)
    
function randomGrade() {
    return Math.floor(Math.random() * 61 + 40);
}

function gradesGenerator(classObj, students) {
    students.forEach((student, i) => {
        classObj.lessons[0].grades[i] = { name: student, grade: randomGrade() }
    });
}

gradesGenerator(fullStackClass, students);




// fullStackClass = {
//     lessons: [{
//         title: 'Objects - advance',
//         grades: [
//             {
//                 name: 'moshe',
//                 grade: 45
//             },
//             {
//                 name: 'ahron',
//                 grade: 67
//             },
//             {
//                 name: 'miriam',
//                 grade: 78
//             },
//             {
//                 name: 'dan',
//                 grade: 45
//             },
//             {
//                 name: 'levi',
//                 grade: 45
//             }

//         ]
//     }
//     ]
// }

//create an internal function to the object