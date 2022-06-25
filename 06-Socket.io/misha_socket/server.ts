import express from 'express';
import mongoose from 'mongoose';
const app = express()
const port = process.env.PORT || 4000;
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

require('dotenv').config()


//routes
import userRouter from './routes/UserRouters'

const mongodb_uri = process.env.MONGODB_URI

io.on('connection', socket => {
  socket.emit('msg', 'Hello-World')

  socket.on('msg', data => {
    console.log(data)
})
})


mongoose.connect(
    mongodb_uri
  ).then(res=>{
    console.log("Connected to DB");
  }).catch(err=>{
    console.error(err.message)
  });

  app.use(express.json())
  app.use(express.static('client/build'))
  

app.use('/api', userRouter)

app.get('/api', (req, res) => {
  res.send({text: 'Hello World!'})
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})