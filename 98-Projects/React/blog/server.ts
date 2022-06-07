import express from 'express';
import mongoose from 'mongoose';
const app = express();
const port = process.env.PORT || 4000;

app.use(express.static('/bblog/build'))
app.use(express.json());
require('dotenv').config()

const mongodb_uri = process.env.MONGODB_URI;

import blogRoute from './Routes/blogRoute';


app.use("/api/blogs",blogRoute);


mongoose.connect(
    mongodb_uri
  ).then(res=>{
    console.log("Connected to DB");
  }).catch(err=>{
    console.error(err.message)
  });



app.listen(port, () => {
return console.log(`Express is listening at http://localhost:${port}`);
});



