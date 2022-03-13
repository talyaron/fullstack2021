"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 30001;
app.use(express_1.default.json());
app.use(express_1.default.static("public"));
let tasks = [
    { id: "1", title: "one" },
    { id: "2", title: "two" },
    { id: "3", title: "three" },
    { id: "4", title: "four" }
];
// app.get(('/'), (req, res)=>{
//     // req.body // get info client
//     // req.params // 
//     // req.query // chech if yes or no
// })
app.get('/getTasks', (req, res) => {
    res.send(tasks);
});
app.listen(port, () => {
    console.log(`Server listen on port http://localhost:${port}`);
});
