import express from "express";
import mongoose from "mongoose";
import Places from "./model/placesModel";
const cookieParser = require('cookie-parser');

// import axios from "axios";
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static("public"));
app.use(express.json());
<<<<<<< HEAD
<<<<<<< HEAD
// mongoose.connect("mongodb+srv://shay:shayFoyer1994@cluster0.xyd5y.mongodb.net/sample_airbnb?retryWrites=true&w=majority");
//mongoose.connect('mongodb+srv://ShaniRom:ynbUaPL3oHZKGl8a@cluster0.vh1hg.mongodb.net/sample_airbnb?retryWrites=true&w=majority');
=======
>>>>>>> main




mongoose
  .connect(
    "mongodb+srv://shay:shayFoyer1994@cluster0.xyd5y.mongodb.net/sample_airbnb?retryWrites=true&w=majority"
=======
app.use(cookieParser());

mongoose
  .connect(
    "mongodb+srv://shay:shayFoyer1994@cluster0.xyd5y.mongodb.net/airbnbProject?retryWrites=true&w=majority"
>>>>>>> main
  )
  .then((result) => {
    console.log("connected to db");
    Places.find({})
      .then((res) => {
<<<<<<< HEAD
<<<<<<< HEAD
        console.log('test')
        console.log(res);
=======
        // console.log(res);
>>>>>>> main
=======
        // console.log(res);
>>>>>>> main
      })
      .catch((err) => {
        console.log(err.message);
      });
  })
  .catch((err) => {
    console.log(err.message);
  });

<<<<<<< HEAD
// const userSchema = new mongoose.Schema({
//   name: String,
//   password: String,
// });
// const Users = mongoose.model("users", userSchema);
// const Places = mongoose.model("listingsAndReviews", PlacesSchema);
// app.get("/getPlaces", async (req, res) => {
//   try {
//     const places = await Places.find({});
//     res.send({ ok: true, places });
//   } catch (error) {
//     console.error(error);
//     res.send({ error: "error in app.get/getPlaces" });
//   }
// });
=======

>>>>>>> main

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






import placesRoutes from './routes/placesRoutes'
app.use('/places', placesRoutes)

import usersRoutes from './routes/usersRoutes'
app.use('/users', usersRoutes)

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
