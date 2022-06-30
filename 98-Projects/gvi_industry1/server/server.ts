
import 'dotenv/config';
import express from 'express';
const app = express();
//socket.io:
import http from 'http';
const server = http.createServer(app);
import {Server} from 'socket.io';
import cors from 'cors';
// pictures storage:
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images');
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, Date.now() + path.extname(file.originalname));
    },
});
const upload = multer({storage: storage});
const io = new Server(server, {
    cors: {
        origin: 'https://localhost:3000',
    },
});
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import MessageModel from './models/messageModel';

const port = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI;

app.use(express.static('client/build'))
app.use(cors());
app.use(express.json());
app.use(cookieParser());

mongoose
    // .set('debug', { shell: true })
    .connect(`${MONGODB_URI}`)
    .then(() => {
        console.log('connected to Mongoose');
    })
    .catch((err) => {
        console.log('Failed to connect to Mongoose:');
        console.log(err.message);
        console.log(MONGODB_URI);
    });

io.on('connection', (socket: any) => {
    console.log('user connected', socket.id);
    socket.on('join-room', (data) => {
        socket.join(data);
        console.log(`User with ID: ${socket.id} joined room: ${data}`);
    });

    socket.on('send-message', (data) => {
        console.log(data, 'data, send-message -server.ts');
        const message = new MessageModel({text: data.text, file:data.file, sender: data.sender, recipients: data.recipients, time: data.time});
        message.save();

        let recipients = (data) => {
            let array = [];
            for (let i = 0; i < data.recipients.length; i++) {
                array.push(data.recipients[i].userId);
            }
            return array;
        };
        console.log(recipients(data));

        socket.to(recipients(data)).emit('receive-message', message);
    });
});

import userRouter from './routers/userRouter';
app.use('/api/users', userRouter);

import messageRouter from './routers/messageRouter';
app.post('/images', 
upload.single('image'), 
(req, res) => {
    try { 
        res.send("g")
    } catch (error) {
        console.log(error);
        res.send({error: error.message })
        
    }
})
app.use('/api/messages', messageRouter);

server.listen(port, () => {
    console.log(`listening on *:${port}`);
});
