import express from 'express';
import mongoose from "mongoose";
const app = express();
const port = process.env.PORT || 3005;
app.use(express.static("public"));
app.use(express.json());

const imageSchema = new mongoose.Schema({
  url:[String],
  email:String,
  password:String,
})

const userSchema = new mongoose.Schema({
  firstName: String,
    lastName: String,
    birthday: String,
    country: String,
    password: String,
    email: String,
    gender: String,
})
const User = mongoose.model('Users',userSchema);
const Images = mongoose.model('images',imageSchema);

app.patch('/get-addNewUser', (req, res) => {
  const {newUser} = req.body;
  const user = new User(newUser)
  const newImgs = {}
  // console.log(newUser);
  console.log(user);
  
  
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
