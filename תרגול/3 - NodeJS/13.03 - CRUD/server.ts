import express from "express";
const app = express();
<<<<<<< HEAD
const port: number = 3000;
=======
const port: number = 30001;
>>>>>>> parent of d2fdcf04 (Merge branch 'main' of https://github.com/talyaron/fullstack2021)
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
<<<<<<< HEAD
})

app.delete('/deleteTask', (req, res) => {
    const { id } = req.body
    console.log(id)

    tasks = tasks.filter(task => task.id != id)

    console.log(tasks)

    res.send({ tasks, ok: true })
})


=======
}
>>>>>>> parent of d2fdcf04 (Merge branch 'main' of https://github.com/talyaron/fullstack2021)
app.listen(port, () => {
    console.log(`Server listen on port http://localhost:${port}`);
});

