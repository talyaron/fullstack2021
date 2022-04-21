import express from 'express';
import mongoose  from 'mongoose';
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json())

import userRoutes from './routes/userRoute'
app.use('/users' ,userRoutes  )

import bookRoutes from './routes/bookRoute'
app.use('/book' , bookRoutes)

mongoose.connect(
  'mongodb+srv://yoelkraitman:zKsfls3e72QE14hB@cluster0.vidf6.mongodb.net/DB-first-work?retryWrites=true&w=majority'
).then(res=>{
  console.log("Connected to DB");
}).catch(err=>{
  console.error(err.message)
});
  
app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});