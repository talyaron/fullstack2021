interface Class {
    lessons: Array<{
        title: string,
        grades: Array<any>
    }>,
    putNameAndGrades?:any,
    renderFamily?:any;
}
const family:Array<string> = ['no','se', 'daniel', 'yair', 'yonatan', 'nonoyos'];

let fullstack: Class = {
    lessons: [{
        title: 'object - advenced',
        grades: []
    }], 
    putNameAndGrades:function(this: Class, students:Array<string>):Class {
    this.lessons.forEach(lesson => {
        students.forEach(student => {
            if(student === 'no'){
                lesson.grades.push({name:student , grade:100})
            }
            else if(student === 'se'){
                lesson.grades.push({name:student , grade:95})
            }
            else if(student === 'daniel'){
                lesson.grades.push({name:student , grade:40})
            }
            else if(student === 'yair'){
                lesson.grades.push({name:student , grade:60})
            }
            else if(student === 'yonatan'){
                lesson.grades.push({name:student , grade:50})
            }
            else if(student === 'nonoyos'){
                lesson.grades.push({name:student , grade:20})
            }
 
        })
    })
    return this;
},
    renderFamily:function(this:Class , domelement){
        
        let html:string = '';

        this.lessons.forEach(lesson =>{
            let lessonsHTML = `<div class = 'card'> <h1>${lesson.title}</h1>`

            let familyHTML = ``

            lesson.grades.forEach(someone =>{
                familyHTML += `<p>${someone.name} : ${someone.grade}  `
            })

            lessonsHTML += familyHTML;
            lessonsHTML += `</div>`;
            html += lessonsHTML;

        })
        domelement.innerHTML = html;

    },
}


const root = document.getElementById('root')
 
fullstack.putNameAndGrades(fullstack ,family);
fullstack.renderFamily(fullstack , root)
  

