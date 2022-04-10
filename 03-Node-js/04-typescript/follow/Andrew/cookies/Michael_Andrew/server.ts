import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import 'dotenv/config'

const app = express();
const port = process.env.PORT || 3000;
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());

mongoose.connect(process.env.MDB_URI).then(res => {
  console.log('connected to DB');
}).catch(err => {
  console.log('At mongoose.connect: ');
  console.error(err.message);
})

import userRoutes from './routes/userRoutes'
app.use('/users', userRoutes)

import artRoutes from './routes/artRoutes'
app.use('/arts', artRoutes)

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});