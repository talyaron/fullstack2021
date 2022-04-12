import express from "express";
import mongoose from "mongoose";
require('dotenv').config();

import {getId} from './middlewares/usersMid'

console.log(process.env.ENV)

console.log(process.env.JWT_SECRET)
const app = express();
const cookieParser = require('cookie-parser');
const port: number = 3000;

app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());
app.use(getId);
//ert

const uri = process.env.MONGODB_URI;
mongoose.connect(
  uri
).then(res=>{
  console.log("Connected to DB");
}).catch(err=>{
  console.log('At mongoose.connect:')
  console.error(err.message)
});


import usersRoute from "./routes/usersRoute";
app.use("/users", usersRoute);






app.listen(port, () => {
  return console.log(`Server is listening at http://localhost:${port}`);
});


//j%3A%7B%22username%22%3A%22tal%40gmail.com%22%2C%22id%22%3A%226230a78a00d953d3f4050585%22%2C%22role%22%3A%22public%22%7D