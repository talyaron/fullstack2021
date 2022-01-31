interface Class {
    lessons: Array<{
        title: string,
        grades: Array<any>
    }>
}

let fullstackClass: Class = {
    lessons: [{
        title: "Object - advance",
        grades: []
    }]
}
const students = ['moshe', 'yoel ', 'daniel', 'yair ', 'yonatan'];


function bringGraded() {
    return Math.floor(Math.random() * (100 - 0 + 1)) + 0;
}
// let x: number;

// x = bringGraded();
// console.log(x);


for (let i = 0; i < students.length; i++) {
    fullstackClass.lessons['grades'][i];
}
// orr
// for( let i = 0 ; i < students.length ; i++){
//     fullstackClass.lessons[1].grades[i] = bringGraded();
// }


for (let i = 0; i < students.length; i++) {
    console.log(fullstackClass)
}
//*************** *
//exerise 2 




