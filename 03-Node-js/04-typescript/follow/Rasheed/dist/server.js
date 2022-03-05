"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 3000;
const students = [{ name: 'rasheed', id: '1' }];
app.use(express_1.default.static('public'));
app.use(express_1.default.json());
app.get('/get-all-data', (req, res) => {
    const students = getStudents();
    res.send(students);
});
app.post('/add-student', (req, res) => {
    console.log(req.body);
    const newStudentName = req.body.name;
    const students = addStudent(newStudentName);
    res.send(students);
    const deletedId = req.body.id;
    const newData = deleteStudent(deletedId);
    res.send(newData);
});
function getStudents() {
    return students;
}
function addStudent(name) {
    const id = Math.random().toString(36);
    students.push({ name: name, id });
    return students;
}
function deleteStudent(id) {
    const filterdData = students.filter(student => { student.id !== id; });
    console.log(filterdData);
    return filterdData;
}
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
