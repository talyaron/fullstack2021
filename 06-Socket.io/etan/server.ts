import express from 'express';
import http from 'http';
import cors from "cors";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
export const io = new Server(server,{
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    },
  });
const port = process.env.PORT || 4000;


app.use(cors());

app.use(express.static('public/build'))

    io.on("connection", (socket:any) => {
        console.log(`User connected: ${socket.id}`);
    
        socket.on("join_room", (data:any) => {
            socket.join(data);
            console.log(`User with ID: ${socket.id} joined room: ${data}`);
          });
        
          socket.on("send_message", (data:any) => {
            socket.to(data.newMessage.address).emit("receive_message", data);
            console.log(data, 'data');
            
          });

    socket.on('disconnect', () => {
        console.log("User Disconnected", socket.id);
    });
  });
server.listen(port, () => {
    console.log(`listening on *:${port}`);
  });