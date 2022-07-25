import express from "express";
import mongoose from "mongoose";
import userRoute from "./Routes/UserRoute";
const app = express();
require("dotenv").config();
const port = process.env.PORT || 4001;
const mongodb_uri = process.env.MONGODB_URI;
app.use(express.static("public/build"));
app.use(express.json());

mongoose
  .connect(mongodb_uri)
  .then((res) => {
    console.log("connected to Mongoose");
  })
  .catch((err) => {
    console.log("Failed to connect to Mongoose:");
    console.log(err.message);
  });

app.use("/api/users", userRoute);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
