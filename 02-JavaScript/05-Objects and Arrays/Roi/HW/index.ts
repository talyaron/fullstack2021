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

let grades = RandomGradeGenerator (40,100)

function RandomGradeGeneratorcreateR (minGrade, maxGrade) {
  return Mathfloor(Math.random ())*(maxGrade - minGrade) + minGrade + 1;
}