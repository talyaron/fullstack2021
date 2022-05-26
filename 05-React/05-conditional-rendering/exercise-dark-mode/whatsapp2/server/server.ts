import express from 'express';
require('dotenv').config()
const {MONGODB_URI} = process.env
console.log(process.env)
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
const app = express();
const port = process.env.PORT || 4001;

app.use(express.static('public/build'))
app.use(cookieParser())
app.use(express.json());

import usersRout from './routers/usersRout';
import messagesRout from './routers/messagesRout'

mongoose
  .connect(
    `${MONGODB_URI}`
  )

  .then(res => {
    console.log("connected to Mongoose");
  })
  .catch((err) => {
    console.log("Failed to connect to Mongoose:")
    console.log(err.message);
  });

app.use('/users', usersRout)
app.use('/posts', messagesRout)


app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});


