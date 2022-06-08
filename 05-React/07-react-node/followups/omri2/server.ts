import mongoose from 'mongoose';
import express from 'express';
const app = express();
const port = process.env.PORT || 4002;
require('dotenv').config()
import  blogRoute from "./routes/blogRoute";


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

  app.use('/api/blogs',blogRoute);
  

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});


