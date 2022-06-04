import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config'

import IceCreamRouter from './Roters/IceCreamRouter'
import usersRouter from './Roters/usersRouter'
const app = express()
const port = process.env.PORT || 4001;
// require('dotenv').config()
console.log(process.env.ENV);

// import cookieParser from 'cookie-parser';
// app.use(cookieParser());


const mongodb_uri = process.env.mongodb_uri

mongoose.connect(
    mongodb_uri
  ).then(res=>{
    console.log("Connected to DB");
  }).catch(err=>{
    console.error(err.message)
  });

  app.use(express.json())
  app.use(express.static('client/build'))  

// app.get('/api/text', (req, res) => {
//   res.send({ball: 'Hello World!'})
// })

app.use('/icecream', IceCreamRouter)
app.use('/icecream', usersRouter)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
