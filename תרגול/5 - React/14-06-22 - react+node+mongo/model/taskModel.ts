import { Schema, model } from "mongoose";

const TaskSchema = new Schema({
    title: { type: String },
    desc: { type: String }
})

const Task = model("task", TaskSchema);
export default Task;