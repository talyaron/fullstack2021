import express from "express";
const app = express();
const port: number = 3000;

interface Student{
    name:string;
    id:string;
}

let students:Array<Student> = [{ name: "noa", id: '1' }];

app.use(express.static("public"));
app.use(express.json()); //use this to get data (body)

app.get("/get-all-data", (req, res) => {
  const students = getStudents();
  res.send(students);
});
app.delete("/delete-student"), (req, res)=>{
  console.log(req.body);
  const deleteStudentId = req.body.name;
  const deleteFunction = deleteStudent(deleteStudentId)
  res.send(deleteFunction)
}

app.post("/add-student", (req, res) => {
  console.log(req.body);
  const newStudentName = req.body.name;
  const students = addStudent(newStudentName);
  res.send(students)
});

function getStudents() {
  return students;
}
function addStudent(name:string){
    const id:string = Math.random().toString(36);
    students.push({name, id})
    return students;
}
function deleteStudent(id:string){

}

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
