import express from 'express';
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes"
import wordRoutes from "./routes/wordRoutes"

const app = express();
const port = process.env.PORT || 3007;
app.use(express.static("public"));
app.use(express.json());
app.use('/users', userRoutes)
app.use('/words', wordRoutes)

const wordsDictionary = require('./dictionary.json');

mongoose.connect('mongodb+srv://michaeldubovik:michaeldubovik1991@cluster0.y9ozg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');


shuffleDictionary(wordsDictionary)

function shuffleDictionary(Dictionary:any) {
  for (let i = 0; i < Dictionary.length; i++) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = Dictionary[i];
      Dictionary[i] = Dictionary[j];
      Dictionary[j] = temp;
  }
}

app.post("add-user");

app.get("get-user")

app.get("get-word")

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
