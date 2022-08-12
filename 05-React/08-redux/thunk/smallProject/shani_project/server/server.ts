import express from 'express';
import mongoose from 'mongoose';
const app = express();
const port = process.env.PORT || 4001;
require('dotenv').config()

app.use(express.static('public/build'))
app.use(express.json());
const uri=process.env.MONGODB_URI;

mongoose
  .connect(
    uri
  )
  .then((result) => {
    console.log("connected to db");
 
    
  })
  .catch((err) => {
    console.log(err.message);
  });



import chatRoutes from './routes/chatRoute'
app.use('/chat', chatRoutes)

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});

