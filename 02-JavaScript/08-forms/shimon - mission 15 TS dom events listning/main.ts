interface Class {
    lessons: Array<{
        title: string,
        grades: Array<any>
    }>,
    newLesson(string, Array):void,
};

let fulstackClass:Class = {
    lessons: [
        {
            title: 'objects-advance',
            grades: [],
        }
    ],

    const students = ['moshe', 'shron', 'miriam', 'dan', 'levi'];

    newLesson (titleNew, studentNames) {
        this.lessons.push({title: titleNew, grades:[]}) 
    for (let i  in studentNames){
    this.lessons[this.lessons.length-1].grades[i] = {name: studentNames[i], grade: createRandomGradeFunc(40, 100)};
    }
    }
};



for (let i  in students){
fulstackClass.lessons[0].grades[i] = {name: students[i], grade: createRandomGradeFunc(40, 100)};
}

function createRandomGradeFunc(minGrade, maxGrade){
    return Math.floor(Math.random()*(maxGrade - minGrade + 1) + minGrade);
}

console.log(fulstackClass);
fulstackClass.newLesson("math",students);