import express from "express";
import mongoose from "mongoose";
import bodyParser from 'body-parser'
import Places from "./model/placesModel";
const cookieParser = require('cookie-parser');
import path from "path";

require('dotenv').config()

console.log(process.env.ENV)
console.log(process.env.JWT_SECRET)

const app = express();
const port = process.env.PORT || 3058;
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false })) //bodyParser

const uri=process.env.MONGODB_URI;


//EJS
app.set('view engine', 'ejs') //connecting ejs
console.log(app.get('view engine'))
app.set('views', path.resolve(__dirname, 'pages'))
app.use(express.static(path.resolve(__dirname, 'public'))) //static folder
console.log(process.env.ENV)

mongoose
  .connect(
    uri
  )
  .then((result) => {
    console.log("connected to db");
    Places.find({})
      .then((res) => {
        // console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  })
  .catch((err) => {
    console.log(err.message);
  });







// import indexRoutes from './routes/indexRoutes'
// app.use('/', indexRoutes)

import placesRoutes from './routes/placesRoutes'
app.use('/places', placesRoutes)

import usersRoutes from './routes/usersRoutes'
app.use('/users', usersRoutes)

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
