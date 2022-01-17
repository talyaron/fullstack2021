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

const students = ['moshe, ahron, miriam', 'dan', 'levi'];

function getRandomgGrade() {
  return Math.floor(Math.random() * 61 + 40);
}

function generateGrades(theClass, studentList) {
  studentList.forEach((student, i) => {
      theClass.lessons[0].grades[i] = { name: student, grade: getRandomgGrade() }
  });
}

generateGrades(fullStackClass, students);