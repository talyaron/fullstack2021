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

mongoose.connect('mongodb+srv://igino11:kktgqbLMCE3mtTN6@cluster0.zfewx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

app.post('/get-addNewUser', async (req, res) => {
  const {newUser} = req.body;
  const newImgs = {email:newUser.email , password:newUser.password , url:['https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png']}
  const user = new User(newUser)
  const userImgs = new Images(newImgs)
  const addNewUser = await user.save()
  const addNewUserImgs = await userImgs.save()
  console.log(userImgs);
  console.log(user);
  res.send(userImgs);
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
