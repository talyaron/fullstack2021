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
    let { username, password, email } = req.body;
    let played: 0;
    let wins: 0;
    let current_strike: 0;
    let max_strike: 0;
    const newFundleUser = new FundleUser({ username, password, email, played, wins, current_strike, max_strike })
    const result = await newFundleUser.save()

    res.send({ result });
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
});

app.get("/get-user", async (req, res) => {
  try {

    let { username, password } = req.query
    console.log(username, password)

    const userMatch = await FundleUser.find({ username: username, password: password })
    console.log(userMatch)

    if (userMatch) {
      res.send({ user: userMatch })
    }

    else {
      const noPass = await FundleUser.find({ username: username })
      if (noPass) {
        res.send("password doesn't match")
      }
      else {
        res.send("username doesn't exist")
      }
    }

  }
  catch (error) {
    console.log(error.error);
    res.send({ error: error.message })
  }
})


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
