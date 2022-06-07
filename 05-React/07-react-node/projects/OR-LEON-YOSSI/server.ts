
import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/UserRouters'
const app = express();
const port = process.env.PORT || 4001;

require('dotenv').config()

app.use(express.static('public/build'))
app.use(express.json());
app.use('/api', userRouter)

const mongodb_uri = process.env.MONGODB_URI

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