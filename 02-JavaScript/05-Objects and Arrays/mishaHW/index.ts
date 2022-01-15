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


const students = ['moshe', 'ahron', 'miriam' ,'dan' ,'levi'];


// function createGrade(){

//     for(let i in students)
        
//     fullStackClass.lessons.grades{i}
        
//     });

// }


function constructor(name, eyeColor, age) {

    this.name = name;
    this.eyeColor = eyeColor;
    this.age = age;

}

let person01 = new constructor('ido', 'brown', 30);
let person02 = new constructor('michael','brown',30);

