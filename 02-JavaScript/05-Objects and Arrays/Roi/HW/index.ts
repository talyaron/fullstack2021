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

let grades = Math.floor(Math.random() * 100);