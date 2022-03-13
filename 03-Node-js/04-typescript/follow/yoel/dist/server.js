"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = process.env.PORT || 3000;
app.use(express_1.default.static("public")); //only in this way , we have secceed to the folder "pablic" in their files 
app.use(express_1.default.json());
const student = [
    { name: 'yoel', id: '19' },
    { name: 'daniel', id: "21" }
];
app.get("/get-student", (req, res) => {
    const student = getstudent();
    res.send(student);
});
app.post("/add-student", (req, res) => {
    console.log(req.body);
    const newStudent = req.body.name;
    const student = addStudent(newStudent);
    res.send(student);
});
function addStudent(name) {
    const id = Math.random().toString(360);
    student.push({ name, id });
    return student;
}
function getstudent() {
    return student;
}
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
