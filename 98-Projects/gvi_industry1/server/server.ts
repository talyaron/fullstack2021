const express = require("express");
import mongoose from 'mongoose';

const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");


export const io = new Server(server);
const port = process.env.PORT || 4000;
var cors = require("cors");
require('dotenv').config()


const mongodb_uri = process.env.MONGODB_URI

app.use(cors());
app.use(express.static('public/build'))
app.use(express.json());


io.on("connection", (socket: any) => {
  console.log('user connected', socket.id)
});


mongoose.connect(
  mongodb_uri
)
  .then(() => {
      console.log("connected to Mongoose");
  })
  .catch((err) => {
      console.log("Failed to connect to Mongoose:")
      console.log(err.message);
  });


app.get('/', (req, res) => {
  res.send('hello world')
})

server.listen(port, () => {
  console.log(`listening on *:${port}`);
});
