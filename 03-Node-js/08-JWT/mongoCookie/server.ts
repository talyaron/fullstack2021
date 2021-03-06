import cookieParser from 'cookie-parser'
import mongoose from 'mongoose';
import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'))
app.use(express.json());
app.use(cookieParser())


mongoose.connect('mongodb+srv://Michael:rrrposAAidkEs@cluster0.ctwuo.mongodb.net/companyDb?retryWrites=true&w=majority').then(res => {
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