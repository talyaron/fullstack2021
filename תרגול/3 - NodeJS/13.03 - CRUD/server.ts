import express from "express";
const app = express();
const port: number = 3000;
app.use(express.json());
app.use(express.static("public"));

let tasks = [
    { id: "1", title: "one" },
    { id: "2", title: "two" },
    { id: "3", title: "three" },
    { id: "4", title: "four" }
]

app.get('/getTasks', (req, res) => {
    res.send(tasks)
})

app.delete('/deleteTask', (req, res) => {
    const { id } = req.body
    console.log(id)

    tasks = tasks.filter(task => task.id != id)

    console.log(tasks)

    res.send({ tasks, ok: true })
})


app.listen(port, () => {
    console.log(`Server listen on port http://localhost:${port}`);
});