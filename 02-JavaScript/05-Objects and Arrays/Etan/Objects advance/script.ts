const students:Array<string> = ['Marina', 'John', 'Michael', 'Michael Michael', 'Misha', 'Yoel', 'Etan', 'Simon']
interface Class {
    lesson: Array<{
        title:string,
        grades: Array<any>
    }>
    
}
let fullStackClass:any = {
    lesson: [
        {
            title: 'objects - advanced',
            grades:[]
    }],
    createClass(newClass:any, studentList:any){
this.lesson.push({ title: newClass, grades:[]});
studentList.forEach((student:any, i:any) => {
    this.lesson.slice(-1)[0].grades[i] = {name: student, grade: getRandomInt()}
})
}
}


function getRandomInt(){
    return Math.round(Math.random() * 60 + 40);
}

function createGrades(studentList:Array<string>,className:Class) {
    for(let i = 0; i < studentList.length; i++) {
        fullStackClass.lesson[0].grades[i] = {name: studentList[i],grade: getRandomInt()}
    }
}

function handleSubmit (ev:any){
    ev.preventDefault();
    const madeUpClass:any = document.getElementsByName("className")[0].value;
    createGrades(students,fullStackClass)
fullStackClass.createClass(madeUpClass, students)
console.log("hello")
console.log(fullStackClass)}:


//  console.dir(j)


//Object.keys(fullStackClass.lesson[0]

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

