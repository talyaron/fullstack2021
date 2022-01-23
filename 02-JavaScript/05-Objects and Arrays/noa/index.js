
const student = {
    name: 'Dan',
    lastname: 'Cohen',
    math: 90,
    english: 85,
    bible: 77,
    literture: 92,
    geography: 81
}

console.log(`${student.name} ${student.lastname}'s grades are:
  math: ${student.math} 
  english: ${student.english} 
  bible: ${student.bible} 
  literture: ${student.literture} 
  geography: ${student.geography}`)


//array

const arr = ['תשרי', 'חשוון', 'כסלו', 'טבת', 'שבט', 'אדר', 'ניסן', 'אייר', 'סיוון', 'תמוז', 'אב', 'אלול']

function month(number) {
        return arr[number-1];
}
console.log(month(8));