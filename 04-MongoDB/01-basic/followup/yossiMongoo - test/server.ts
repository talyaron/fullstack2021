import express from "express";
import mongoose from 'mongoose';
const app = express();
const port: number = 3002;

app.use(express.static("public"));
app.use(express.json());


mongoose.connect('mongodb+srv://asnafy:AS8oeaVFbMLK3Wop@cluster0.xgv3d.mongodb.net/yossi-test?retryWrites=true&w=majority');

//create a schema (interface)
const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: String,
  img: String
})
//create a collection
const User = mongoose.model('user', UserSchema);



app.post("/add-user", async (req, res) => {
  try {
    let { username, password, role, img } = req.body;
    if (username && password && role && img) {
      const newUser = new User({ username, password, role, img })
      const result = await newUser.save()

      res.send({ result });
    }
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
});


app.get('/get-all-users', async (req, res) => {
  const users = await User.find({})
  res.send(users);
});

app.get('/get-user-by-role', async (req, res) => {
  const users = await User.find({ role: 'privet' })
  res.send(users);
});


app.patch('/update-user-role', async (req, res) => {
  const { userId, role } = req.body;
  const users = await User.updateOne({ _id: userId }, { role: role })
  res.send(users);
})

app.patch('/update-user-name', async (req, res) => {
  const { userId, username } = req.body;
  const users = await User.updateOne({ _id: userId }, { username: username })
  res.send(users);
})

app.delete('/delete-user', async (req, res) => {
  const {userId} = req.body;

  const users = await User.deleteOne({ _id: userId });
  res.send(users)
})


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
