import express from 'express';
import mongoose from 'mongoose';


const app = express()
const port = process.env.PORT || 4001;
require('dotenv').config()

const mongodb_uri = process.env.MONGODB_URI
console.log(process.env.ENV)
console.log(process.env.JWT_SECRET)



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
  res.send('Hello World dating app!')
})

import usersRoute from './routes/usersRoute';
app.use('/api',usersRoute)




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

