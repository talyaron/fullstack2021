import mongoose from "mongoose";
const TaskSchema = new mongoose.Schema({
  title: String,
  description: String,
  urgency: String,
  location: String,
  date: Date,
  color: String,
  ownerId: String,
  checked: Boolean,
  timeChecked: String,
});

const task = mongoose.model("tasks", TaskSchema);
export default task;
