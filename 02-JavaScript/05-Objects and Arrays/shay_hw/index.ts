interface Class{
lessons:Array<{
    title: string,
    grades:Array<any>
}>
    newLesson(string, Array):void
}
const student:Array<string> = ['shir', 'moshe', 'miri', 'david', 'lea'];

let fullStackClass: Class = {
    lessons:[
        {
            title: 'object - advanced',
            grades:[]
        }
    ],
    newLesson(newTitle, studentList) {
        this.lessons.push({ title: newTitle, grades: [] });
        studentList.forEach((student, i) => {
            this.lessons[this.lessons.length-1].grades[i] = { name: student, grade: getRandomgGrade() }
        });
    }
}


 
function getRandomgGrade(){

return Math.floor(Math.random() * 61)+40;
}
 function generateTheGrade(theClass, studentList){
     studentList.forEach((student, i) => {
         theClass.lessons[0].grades[i] = { name: student, grade: getRandomgGrade()}
     });

 }
 generateTheGrade(fullStackClass, student);
 console.log(fullStackClass);
 fullStackClass.newLesson("form",student);
 