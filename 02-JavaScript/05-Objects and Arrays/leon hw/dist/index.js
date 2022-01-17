// interface Class {
//     lessons: Array<{
//         title: string,
//         grades: Array<any>
//     }>
//     generateNewLesson(string, Array):void
// }
// const students: Array<string> = ['Moshe', 'Ahron', 'Miriam', 'Dan', 'Levi'];
// let fullStackClass: Class = {
//     lessons: [
//         {
//             title: 'Objects - advance',
//             grades: []
//         }
//     ]
function randomnumber() {
    return Math.floor(Math.random() * 60) + 40;
}
console.log(randomnumber());
