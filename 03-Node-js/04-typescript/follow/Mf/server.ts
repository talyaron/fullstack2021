import express from 'express';
const app = express();
const port = 3000;

app.use(express.static('public'))
app.use(express.json());

let students = [
    { name: "michael", id: "1" }, { name: "ohad", id: "2" },
]

app.post('/addStudent', (req, res) => {

    const newStudentName = req.body.name;
    const studentsAdd = addStudents(newStudentName)

    res.send(studentsAdd);
});

app.post('/deleteStudent', (req, res) => {
    const deleteStudentId = req.body.id
    deleteStudent(deleteStudentId)
    res.send(students);
    
})

function addStudents(name) {
    let id = Math.random().toString(36);
    students.push({ name, id })
    return students;
}

function deleteStudent(deleteStudentId) {

    students = students.filter(student => student.id !== deleteStudentId);
}


app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});