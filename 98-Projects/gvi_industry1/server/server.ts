const express = require("express");
import mongoose from 'mongoose';
import CardRoute from "./routes/CardRoute"
const app = express();
require('dotenv').config()
const port = process.env.PORT || 4000;
//socket.io:
import http from 'http';
const server = http.createServer(app);
import {Server} from 'socket.io';
import cors from 'cors';
// pictures storage:
import multer from 'multer'
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

import cookieParser from 'cookie-parser';
import MessageModel from './models/messageModel';


app.use(express.json());

app.use(express.static('client/build'))
app.use("/api/users",CardRoute)
app.use('/api/companies',CardRoute)


console.log(process.env.ENV)
 console.log(process.env.JWT_SECRET);
const cookieParser = require('cookie-parser');
app.use(express.json());
app.use(cookieParser());

const url = process.env.MONGODB_URI

mongoose
    // .set('debug', { shell: true })
    .connect('mongodb+srv://alexroz:T9g3STOIzq3kppvy@cluster0.x62d1.mongodb.net/gvi?retryWrites=true&w=majority')
    .then(() => {
        console.log('connected to Mongoose');
    })
    .catch((err) => {
        console.log('Failed to connect to Mongoose:');
        console.log(err.message);
      
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

import userRouter from './routes/userRoute';
app.use('/api/users', userRouter);

import messageRoute from './routes/messageRoute';
app.use('/api/messages', messageRoute);
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

server.listen(port, () => {
    console.log(`listening on *:${port}`);
});






// app.use(cors());

// app.use(express.static('client/build'))

// io.on("connection", (socket: any) => {
//   console.log('user connected', socket.id)
// });

// server.listen(port, () => {
//   console.log(`listening on *:${port}`);
// });
