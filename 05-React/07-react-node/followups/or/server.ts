import express from 'express';
import mongoose from 'mongoose';
import ChocolateRoute from './router/CocolateRoute'
const app = express()
const port = process.env.PORT || 4000;
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
  

// app.get('/api', (req, res) => {
//   res.send({text:'Hello World!'})
// })

app.use('/Chocolate',ChocolateRoute)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})