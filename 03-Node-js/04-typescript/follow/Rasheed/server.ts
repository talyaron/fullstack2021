import express from 'express';
const app = express();
const port = 3000;

interface student{
    name:string;
    id:string;
}

const students:Array<student> = [{name:'rasheed', id:'1'}]

app.use(express.static('public'));
app.use(express.json());

app.get('/get-all-data', (req, res) => {
  const students = getStudents();
  res.send(students)
  
});

app.post('/add-student', (req, res) => {
    console.log(req.body)
const newStudentName = req.body.name;
const students = addStudent(newStudentName);
res.send(students)
const deletedId = req.body.id
const newData = deleteStudent(deletedId)
res.send(newData)

});

function getStudents(){
    return students;
}

function addStudent(name:string){
    const id =Math.random().toString(36)
    students.push({name:name, id});
    return students;
    
}

function deleteStudent(id){
    const filterdData = students.filter(student =>{student.id !== id})
    console.log(filterdData)
    return filterdData;
}

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});