import express from "express";
import mongoose from "mongoose";
require('dotenv').config();
const cookieParser = require('cookie-parser')
const app = express();
const port = process.env.PORT || 3002;

app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());

const uri = process.env.MONGO_URI

mongoose.connect(uri) 
.then(()=>console.log("conect to DB"))
.catch(err=>console.log(err.message))

import productRoute from "./routes/productRoute";
app.use("/products", productRoute);


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
