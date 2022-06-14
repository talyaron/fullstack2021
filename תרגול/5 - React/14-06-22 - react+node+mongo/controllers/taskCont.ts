import Task from "../model/taskModel"

export const getTasks = async (req, res) => {
    const task = await Task.find();

    res.send({ ok: true, task })
}

export const addTask = async (req, res) => {
    console.log(req.body)

    const { title, desc } = req.body

    const newTask = new Task({ title, desc })
    console.log(newTask)
    await newTask.save()

    res.send({ ok: true })
}