import 'dotenv/config'
import express from 'express';
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
const MONGODB_URI = process.env.MONGODB_URI
import http from 'http';
import cors from 'cors';
import {Server} from 'socket.io';

const port = process.env.PORT || 4000;
const app = express();
const server = http.createServer(app);
export const io = new Server(server, {
    cors: {
        origin: `http://localhost:3000`,
        methods: ['GET', 'POST'],
    },
});

app.use(cors());
app.use(express.json());
app.use(cookieParser())
app.use(express.static('public/build'));

const clientListGetter = async () => {
    try {
        const promise = await io.allSockets();
        // console.log(promise,'promise');
        const arr = Array.from(promise);
        // console.log(arr, 'arr');

        return arr;
    } catch (error) {
        console.log(error);
    }
};

io.on('connection', async (socket: any) => {
    try {
        console.log(`User connected: ${socket.id}`);
        const result = clientListGetter();
        socket.on('connection', async (data: any) => {
            if (data) {
                console.log(data);
            }
            // socket.emit('connection', await result);
        });
        socket.emit('connection', await result);
        socket.on('set-user', (data: any) => {
            try {
                console.log(data);
                if(!data) throw new Error('no data set-user');
                console.log(data,'data');
                console.log('user join');
                socket.id = data.username;
                console.log(`User with ID: ${socket.id} joined room: ${data.username}`);
            } catch (error) {
                console.log(error);
                // socket.emit(error)
            }
        });
        socket.on('join_room', (data: any) => {
            console.log('room join');
            socket.join(data);
            console.log(`User with ID: ${socket.id} joined room: ${data}`);
        });

        socket.on('send_message', (data: any) => {
            socket.to(data.newMessage.address).emit('receive_message', data);
            console.log(data, 'data');
        });

        socket.on('disconnect', () => {
            console.log('User Disconnected', socket.id);
        });
    } catch (error) {
        console.log(error);
    }
});

mongoose
  .connect(
    `${MONGODB_URI}`
  )

  .then(() => {
    console.log("connected to Mongoose");
  })
  .catch((err) => {
    console.log("Failed to connect to Mongoose:")
    console.log(err.message);
    console.log(MONGODB_URI);
    
  });

  
import userRoutes from './routers/userRouter';
app.use('/api/users', userRoutes);

server.listen(port, () => {
    console.log(`listening on *:${port}`);
});
