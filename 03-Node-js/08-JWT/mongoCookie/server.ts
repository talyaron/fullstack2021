import cookieParser from 'cookie-parser'
import mongoose from 'mongoose';
import express from 'express';

require('dotenv').config()
console.log(process.env.JWT_SECRET, process.env.ENV)
const uri = process.env.MONGODB_URI

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'))
app.use(express.json());
app.use(cookieParser())


mongoose.connect(uri).then(res => {
    console.log('connected to DB');
  }).catch(err => {
    console.log('At mongoose.connect: ');
    console.error(err.message);
  })

import employeeRout from './routes/employeeRout'
app.use('/company', employeeRout)


app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});