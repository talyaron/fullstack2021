import express from "express";
import mongoose from "mongoose";
const app = express();
const cookieParser = require('cookie-parser')
const port: number = 3000;

app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());

mongoose.connect(
  "mongodb+srv://tal1:35bSHsWTrzOtVK9E@tal-test1.m39if.mongodb.net/fs-2021-oct?retryWrites=true&w=majority"
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
