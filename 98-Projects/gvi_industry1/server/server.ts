import CardRoute from "./routes/CardRoute"
const express = require("express");
import mongoose from 'mongoose';
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
require('dotenv').config();

export const io = new Server(server);
const port = process.env.PORT || 4001;
import cors from "cors";
app.use(cors());

app.use(express.static('public/build'))
app.use(express.json());

app.use(express.json());
app.use(express.static('client/build'))
app.use("/api/users",CardRoute)
app.use('/api/companies',CardRoute)



console.log(process.env.ENV)
 console.log(process.env.JWT_SECRET);
const cookieParser = require('cookie-parser');
app.use(express.json());
app.use(cookieParser());
const URI = process.env.MONGODB_URI;



mongoose.connect(
  ('mongodb+srv://alexroz:T9g3STOIzq3kppvy@cluster0.x62d1.mongodb.net/gvi?retryWrites=true&w=majority')
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

import matchingRoute from './routes/matchingRoute'
app.use('/', matchingRoute)

server.listen(port, () => {
  console.log(`listening on *:${port}`);
});






// app.use(cors());

// app.use(express.static('client/build'))

// io.on("connection", (socket: any) => {
//   console.log('user connected', socket.id)
// });

// server.listen(port, () => {
//   console.log(`listening on *:${port}`);
// });
