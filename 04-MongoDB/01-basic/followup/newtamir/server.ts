import express from 'express';
import mongoose from 'mongoose';
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static("public"));
app.use(express.json());


mongoose.connect('mongodb+srv://tamirdadon:58TBW6FoKudca2MY@cluster0.ldffz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

app.use(express.static('public'))
app.use(express.json())

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: String,
})

const User = mongoose.model('bestusers', UserSchema)

app.post("/add-user", async (req, res) => {
  try {
    let { username, password } = req.body;

    const newUser = new User({ username, password })
    const result = await newUser.save()

    res.send({ result });
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
});


app.post("/get-users", async (req, res) => {
  try {

    const users = await User.find({})
    res.send({ users });
  } catch (error) {
    console.log(error.error);
    res.send({ error: error.message });
  }
});

app.delete("/delete-user", async (req, res) => {
  const { userId } = req.body;

  if (userId) {
    const users = await User.deleteOne({ _id: userId })
    res.send({ users })
    console.log(users);

  } else {
    console.log('no good');

  }
})


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
