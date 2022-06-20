const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
export const io = new Server(server);
const port = process.env.PORT || 4000;
var cors = require("cors");


app.use(cors());

app.use(express.static('client/build'))

io.on("connection", (socket: any) => {
  console.log('user connected', socket.id)
});

server.listen(port, () => {
  console.log(`listening on *:${port}`);
});
