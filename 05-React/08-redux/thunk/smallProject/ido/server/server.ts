import express from "express";
import mongoose from "mongoose";
const app = express();

const port = process.env.PORT || 4001;
require("dotenv").config();

const mongodb_uri = process.env.MONGODB_URI;

import textRoute from './routes/textRoutes'

app.use('/textList', textRoute);



mongoose
  .connect("mongodb+srv://igino11:Fyy6WPbjM6wxfzmE@cluster0.zfewx.mongodb.net/?retryWrites=true&w=majority")
  .then((res) => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.error(err.message);
  });

app.use(express.json());
app.use(express.static("client/build"));

// import usersRoute from "./routes/usersRoute";
// app.use("/api/users", usersRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
