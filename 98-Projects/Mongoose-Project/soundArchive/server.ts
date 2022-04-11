import express from 'express';
import mongoose from "mongoose";
import color from "colors";

require('dotenv').config()

console.log(process.env.JWT_SECRET, process.env.ENV);
const uri = process.env.MONGODB_URI;


const app = express();
const cookieParser = require('cookie-parser')
const port = process.env.PORT || 3000;


app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());


// const http = require("http")
// console.log(http.STATUS_CODES);


mongoose.connect(uri).then(() => {
  console.log("connected to Mongoose");
})
  .catch((err) => {
    console.log("Failed to connect to Mongoose:")
    console.log(err.message);
  });


import userRoute from "./routes/userRoute";
app.use("/soundUser", userRoute);

import soundRoute from "./routes/soundRoute";
app.use("/sounds", soundRoute)


app.listen(port, () => {
  return console.log(color.bgYellow.black(`Express is listening at http://localhost:${port}`));
});
