import express from 'express';
import mongoose from 'mongoose';
import IceCreamRouter from './Roters/IceCreamRouter'
const app = express()
const port = process.env.PORT || 4001;
require('dotenv').config()

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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
