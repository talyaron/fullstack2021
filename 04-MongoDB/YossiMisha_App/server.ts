import express from 'express';
import mongoose from "mongoose";

const app = express();
const port = process.env.PORT || 3000;
app.use(express.static("public"));
app.use(express.json());

mongoose.connect('mongodb+srv://michaeldubovik:michaeldubovik1991@cluster0.y9ozg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');


const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  played: Number,
  wins: Number,
  current_strike: Number,
  max_strike: Number,
})

const FundleUser = mongoose.model('FundleUsers', UserSchema);

app.post("/add-user", async (req, res) => {
  try {
    let { username, password, email} = req.body;
    console.log(req.body)
    const newGuitar = new FundleUser({ username, password, email})
    const result = await newGuitar.save()

    res.send({ result });
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
});

app.get("/get-user", async (req, res) => {
  try {
    let {username, password} = req.body
    const user = await FundleUser.find({username: username, password: password})
    res.send(user)

  }
  catch (error) {
    console.log(error.error);
    res.send({ error: error.message })
  }
})


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
