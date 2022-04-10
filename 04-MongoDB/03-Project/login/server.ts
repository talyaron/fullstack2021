import express from 'express';
import mongoose from "mongoose";
const app = express();
const port = process.env.PORT || 3000;
const cookieParser = require('cookie-parser');

app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());

mongoose.connect('mongodb+srv://leon93:ym965874632541@cluster0.umet4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
).then(res=>{
    console.log('connected to database');
}).catch(err=>{
    console.log('at mongoose connection error',err);
})


import usersRoutes from './routes/usersRoutes';
app.use('/users',usersRoutes);


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
