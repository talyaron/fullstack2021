import express from "express";
const app = express();
const port: number = 30001;
app.use(express.json());
app.use(express.static("public"));

let tasks = [
    { id: "1", title: "one" },
    { id: "2", title: "two" },
    { id: "3", title: "three" },
    { id: "4", title: "four" }
]

app.get('/getTask'), (req, res) => {
    res.send(tasks)
}
app.listen(port, () => {
    console.log(`Server listen on port http://localhost:${port}`);
});

