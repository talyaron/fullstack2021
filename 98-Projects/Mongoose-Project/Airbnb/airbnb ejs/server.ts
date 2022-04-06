import express from "express";
import mongoose from "mongoose";
import bodyParser from 'body-parser'
import Places from "./model/placesModel";
const cookieParser = require('cookie-parser');
import path from "path";
// import axios from "axios";
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false })) //bodyParser


//EJS
app.set('view engine', 'ejs') //connecting ejs
console.log(app.get('view engine'))
app.set('views', path.resolve(__dirname, 'pages'))
app.use(express.static(path.resolve(__dirname, 'public'))) //static folder


mongoose
  .connect(
    "mongodb+srv://shay:shayFoyer1994@cluster0.xyd5y.mongodb.net/airbnbProject?retryWrites=true&w=majority"
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



// app.post("/addUsers", async (req, res) => {
//   try {
//     let { user, password } = req.body;
//     const newUser = new Users({ user, password });
//     const result = await newUser.save();
//     res.send({ ok: true, result });
//   } catch (error) {
//     console.error(error);
//     res.send({ error: error.massage });
//   }
// });




import indexRoutes from './routes/indexRoutes'
app.use('/', indexRoutes)

import placesRoutes from './routes/placesRoutes'
app.use('/places', placesRoutes)

import usersRoutes from './routes/usersRoutes'
app.use('/users', usersRoutes)

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
