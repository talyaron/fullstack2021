interface Class {
    lessons: Array<{
        title: string,
        grades: Array<any>
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

const students = ['moshe', 'ahron', 'miriam', 'dan', 'levi'];



// let newgrades = randomgrades(40, 100)

function randomgrades(mingrade, maxgrade) {
    return Math.floor(Math.random() * (maxgrade - mingrade) + mingrade + 1);
}



console.log(fullStackClass)

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
                grade: 97
            },
            {
                name: 'levi',
                grade: 56
            }

        ]
    }
    ]
}