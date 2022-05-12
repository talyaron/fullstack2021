import express from "express";
import mongoose from 'mongoose';
const app = express();
const port: number = 3003;

app.use(express.static("public"));
app.use(express.json());
app.listen(port,()=>{
    console.log("applisen"+port)
})