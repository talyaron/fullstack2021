import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import { format } from 'path';
const app = express()

const port = process.env.PORT || 4000;

const mongodb_uri = process.env.MONGODB_URI;
mongoose
.connect(mongodb_uri)
.then(res=>{
    console.log("Connected to DB");
  })
  .catch(err=>{
    console.error(err.message)
  });
  app.use(express.json());
 app.use(express.static('my-app/build'));
  
  import blogRoute from './routs/blogRoute';
app.use("/api/blogs", blogRoute);
 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


