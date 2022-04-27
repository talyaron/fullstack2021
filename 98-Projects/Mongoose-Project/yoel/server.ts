require('dotenv').config() //24/4/2022
//console.log(process.env); //24/4/2022 // if we will print it we can see that we have there the secret JWR_ SECRET = ****;
//so if we want tp print only then secret = 
//console.log(process.env.JWT_SECRET) 24/4/2022

import {getId} from './middleware/users'//26/04/2022
import express from 'express';
import mongoose  from 'mongoose'; 
const cookieParser = require('cookie-parser')
const app = express();
const port = 3000;
app.use(cookieParser());// if not write it we not get the cookie 
app.use(express.static('public'));
app.use(express.json())
app.use(getId)//26/04/2022

import userRoutes from './routes/userRoute'
app.use('/user' ,userRoutes  )

import bookRoutes from './routes/bookRoute'
app.use('/book' , bookRoutes)
const uri = process.env.MONGODB_URI;
mongoose.connect(
  uri
).then(res=>{
  console.log("Connected to DB");
}).catch(err=>{
  console.error(err.message)
});
  
app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});