import 'dotenv/config';
import express from 'express';
const app = express();
import http from 'http';
const server = http.createServer(app);
import {Server} from 'socket.io';
export const io = new Server(server);
import cors from 'cors';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
const port = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI;

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.static('public/build'));

io.on('connection', (socket: any) => {
    console.log('user connected', socket.id);
});

mongoose
    .set('debug', {shell: true})
    .connect(`${MONGODB_URI}`)
    .then(() => {
        console.log('connected to Mongoose');
    })
    .catch((err) => {
        console.log('Failed to connect to Mongoose:');
        console.log(err.message);
        console.log(MONGODB_URI);
    });

import userRouter from './routers/userRouter';
app.use('/api/users', userRouter);

import messageRouter from './routers/messageRouter';
app.use('/api/messages', messageRouter);

server.listen(port, () => {
    console.log(`listening on *:${port}`);
});
