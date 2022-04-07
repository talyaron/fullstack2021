import express from 'express';
import mongoose from "mongoose";

const app = express();
const port = process.env.PORT || 3005;
app.use(express.static("public"));
app.use(express.json());

// const dictionary = require('./dictionary.json'); 
// console.log(dictionary)
mongoose.connect('mongodb+srv://michaeldubovik:michaeldubovik1991@cluster0.y9ozg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
