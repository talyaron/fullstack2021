import express from "express";
const app = express();
const port: number = 3000;

app.use(express.static("public"));
app.use(express.json());


