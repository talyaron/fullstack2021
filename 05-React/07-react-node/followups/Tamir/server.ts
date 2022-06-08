import express from "express";
import mongoose from "mongoose";
const app = express();
const port = process.env.PORT || 4000;
require("dotenv").config();

const mongodb_uri = process.env.MONGODB_URI;

mongoose
  .connect(mongodb_uri)
  .then((res) => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.error(err.message);
  });

const UserSchema = new mongoose.Schema({
  username: String,
  age: String,
});
const User = mongoose.model("new", UserSchema);

app.use(express.json());
app.use(express.static("client/build"));

// app.post("/get-user", async (req, res) => {
//   try {
//     let { username, password } = req.body;

//     const newUser = new User({ username, password });
//     const result = await newUser.save();

//     res.send({ result });
//   } catch (error) {
//     console.error(error);
//     res.send({ error: error.message });
//   }
// });
app.get("/api/text", (req, res) => {
  res.send({ text: "Hello World!" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
