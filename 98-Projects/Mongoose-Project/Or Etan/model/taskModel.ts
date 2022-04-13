import mongoose from "mongoose";
const TaskSchema = new mongoose.Schema({
  title: String,
  description: String,
  urgency: String,
  location: String,
  date: Date,
  color: String,
  ownerId: String,
});

const task = mongoose.model("tasks", TaskSchema);
export default task;
