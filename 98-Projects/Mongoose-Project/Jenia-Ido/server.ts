import express from 'express';
import mongoose from "mongoose";
const app = express();
<<<<<<< HEAD
const port = process.env.PORT || 3015;
=======
const port = process.env.PORT || 5000;
const cookieParser = require('cookie-parser')

app.use(cookieParser());
>>>>>>> main
app.use(express.static("public"));
app.use(express.json());

mongoose.connect('mongodb+srv://JeniaMayor:1234567890@cluster0.efrng.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
).then(res => {
  console.log("Connected to DB");
}).catch(err => {
  console.log('At mongoose.connect:')
  console.error(err.message)
});;


import userRoute from './routes/userRoute'
import imagesRoute from './routes/imagesRoute'

app.use('/user', userRoute);
app.use('/images', imagesRoute);




app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
