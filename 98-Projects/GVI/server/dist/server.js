"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const mongoose_1 = __importDefault(require("mongoose"));
const test_1 = __importDefault(require("./controllers/uploads/test"));
const app = express();
require('dotenv').config();
const port = process.env.PORT || 4000;
//socket.io:
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer(app);
const socket_io_1 = require("socket.io");
const io = new socket_io_1.Server(server, {
    cors: {
        origin: 'https://localhost:3000',
    },
});
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const messageModel_1 = __importDefault(require("./models/messageModel"));
app.use(express.json());
app.use(express.static('client/build'));
console.log(process.env.ENV);
console.log(process.env.JWT_SECRET);
app.use(express.json());
app.use(cookie_parser_1.default());
const url = process.env.MONGODB_URI;
mongoose_1.default
    .connect(url)
    .then(() => {
    test_1.default();
    console.log('connected to Mongoose');
})
    .catch((err) => {
    console.log('Failed to connect to Mongoose:');
    console.log(err.message);
});
io.on('connection', (socket) => {
    console.log('user connected', socket.id);
    socket.on('join-room', (data) => {
        const { sender } = data;
        const { userList } = data;
        let recipients = (userList) => {
            let array = [sender.userId];
            for (let i = 0; i < userList.length; i++) {
                if (userList[i]._id) {
                    array.push(userList[i]._id);
                }
                if (userList[i].userId) {
                    array.push(userList[i].userId);
                }
            }
            return array;
        };
        socket.leaveAll();
        socket.join(recipients(userList));
    });
    socket.on('send-message', (data) => {
        const message = new messageModel_1.default({ text: data.text, file: data.file, sender: data.sender, recipient: data.recipient, time: data.time });
        message.save();
        socket.to(data.recipient.userId).emit('receive-message', message);
    });
});
const profileRoute_1 = __importDefault(require("./routes/profileRoute"));
app.use('/api/profile', profileRoute_1.default);
const initiativesRoute_1 = __importDefault(require("./routes/initiativesRoute"));
app.use('/api/initiatives', initiativesRoute_1.default);
const userRoute_1 = __importDefault(require("./routes/userRoute"));
app.use('/api/users', testServer, userRoute_1.default);
const messageRoute_1 = __importDefault(require("./routes/messageRoute"));
app.use('/api/messages', messageRoute_1.default);
function testServer(req, res, next) {
    console.log('test server');
    next();
}
server.listen(port, () => {
    console.log(`listening on *:${port}`);
});
