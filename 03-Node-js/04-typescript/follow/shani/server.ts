import express from 'express';
//this is how its wriiten with the server being on typescript
const app = express();
const port = 3004;

interface Student{
  name:string;
  id:string;
}

let students:Array<Student> =[{name:"noa",id:'1'}];

app.use(express.static("public"));
app.use(express.json()); 
//is a method built in express to recognize the incoming Request Object as a JSON Object. This method is called as a middleware.

app.get('/get-all-data', (req, res) => {
  const students=getStudents();
  res.send(students);
});


app.post('/add-student',(req,res)=>{
  console.log(req.body);
  const newStudentName = req.body.name;
  const students =addstudent(newStudentName);
  res.send(students);
});
//post cause post is creating/adding

app.post('/delete-student',(req,res)=>{
  const studentDeleteId = req.body.studentId;
  //body.whatever has to be the same name as the one written in the body in the route in index
  const students=deletestudent(studentDeleteId);
  res.send(students);

})

function getStudents(){
  return students;
}

function addstudent(name:string){
  const id:string = Math.random().toString(36);
  students.push({name,id})
  return students;

}

function deletestudent(studentId){
  students=students.filter(student=> student.id!== studentId);
  return students;
}


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
