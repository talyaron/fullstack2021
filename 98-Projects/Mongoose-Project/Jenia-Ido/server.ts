import express from 'express';
// import mongoose from "mongoose";
const app = express();
const port = process.env.PORT || 3003;
app.use(express.static("public"));
app.use(express.json());

app.patch('/get-addNewUser', (req, res) => {
  const newUser = req.body
  console.log(newUser);
  
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
