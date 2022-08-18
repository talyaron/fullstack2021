const express = require('express');
import mongoose from 'mongoose';
import cloudinaryTest from './controllers/uploads/test'
const app = express();
require('dotenv').config();
const port = process.env.PORT || 4001;
//socket.io:
import http from 'http';
const server = http.createServer(app);
import {Server} from 'socket.io';
const io = new Server(server, {
    cors: {
        origin: 'https://localhost:3000',
    },
});

import cookieParser from 'cookie-parser';
import MessageModel from './models/messageModel';

app.use(express.json());

app.use(express.static('client/build'));
console.log(process.env.ENV);
console.log(process.env.JWT_SECRET);

app.use(express.json());
app.use(cookieParser());

const url = process.env.MONGODB_URI;


mongoose
    .connect(url)
    .then(() => {
        cloudinaryTest()
        console.log('connected to Mongoose');
    })
    .catch((err) => {
        console.log('Failed to connect to Mongoose:');
        console.log(err.message);
    });

io.on('connection', (socket: any) => {
    console.log('user connected', socket.id);
    socket.on('join-room', (data) => {
        const {sender} = data;
        const {userList} = data;
        
        let recipients = (userList) => {

            let array = [sender.userId];
            for (let i = 0; i < userList.length; i++) {
                if(userList[i]._id){
                    array.push(userList[i]._id);
                }
                if(userList[i].userId){
                    array.push(userList[i].userId);
                }
            }
            
            return array;
        };

        socket.leaveAll();
        socket.join(recipients(userList));
        
    });

    socket.on('send-message', (data) => {
        const message = new MessageModel({text: data.text, file: data.file, sender: data.sender, recipient: data.recipient, time: data.time});
        message.save();
        socket.to(data.recipient.userId).emit('receive-message', message);
    });
});



import profileRouter from './routes/profileRoute';
app.use('/api/profile', profileRouter);

import initiativesRouter from './routes/initiativesRoute';
app.use('/api/initiatives', initiativesRouter);

import userRoute from './routes/userRoute';
app.use('/api/users',testServer, userRoute);

import messageRoute from './routes/messageRoute';
app.use('/api/messages', messageRoute);


function testServer(req, res, next){
    console.log('test server')
    next()
}




server.listen(port, () => {
    console.log(`listening on *:${port}`);
});
