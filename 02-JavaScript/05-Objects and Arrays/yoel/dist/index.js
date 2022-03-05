var fullstackClass = {
    lessons: [{
            title: "Object - advance",
            grades: []
        }]
};
var students = ['moshe', 'yoel ', 'daniel', 'yair ', 'yonatan'];
function bringGraded() {
    return Math.floor(Math.random() * (100 - 0 + 1)) + 0;
}
// let x: number;
// x = bringGraded();
// console.log(x);
for (var i = 0; i < students.length; i++) {
    fullstackClass.lessons['grades'][i];
}
// orr
// for( let i = 0 ; i < students.length ; i++){
//     fullstackClass.lessons[1].grades[i] = bringGraded();
// }
for (var i = 0; i < students.length; i++) {
    console.log(fullstackClass);
}
//*************** *
//exerise 2 
