interface Class {
    lessons: Array<{
        title: string,
        grades: Array<any>
    }>;
    createRandomGrades?: any
}

const students: Array<string> = ['moshe', 'ahron', 'miriam', 'dan', 'levi'];

let fullStackClass: Class = {
    lessons: [
        {
            title: 'Objects - start',
            grades: []
        },
        {
            title: 'Objects - advance',
            grades: []
        },
        {
            title: 'Forms',
            grades: []
        }
    ],
    createRandomGrades: function (students: Array<string>): Class {

        this.lessons.forEach(lesson => {
            students.forEach(student => {
                //get random score
                const score = getRandomGrade();

                lesson.grades.push({ name: student, grade: score });

            })
        })

        return this;

    }
}

let UXClass: Class = {
    lessons: [
        {
            title: 'strategy',
            grades: []
        },
        {
            title: 'scope',
            grades: []
        }
    ]
}


function createRandomGrades(classObj: Class, students: Array<string>): Class {

    classObj.lessons.forEach(lesson => {
        students.forEach(student => {
            //get random score
            const score = getRandomGrade();

            lesson.grades.push({ name: student, grade: score });

        })
    })

    return classObj;

}

function getRandomNumber() {
    return Math.random() * 200
}

const resultsUX: Class = createRandomGrades(UXClass, students);
// const resultsFS:Class = createRandomGrades(fullStackClass, students);

console.log(resultsUX);
// console.log(resultsFS);

console.log(fullStackClass.createRandomGrades(students));


function renderLessons(classObj: Class, domElement: any) {
    let html: string = '';

    classObj.lessons.forEach(lesson => {
        let lessonHTML = `<div class='card'><h2>${lesson.title}</h2>`;

        lesson.grades.forEach(student => {
            lessonHTML += `<p>${student.name}: ${student.grade}</p>`
        })

        lessonHTML += '</div>';
        html += lessonHTML;

    });

    domElement.innerHTML = html;
}

const root = document.querySelector('#rootLessons');

renderLessons(fullStackClass, root);

function getRandomGrade(max = 100, min = 40) {
    const diffrence = max - min;

    return Math.round((Math.random() * diffrence) + min)
}




//create a function which genrate random grades between 40 and 100 for all students (make the score an integer).
//at the end the object should look somthing like that:

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

