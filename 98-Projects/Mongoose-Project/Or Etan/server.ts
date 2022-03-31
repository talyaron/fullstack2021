import express from "express";
import mongoose from "mongoose";

const app = express();
const port = process.env.PORT || 3000;
app.use(express.static("public"));
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://EtanHey:NI2nXMDwLdTiRScP@cluster0.gedel.mongodb.net/OrEtan?retryWrites=true&w=majority"
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

