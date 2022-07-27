import 'dotenv/config'
import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
const MONGODB_URI = process.env.MONGODB_URI
const app = express();
const port = process.env.PORT || 4001;

app.use(express.static("public/build"));
app.use(cookieParser())
app.use(express.json());


mongoose
  .connect(
    MONGODB_URI
  )
  .then(() => {
    console.log("connected to Mongoose");
  })
  .catch((err) => {
    console.log("Failed to connect to Mongoose:");
    console.log(err.message);
  });


import userRouter from './router/userRouter';
import articleRouter from './router/articleRouter';
app.use('/api/users', userRouter);
app.use('/api/articles', articleRouter);

console.log(process.env.ENV);


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
