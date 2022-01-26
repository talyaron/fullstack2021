interface Class {
    lessons: Array<{
                    title: string,
                    grades: Array<any>
                    }>
    generateNewLesson(string, Array):void
}
const students:Array<string> = ['moshe', 'ahron', 'miriam', 'dan', 'levi'];

let fullStackClass:Class = {
    lessons: [
        {
            title: 'Objects - advance',
            grades: []
        }
    ],
    generateNewLesson(newTitle,studentList){
        this.lessons.push({title: newTitle, grades:[]});
        studentList.forEach((student , i) => {
            this.lessons.slice(-1)[0].grades[i] = {name: student, grade: getRandomgGrade()}
        });
    }
}



//create a function which genrate random grades between 40 and 100 for all students (make the score an integer).
function getRandomgGrade(){
    return Math.floor(Math.random() * 61 + 40);
}

function generateGrades(theClass , studentList){
    studentList.forEach((student,i) => {
        theClass.lessons[0].grades[i] = {name: student, grade: getRandomgGrade()}
    });
    console.log(theClass); 
}


generateGrades(fullStackClass,students);
console.log(fullStackClass);
//create an internal function to the object

fullStackClass.generateNewLesson("dom",students);

//at the end the object should look somthing like that:

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