import express from "express";
const app = express();
const port: number = 3000;

interface Student {
  name: string;
  id: string;
}

let students: Array<Student> = [{ name: "noa", id: '1' }];

app.use(express.static("public"));
app.use(express.json()); //use this to get data (body)

app.get("/get-all-data", (req, res) => {
  const students = getStudents();
  res.send(students);
});

app.post("/add-student", (req, res) => {
  console.log(req.body);
  const newStudentName = req.body.name;
  const students = addStudent(newStudentName);
  res.send(students)
});

app.post("/delete-student", (req, res) => {
  const studnetId = req.body.studnetId;
  console.log(req.body)
  const students = deleteStudent(studnetId)
  res.send(students)
})

function getStudents() {
  return students;
}
function addStudent(name: string) {
  const id: string = Math.random().toString(36);
  students.push({ name, id })
  return students;
}

function deleteStudent(studnetId) {
  console.log(studnetId)
  students = students.filter(student => student.id !== studnetId)
  return students;
}

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
