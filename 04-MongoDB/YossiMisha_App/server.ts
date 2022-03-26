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

const BSUser = mongoose.model('WordleUsers', UserSchema);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
