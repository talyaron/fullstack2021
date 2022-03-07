"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 3000;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
app.get('/', (req, res) => {
});
const Students = [{ name: "noa", id: 0 }];
function getStudents() {
    return Students;
}
app.post("/add-student"), (req, res) => {
    console.log(req.body);
    const newStudent = req.body.name;
};
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
