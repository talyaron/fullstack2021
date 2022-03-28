import express from "express";
import mongoose from "mongoose";
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.json());

mongoose.connect('mongodb+srv://OmriAharonov:hYYFfWDZwNqMjKAe@cluster0.kv5s6.mongodb.net/MarketPlaceData?retryWrites=true&w=majority'
).then(res=>{
    console.log("Connected to DB");
  }).catch(err=>{
    console.log('At mongoose.connect:')
    console.error(err.message)
  });

import itemRoutes from "./routes/itemRoutes";
app.use("/marketItems",itemRoutes)

app.listen(port, () => {
    return console.log(`Server is listening at http://localhost:${port}`);
  });