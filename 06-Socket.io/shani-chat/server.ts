const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);

//connects the server
const { Server } = require("socket.io");
//const io = new Server(server);
const port = process.env.PORT || 4000;
const cors = require("cors");

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});


//app.use(cors());

app.use(express.static('client/build'))
app.get('/', (req, res) => {
  res.send('<h1>Hello world im shani</h1>');
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
 

