import express from "express";
import mongoose from "mongoose";
const app = express();
const port: number = 3000;

app.use(express.static("public"));
app.use(express.json());

mongoose.connect('mongodb+srv://OrA99:134679852Or@cluster0.r0go0.mongodb.net/OrEtan?retryWrites=true&w=majority')
.then(()=>{console.log('connect to Mongoose')})
.catch(err=>{console.log(err.message)})

const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    role: String,
    firstName: String,
    lastName: String,
    img: String,
  });

  const user = mongoose.model("users", UserSchema);

const TaskSchema = new mongoose.Schema({
    title: String,
    description: String,
    urgency: String,
    location: String,
    date: Date,
  });

  const task = mongoose.model("tasks", TaskSchema)



  app.listen(port, () => {
    return console.log(`Server is listening at http://localhost:${port}`);
  });