import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

require('dotenv').config()





const uri  = process.env.MONGODB_URI
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser())

mongoose
  .connect(
    uri
  )

  .then(() => {
    console.log("connected to Mongoose");
  })
  .catch((err) => {
    console.log("Failed to connect to Mongoose:")
    console.log(err.message);
  });

// app.post('/show-user'), async (req, res) => {

// }

import userRoutes from "./routes/userRoutes";
app.use("/users", userRoutes);

import taskRoutes from "./routes/taskRoutes";
app.use("/tasks", taskRoutes);

app.listen(port, () => {
  return console.log(`Server is listening at http://localhost:${port}`);
});

