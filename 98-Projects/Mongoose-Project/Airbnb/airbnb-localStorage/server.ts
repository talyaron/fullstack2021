import express from "express";
import mongoose from "mongoose";
import bodyParser from 'body-parser'
import Places from "./model/placesModel";
const cookieParser = require('cookie-parser');
import path from "path";

//cause i want it in all the routes the getId
import{getId} from './middleware/userMid'

require('dotenv').config()

console.log(process.env.ENV)
console.log(process.env.JWT_SECRET)

const app = express();
const port = process.env.PORT || 3000;
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());

//app.use(bodyParser.urlencoded({ extended: false })) //bodyParser
//this is what used to be used now we use express.json. it is a middleware,it puts the parsed data in req.body.needed for POST/PATCH requests cause both are sending data to the server.

app.use(getId);

const uri=process.env.MONGODB_URI;

    //-----for katya
// MONGODB_URI="mongodb+srv://shay:shayFoyer1994@cluster0.xyd5y.mongodb.net/airbnbProject?retryWrites=true&w=majority"

// JWT_SECRET="shhitsasecret"
// ENV=development


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








import placesRoutes from './routes/placesRoutes'
app.use('/places', placesRoutes)

import usersRoutes from './routes/usersRoutes'
app.use('/users', usersRoutes)

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
