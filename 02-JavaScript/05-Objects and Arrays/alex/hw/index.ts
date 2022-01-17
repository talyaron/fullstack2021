interface Class {
  subjects: Array<{
    title: string;
    grades: Array<{ name:any; grade:any }>;
    func:any;
  }>;
}

let fullStackClass: Class = {
  subjects: [
    {
      title: "Math",
      grades: [],
      func: function(){
         console.log(this.grades);
      }
      
    },
  ],
};


const students: Array<string> = ["moshe", "yoni", "ahron", "dan", "levi"];

const result = fullStackClass.subjects[0].grades;
const subject = fullStackClass.subjects[0].title;
const funky = fullStackClass.subjects[0].func();

function putNameInGrade() {
  for (let i = 0; i < students.length; i++) {
    result.unshift({ name: students[i], grade: getRandomGrade() });
  }
}

function getRandomGrade() {
    return Math.floor(Math.random() * (100 - 40) + 40);
  }
  
console.log(funky,subject,result, putNameInGrade());





