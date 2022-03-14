"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 3000;
app.use(express_1.default.json());
app.use(express_1.default.static("public"));
let tasks = [
    { id: "1", title: "one" },
    { id: "2", title: "two" },
    { id: "3", title: "three" },
    { id: "4", title: "four" }
];
app.get('/getTask'), (req, res) => {
    res.send(tasks);
};
app.delete('/deleteTask', (req, res) => {
    const { id } = req.body;
    console.log(id);
    tasks = tasks.filter(task => task.id != id);
    console.log(tasks);
    res.send({ tasks, ok: true });
});
app.listen(port, () => {
    console.log(`Server listen on port http://localhost:${port}`);
});
