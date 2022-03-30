import express from "express";
import mongoose from "mongoose";
import Places from "./model/placesModel";
// import axios from "axios";
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static("public"));
app.use(express.json());




mongoose
  .connect(
    "mongodb+srv://shay:shayFoyer1994@cluster0.xyd5y.mongodb.net/sample_airbnb?retryWrites=true&w=majority"
  )
  .then((result) => {
    console.log("connected to db");
    Places.find({}).limit(10)
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






import userRoutes from './routes/placesRoutes'
app.use('/places', userRoutes)

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
