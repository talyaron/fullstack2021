import express from "express";
import mongoose from "mongoose";
const app = express();
const port = process.env.PORT || 3001;

app.use(express.static("public"));
app.use(express.json());

mongoose.connect('mongodb+srv://ohad2001:GosiaW9nu935YRgg@cluster0.q1pcm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority') 
.then(()=>console.log("conect to DB"))
.catch(err=>console.log(err.message))

import productRoute from "./routes/productRoute";
app.use("/products", productRoute);

app.post("/add-product",);

app.get("/get-products", );

app.patch("/update-picture");

app.patch("/update-title");

app.patch("/update-price");

app.delete('/delete-product',);


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
