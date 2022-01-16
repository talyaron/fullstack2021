interface Class {
    lessons: Array<{
        title: string,
        grades: Array<any>
    }>
    generateNewLesson(string, Array):void
}
const students: Array<string> = ['Moshe', 'Ahron', 'Miriam', 'Dan', 'Levi'];


//create an internal function to the object

let fullStackClass: Class = {
    lessons: [
        {
            title: 'Objects - advance',
            grades: []
        }
    ],
    generateNewLesson(newTitle, studentList) {
        this.lessons.push({ title: newTitle, grades: [] });
        studentList.forEach((student, i) => {
            this.lessons.slice(-1)[0].grades[i] = { name: student, grade: getRandomgGrade() }
        });
    }
}



//create a function which genrate random grades between 40 and 100 for all students (make the score an integer).
function getRandomgGrade() {
    return Math.floor(Math.random() * 61 + 40);
}

function generateGrades(theClass, studentList) {
    studentList.forEach((student, i) => {
        theClass.lessons[0].grades[i] = { name: student, grade: getRandomgGrade() }
    });
}


generateGrades(fullStackClass, students);

//למי שמשעמם שיעשה את זה גם בDOM


function Sumbit(ev) {
    ev.preventDefault();
    let input = (<HTMLInputElement>document.querySelector('#input')).value;
    fullStackClass.generateNewLesson(input, students);
    console.log(fullStackClass);

    const newDiv = document.createElement("span");
    const startDiv = document.querySelector("#first class");
    document.body.insertBefore(newDiv, startDiv);
    
    let text:string = ``;
    for (let i = 0; i < fullStackClass.lessons.slice(-1)[0].grades.length; i++) {
        text += `<div class="class__grade">${fullStackClass.lessons.slice(-1)[0].grades[i].name}: ${fullStackClass.lessons.slice(-1)[0].grades[i].grade}</div> `
    }
    
    let newClass = 
    `<div class="class">
    <h2 class="class__title">Lesson: ${fullStackClass.lessons.slice(-1)[0].title}</h2>
    <div class="class__grades">
        ${text}
    </div>
    </div>`
    document.querySelector("span").outerHTML = `${newClass}`;

}
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