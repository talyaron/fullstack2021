import express from 'express';
import mongoose from 'mongoose';
const app = express()

// const { Server } = require("socket.io");
// export const io = new Server(server);
const port = process.env.PORT || 4000;
require('dotenv').config()

// var cors = require("cors");


// app.use(cors());

app.use(express.static('client/build'))

// io.on("connection", (socket: any) => {
//   console.log('user connected', socket.id)
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

mongoose.connect(
  "mongodb+srv://igino11:3RSAELQqHEFuwzw9@cluster0.zfewx.mongodb.net/?retryWrites=true&w=majority"
).then(res=>{
  console.log("Connected to DB");
}).catch(err=>{
  console.error(err.message)
});
