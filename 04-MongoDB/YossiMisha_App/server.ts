import express from 'express';
import mongoose from "mongoose";

const app = express();
const port = process.env.PORT || 3000;
app.use(express.static("public"));
app.use(express.json());

mongoose.connect('mongodb+srv://michaeldubovik:michaeldubovik1991@cluster0.y9ozg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

//create a schema (interface)
const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  wins: String,
  loses: String,
  attempts: String,
})
//create a collection
const BSUser = mongoose.model('battleShipUsers', UserSchema);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
