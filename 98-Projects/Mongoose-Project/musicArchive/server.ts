import express from 'express';
import mongoose from "mongoose";
import color from "colors";
const app = express();
const cookieParser = require('cookie-parser')
const port = process.env.PORT || 3003;


app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());


// const http = require("http")
// console.log(http.STATUS_CODES);


mongoose.connect('mongodb+srv://alexroz:Uou8wsRDp2J0FImM@cluster0.x62d1.mongodb.net/soundArchive?retryWrites=true&w=majority')

import userRoute from "./routes/userRoute";
app.use("/soundUser", userRoute);

import soundRoute from "./routes/soundRoute";
app.use("/sounds", soundRoute)




// app.get('/', (req, res) => {
//   console.log(req.headers)
//   console.log(req.ip)
//   console.log(req.url)
//   console.log(req.method)
//   console.log(req.protocol)
//   console.log(req.body)
//   console.log(req.path)
//   console.log(req.query)
//   console.log(req.subdomains)
//   console.log(req.params)
//   res.status(404).end();
// });


app.listen(port, () => {
  return console.log(color.bgYellow.black(`Express is listening at http://localhost:${port}`));
});
