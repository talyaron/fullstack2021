import express from "express";
import mongoose from 'mongoose';
const app = express();
const port: number = 3000;

app.use(express.static("public"));
app.use(express.json());

mongoose.connect('mongodb+srv://chaim14:82148214@cluster0.ar8tn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

const UserSchema = new mongoose.Schema({
  username:String,
  password:String
})

const User = mongoose.model('bestusers', UserSchema);


app.post("/add-user", async (req, res) => {
  try {
    let { username, password } = req.body;

    const newUser = new User({username, password})
    const result = await newUser.save()

    res.send({ result });
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
