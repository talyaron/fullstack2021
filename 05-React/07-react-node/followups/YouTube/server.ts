import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
const app = express();
app.use(cookieParser())
const port = process.env.PORT || 4001;
const MONGODB_URI = process.env.MONGODB_URI 

console.log(process.env.ENV);


app.use(express.static('client/build'))
app.use(express.json());

mongoose.connect(MONGODB_URI)
    .then(res => {
        console.log("connected to Mongoose");
    })
    .catch((err) => {
        console.log("Failed to connect to Mongoose:")
        console.log(err.message);
    });

import videosRouter from './routers/videosRouter'
import usersRouter from './routers/usersRouter'

app.use('/api/videos', videosRouter)
app.use('/api/users', usersRouter)

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});