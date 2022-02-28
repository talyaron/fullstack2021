import express from "express";
const app = express();
const port: number = 3000;

interface Student{
  name:string
  id:string
}

let students:Array<Student> = [
  { name: "noa", id: "1" },
  { name: "leon", id: "2" },
  { name: "michael", id: "3" },
  { name: "or", id: "4" },
  { name: "andrew", id: "5" },
  { name: "marina", id: "6" },
  { name: "omri", id: "7" },
];

app.use(express.static("public"));
app.use(express.json());

app.get("/get-all-data", (req, res) => {
  const students = getStudents();
  res.send(students);
});

app.post("/add-student", (req, res) => {
  console.log(req.body);
  const newStudentName = req.body.name;
  const students = addStudent(newStudentName);
  res.send(students);

  
});
function getStudents() {
  return students;
}
function addStudent(name:string){
  const id = Math.random().toString(36)
  students.push({name, id});
  return students
}
app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
