import express from 'express';
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes"
import wordRoutes from "./routes/wordRoutes"

require('dotenv').config()

console.log(process.env.ENV)

const cookieParser = require('cookie-parser')

const app = express();
const port = process.env.PORT || 3001;
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());

app.use('/users', userRoutes)
app.use('/words', wordRoutes)


// mongoose.connect('mongodb+srv://asnafy:ZyTcRnGlhXYqaYjE@cluster0.xgv3d.mongodb.net/fundle?retryWrites=true&w=majority');
const uri:any = process.env.MONGODB;
mongoose.connect(uri);


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});


