import express from "express";
import mongoose from "mongoose";
const app = express();
const port = process.env.PORT || 3002;

app.use(express.static("public"));
app.use(express.json());


mongoose.connect('mongodb+srv://OmriAharonov:hYYFfWDZwNqMjKAe@cluster0.kv5s6.mongodb.net/MarketPlaceData?retryWrites=true&w=majority') 
.then(()=>console.log("conect to DB"))
.catch(err=>console.log(err.message))

import productRoute from "./routes/productRoute";
app.use("/products", productRoute);


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
