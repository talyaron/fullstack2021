import express from 'express';
import mongoose from 'mongoose';
const app = express()
const port = process.env.PORT || 4001;
// require('dotenv').config()

app.use(express.static('public/build'))

// const mongodb_uri = process.env.MONGODB_URI

mongoose.connect(
   "mongodb+srv://AdiPaz:u2Hr1GoKaCY6spZZ@cluster0.vbho2.mongodb.net/?retryWrites=true&w=majority"
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



