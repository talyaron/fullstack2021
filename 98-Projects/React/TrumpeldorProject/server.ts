import express from 'express';
import mongoose from 'mongoose';
const app = express()
const port = process.env.PORT || 4000;
require('dotenv').config()

const mongodb_uri = "mongodb+srv://AdiPaz:AdiPaz1234@cluster0.vbho2.mongodb.net/?retryWrites=true&=majority"

mongoose.connect(
    mongodb_uri
  ).then(res=>{
    console.log("Connected to DB");
  }).catch(err=>{
    console.error(err.message)
  });

  app.use(express.json())
  app.use(express.static('client/build'))
  



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



