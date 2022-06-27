const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
export const io = new Server(server);
const port = process.env.PORT || 4001;
var cors = require("cors");
app.use(cors());


import mongoose from "mongoose";
app.use(express.static('client/build'))

require('dotenv').config();
console.log(process.env.ENV)
console.log(process.env.JWT_SECRET);
const cookieParser = require('cookie-parser');
app.use(express.json());
app.use(cookieParser());
const MONGODB_URI = process.env.MONGODB_URI;



mongoose.connect(
  MONGODB_URI
).then(res=>{
  console.log("Connected to DB");
}).catch(err=>{
  console.error(err.message)
});



import userRoute from './routes/userRoute';
app.use('/api',userRoute)





io.on("connection", (socket: any) => {
  console.log('user connected', socket.id)
});

server.listen(port, () => {
  console.log(`listening on *:${port}`);
});
