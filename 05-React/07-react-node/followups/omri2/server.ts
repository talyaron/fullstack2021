import mongoose from 'mongoose';
import express from 'express';
const app = express();
const port = process.env.PORT || 4001;
require('dotenv').config()


const mongodb_uri = process.env.MONGODB_URI

mongoose.connect(
    mongodb_uri
  ).then(res=>{
    console.log("Connected to DB");
  }).catch(err=>{
    console.error(err.message)
  });
  
  app.use(express.json());
  app.use(express.static('client/build'));
  

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});

// MONGODB_URI=mongodb+srv://OmriAharonov:m6N0TYplJCf0dnqP@cluster0.kv5s6.mongodb.net/ReactDB1?retryWrites=true&w=majority
