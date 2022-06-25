const express = require("express");
const app = express();
import mongoose from 'mongoose';
// const http = require("http");
// const server = http.createServer(app);
// const { Server } = require("socket.io");
// export const io = new Server(server);
const port = process.env.PORT || 4001;
// var cors = require("cors");
// require('dotenv').config()


// app.use(cors());

app.use(express.static('client/build'))

// io.on("connection", (socket: any) => {
//   console.log('user connected', socket.id)
// });

mongoose.connect(
  "mongodb+srv://igino11:3RSAELQqHEFuwzw9@cluster0.zfewx.mongodb.net/?retryWrites=true&w=majority"
).then(res=>{
  console.log("Connected to DB");
}).catch(err=>{
  console.error(err.message)
});

import routes from './routesMentees/routes'

app.use('/mentees',routes );

// server.listen(port, () => {
//   console.log(`listening on *:${port}`);
// });
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
