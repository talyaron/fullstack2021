import express from "express";
import mongoose from "mongoose";
const app = express();
const PORT: string | number = process.env.PORT || 7857;

app.use(express.static("client/build"));
app.use(express.json());

mongoose.connect("mongodb+srv://KaKa:7pl0qohPTblWZF0T@cluster0.mfqlq.mongodb.net/fullStackOct2021", () => {
    console.log(`DB connected`)
})

import taskRout from './routers/taskRout'
app.use('/', taskRout) // '/get-task' '/task/get-task'


app.listen(PORT, () => {
    return console.log(`Server is listening at http://localhost:${PORT}`);
});
