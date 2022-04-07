import express from "express";
import mongoose from "mongoose";
const app = express();
const cookieParser = require('cookie-parser')
const port: number = 3000;

app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());
//ert

mongoose.connect(
  "mongodb+srv://tal1:daSK7Zewrt6UCQH8@tal-test1.m39if.mongodb.net/fs-2021-oct?retryWrites=true&w=majority"
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