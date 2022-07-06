const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const server = http.createServer(app);
const io = new Server(server);
const port = process.env.PORT || 4000;

app.use(express.static("client/build"));
app.use(express.json());

io.on('connection', (socket) => {
  socket.on("user-join", ({ userName, roomId }) => {
    console.log(`${userName} join to ${roomId}`)
    if (roomId) {
      socket.join(roomId)
      console.log(`${userName} join to ${roomId}`)
    }
  })

  socket.on("user-msg", ({ roomId, userName, userMsg }) => {
    console.log(`user ${userName} send ${userMsg}`)
    io.to(roomId).emit("get-back-msg", { userName, userMsg })
  })

  socket.on("user-leave", ({ roomId, userName }) => {
    console.log(`${userName} lived the room`)
    socket.leave(roomId);
  })
});

server.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});

