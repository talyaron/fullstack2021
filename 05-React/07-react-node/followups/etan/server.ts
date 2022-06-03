import 'dotenv/config'
import express from "express";
import mongoose from "mongoose";
import CookieParser from "cookie-parser";
const MONGODB_URI = process.env.MONGODB_URI


const app = express();
const port = process.env.PORT || 4001

app.use(express.json());
app.use(CookieParser())
app.use(express.static("public/build"));

mongoose
  .connect(
    `${MONGODB_URI}`
  )

  .then(() => {
    console.log("connected to Mongoose");
  })
  .catch((err) => {
    console.log("Failed to connect to Mongoose:")
    console.log(err.message);
  });


import typeRoutes from "./Routes/typeRoutes";
app.use("/types", typeRoutes);




app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
