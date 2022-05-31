import express from 'express';
import mongoose from 'mongoose';
const app = express();
const port = process.env.PORT || 4001;
import employeesRouter from './Routers/employeesRouter';

app.use(express.static('public/build'))
app.use(express.json());


mongoose.connect('mongodb+srv://Michael:zuOKFjuNstxOAy6G@cluster0.ctwuo.mongodb.net/newEmployees?retryWrites=true&w=majority')
    .then(res => {
        console.log("connected to Mongoose");
    })
    .catch((err) => {
        console.log("Failed to connect to Mongoose:")
        console.log(err.message);
    });

app.use('/employees', employeesRouter);

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});