"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//this is how its wriiten with the server being on typescript
const app = express_1.default();
const port = 3004;
let students = [{ name: "noa", id: '1' }];
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
//is a method built in express to recognize the incoming Request Object as a JSON Object. This method is called as a middleware.
app.get('/get-all-data', (req, res) => {
    const students = getStudents();
    res.send(students);
});
app.post('/add-student', (req, res) => {
    console.log(req.body);
    const newStudentName = req.body.name;
    const students = addstudent(newStudentName);
    res.send(students);
});
//post cause post is creating/adding
app.post('/delete-student', (req, res) => {
    const studentDeleteId = req.body.studentId;
    //body.whatever has to be the same name as the one written in the body in the route in index
    const students = deletestudent(studentDeleteId);
    res.send(students);
});
function getStudents() {
    return students;
}
function addstudent(name) {
    const id = Math.random().toString(36);
    students.push({ name, id });
    return students;
}
function deletestudent(studentId) {
    students = students.filter(student => student.id !== studentId);
    return students;
}
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
