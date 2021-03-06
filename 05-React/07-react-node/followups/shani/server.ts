import express from 'express';
import mongoose from 'mongoose';
const app = express()
const port = process.env.PORT || 4001;
require('dotenv').config()

const mongodb_uri = process.env.MONGODB_URI
mongoose.connect('mongodb+srv://ShaniRom:z5iL8lfkx8BADXMN@cluster0.vh1hg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

mongoose.connect(
    mongodb_uri
  ).then(res=>{
    console.log("Connected to DB");
  }).catch(err=>{
    console.error(err.message)
  });

  app.use(express.json())
  app.use(express.static('client/build'))
  

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
