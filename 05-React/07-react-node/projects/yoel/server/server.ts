import 'dotenv/config';

import express from 'express';
import mongoose from 'mongoose';
const app = express();
const port = process.env.PORT || 4001;
const mongoDB_URI = process.env.mongoDB_URI;

const cookieParser = require('cookie-parser')
app.use(cookieParser()); // if not , we’ll not get the cookie  


app.use(express.static('client/build'))
app.use(express.json());

import userRoute from './route/userRoute' 
app.use('/user' , userRoute)

import articleRoute from './route/articleRoute' 
app.use('/article' , articleRoute)

mongoose.connect(mongoDB_URI)
    .then(res => {
        console.log("connected to Mongoose");
    })
    .catch((err) => {
        console.log("Failed to connect to Mongoose:")
        console.log(err.message);
    });



app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});

