const express = require("express");
import mongoose from 'mongoose';
import userRoute from './routes/userRoute'

const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");


export const io = new Server(server);
const port = process.env.PORT || 4001;
var cors = require("cors");
app.use(cors());


app.use(express.json());
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



import userRoute from './Routes/userRoute';
app.use('/api/user',userRoute)





io.on("connection", (socket: any) => {
  console.log('user connected', socket.id)
});


mongoose.connect(
  process.env.MONGODB_URI
)
  .then(() => {
    console.log("connected to Mongoose");
  })
  .catch((err) => {
    console.log("Failed to connect to Mongoose:")
    console.log(err.message);
  });


app.use('/api', userRoute)

server.listen(port, () => {
  console.log(`listening on *:${port}`);
});
