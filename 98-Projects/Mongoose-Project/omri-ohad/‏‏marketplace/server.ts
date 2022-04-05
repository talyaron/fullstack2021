import express from "express";
import mongoose from "mongoose";
const app = express();
const cookieParser = require('cookie-parser')
const port = process.env.PORT || 3003;

app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());

mongoose.connect('mongodb+srv://ohad2001:GosiaW9nu935YRgg@cluster0.q1pcm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority') 
.then(()=>console.log("conect to DB"))
.catch(err=>console.log(err.message))

import productRoute from "./routes/productRoute";
app.use("/products", productRoute);


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
