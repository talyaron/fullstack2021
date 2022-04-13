import express from 'express';
import mongoose from 'mongoose'; // I change this because it's Ts and not a JS .. before it was const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3057;

app.use(express.static("public"));
app.use(express.json());

mongoose.connect('mongodb+srv://yoelkraitman:6XETjeOW2tqNIMHU@cluster0.vidf6.mongodb.net/DB-first-work?retryWrites=true')
  .then(() => console.log('connected to data base'))
  .catch(err => console.log("error in the dataBase", err.message))


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

// async function getBooks(){
//   let result = User
// } 
