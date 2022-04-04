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
    "mongodb+srv://tal1:bBUfBx5gqnXHhpFa@tal-test1.m39if.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to db");
    
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






import userRoutes from './routes/placesRoutes'
app.use('/places', userRoutes)

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
