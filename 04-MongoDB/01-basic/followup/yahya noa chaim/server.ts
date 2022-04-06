import express from "express";
import mongoose from "mongoose";
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.json());

mongoose.connect('mongodb+srv://chaim14:82148214cc@cluster0.ar8tn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');