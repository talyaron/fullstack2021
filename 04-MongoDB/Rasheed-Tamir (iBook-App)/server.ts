import express from 'express';
import mongoose from "mongoose";
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static("public"));
app.use(express.json());

mongoose.connect('mongodb+srv://rasheedj966:rashj050880@cluster0.vtqmf.mongodb.net/test?retryWrites=true&w=majority');

app.get('/get', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
