interface Class {
    lessons: Array<{
        title: string
        grades: Array<number>
    }>
    createClass(titleName)
}

const showGrades:any = document.querySelector('.main-show')
const newTitle = document.getElementById('input')
const listAverage = document.getElementById('listAverage')



let fullStackClass: Class = {
    lessons: [
        {
            title: 'Objects - advance',
            grades: []
        }
    ],
    createClass(titleName) {
        this.lessons.push({ title: titleName, grades: [] })
        for (let i = 0; i < students.length; i++) {
            this.lessons[this.lessons.length - 1].grades[i] = { student: students[i], grade: randomNumber() };
        }
    }
}


// ------------------------------------------- //

const students = ['Ido', 'Tamir', 'Bar', 'Sean', 'Moshe', 'Ben']

function creatGrades(full, names) {
    for (let i = 0; i < students.length; i++) {
        full.lessons[0].grades[i] = { name: names[i], grade: randomNumber() };
        // full.lessons[0].grades.push({name:names[i] , grade:randomNumber()});
    }
    // return full;
}

creatGrades(fullStackClass, students)

console.log(fullStackClass.lessons);

fullStackClass.createClass("DOM");

function randomNumber() {
    return Math.round(Math.random() * 60 + 40);
}

function displayGrades(ev) {
    ev.preventDefault();
    let newClass;
    for (let field of ev.target) {
        if (field.name !== "submit"){
            if(field.value !== " "){
            field.name = field.value
            newClass = field.name
           
            fullStackClass.createClass(newClass);
            }
        }
    }
    creatPage(fullStackClass.lessons[fullStackClass.lessons.length - 1],students)
}

function creatPage(object,studentList){
    

    let details = `<h3>Class : ${object.title}<h3/>`
    let sum = 0;
    
    for (let i = 0; i < studentList.length; i++) {
        details += `<p> NAME: ${object.grades[i].student} ,  GRADE: ${object.grades[i].grade} <p/>`
        let grade = parseInt(`${object.grades[i].grade}`, 10)
        sum = sum + grade;
    }
    let average = sum/students.length
    // console.log(average);
    
    details += `<h4> The avarage is : ${average} <h4/>`

    showGrades.innerHTML = details;
    
    let list = `<h3>above/below average in ${object.title}: <h3/>`

    for(let i=0 ; i < studentList.length;i++){
        let grade = parseInt(`${object.grades[i].grade}` , 10)
        if(grade > average){
            
            list += `<p> ${object.grades[i].student} with ${object.grades[i].grade} , is above average<p/>`
            
        }else if(grade < average){
            list +=`<p> ${object.grades[i].student} with ${object.grades[i].grade}, is below average<p/>`
           
        }
    }
    console.log(list);
    
    listAverage.innerHTML = list;
}



















