
import express from 'express';
import mongoose from 'mongoose';
const app = express();
const port = process.env.PORT || 4001;
import userRouter from './router/userRouter'


app.use(express.static('public/build'))
app.use(express.json());





mongoose.connect('mongodb+srv://yossias:RDdGCQ3QDyyK3Ars@clustermern.5gvnw.mongodb.net/MERNyossi?retryWrites=true&w=majority')
    .then(res => {
        console.log("connected to Mongoose");
    })
    .catch((err) => {
        console.log("Failed to connect to Mongoose:")
        console.log(err.message);
    });


app.use("/api", userRouter)







app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});