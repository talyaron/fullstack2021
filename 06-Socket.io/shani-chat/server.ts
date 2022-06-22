const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);

//connects the server
const { Server } = require("socket.io");
//const io = new Server(server);
const port = process.env.PORT || 4000;
//const cors = require("cors");

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

;
//app.use(cors());
//why needed if i didnd use it

io.on('connection',(socket)=>{
  console.log('a user is connected')
  console.log(socket.id)

  socket.on('msg',({text})=>{
    console.log(text)
    socket.broadcast.emit('msg',{text});
    //if its io.emit then its sends to everyone and the person who sent it
    //makes it that it sends to everyone except the person who wrote it
    //sends it to the clients
  })
  


socket.on('disconnect',()=>{
console.log('user disconnected')
});
});


app.use(express.static('client/build'))
app.get('/', (req, res) => {
  res.send('<h1>Hello world im shani</h1>');
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
 // the star means it not only listens to the port but to the socket


