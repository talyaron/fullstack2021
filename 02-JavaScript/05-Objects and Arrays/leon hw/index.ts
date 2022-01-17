interface Class {
    lessons: Array<{
        title: string,
        grades: Array<any>
    }>
    generateNewLesson(string, Array):void
}

const students: Array<string> = ['Moshe', 'Ahron', 'Miriam', 'Dan', 'Levi'];

let fullStackClass: Class = {
    lessons: [
        {
            title: 'Objects - advance',
            grades: []
        }
    ],
    
    Lesson(newTitle, studentList) {
        this.lessons.push({ title: newTitle, grades: [] });
        studentList.forEach((student, i) => {
            this.lessons.slice(-1)[0].grades[i] = { name: student, grade: RandomGrade() }
        });
    }
}


 
function RandomGrade(){

return Math.floor(Math.random() * 60)+40;
}
 function generateTheGrade(theClass, studentList){
     studentList.forEach((student, i) => {
         theClass.lessons[0].grades[i] = { name: student, grade: RandomGrade()}
     });

 }
 generateTheGrade(fullStackClass, students);
 console.log(fullStackClass);
 fullStackClass.Lesson("form",students);
   

    

    