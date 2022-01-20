

interface Class {
    lessons: Array<{
        title: string,
        grades: Array<any>
    }>
    generateNewLesson(string, Array): void
    
}
const students: Array<string> = [`Moshe`, `yamkale`, `suzi`, `randomsadasdas`];
}

let fullStackClass: Class = {
    lessons: [
        {
            title: 'Objects - advance',
            grades: []
        }
    ],
    generateNewLesson(newtitle,studentlist){ this.lessons.push({ title: newtitle, grades: [] });
    studentlist.forEach((student, i) => {
        this.lessons.slice(-1)[0].grades[i] = { name: student, grade: getRandomgGrade() }
    });
        
    }
}



//create a function which genrate random grades between 40 and 100 for all students (make the score an integer).
//at the end the object should look somthing like that:
function getRandomgGrade() {
    return Math.floor(Math.random() * 61 + 40);
}

function generateGrades(theClass, studentlist) {
    studentlist.forEach((student, i) => {
        theClass.lessons[0].grades[i] = { name: student, grade: getRandomgGrade() }
    });
}

fullStackClass = {
    lessons: [{
        title: 'Objects - advance',
        grades: [
            {
                name: 'moshe',
                grade: 45
            },
            {
                name: 'ahron',
                grade: 67
            },
            {
                name: 'miriam',
                grade: 78
            },
            {
                name: 'dan',
                grade: 45
            },
            {
                name: 'levi',
                grade: 45
            }

        ]
    }
    ]
}

//create an internal function to the object

