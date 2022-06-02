import express from 'express';
require('dotenv').config()

import mongoose from 'mongoose';
const app = express();
const port = process.env.PORT || 3000;

console.log(process.env.ENV)

import cookieParser from 'cookie-parser'
import {userInputEvent} from './middleWare/swimerMid'

app.use(express.static('public'))
app.use(express.json());
app.use(userInputEvent)

app.use(cookieParser())

const uri = process.env.URI

mongoose.connect(uri).then(res => {
    console.log('connected to DB');
  }).catch(err => {
    console.log('At mongoose.connect: ');
    console.error(err.message);
  })

import swimRout from './routers/swimRout'

app.use("/pool", swimRout)

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});


