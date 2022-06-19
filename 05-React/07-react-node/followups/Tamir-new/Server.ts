import express from "express";
import mongoose from "mongoose";

const app = express();
const port = process.env.PORT || 4001;

require("dotenv").config();
const mongodb_uri = process.env.MONGODB_URI;
app.use(express.static("client/build"));
app.use(express.json());

mongoose
  .connect(mongodb_uri)
  .then((res) => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log("Failed to connect to Mongoose:");
    console.log(err.message);
  });

import UserRoute from "./Routes/UserRoute";
app.use("/api/users", UserRoute);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
