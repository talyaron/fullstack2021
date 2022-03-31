import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = process.env.PORT || 3000;
app.use(express.static("public"));
app.use(express.json());

mongoose.connect('mongodb+srv://Michael:rrrpos32.14!@cluster0.ctwuo.mongodb.net/artNft?retryWrites=true&w=majority').then(res => {
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