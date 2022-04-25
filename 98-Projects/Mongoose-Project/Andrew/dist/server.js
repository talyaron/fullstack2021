"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
require("dotenv/config");
const roomModel_1 = __importDefault(require("./model/roomModel"));
const buffer_1 = require("buffer");
const node_wordnet_1 = __importDefault(require("node-wordnet"));
const wordnet = new node_wordnet_1.default();
const app = express_1.default();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
    cookie: true
});
const secret = process.env.JWT_SECRET;
const port = process.env.PORT || 3000;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
app.use(cookie_parser_1.default());
mongoose_1.default.connect(process.env.MDB_URI).then(res => {
    console.log('connected to DB');
}).catch(err => {
    console.log('At mongoose.connect: ');
    console.error(err.message);
});
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
app.use('/users', userRoutes_1.default);
const DrawRoutes_1 = __importDefault(require("./routes/DrawRoutes"));
app.use('/drawings', DrawRoutes_1.default);
const wordRouts_1 = __importDefault(require("./routes/wordRouts"));
app.use('/words', wordRouts_1.default);
const roomRoutes_1 = __importDefault(require("./routes/roomRoutes"));
const userModel_1 = __importDefault(require("./model/userModel"));
const drawModel_1 = __importDefault(require("./model/drawModel"));
app.use('/rooms', roomRoutes_1.default);
// import { addRoom } from './controllers/roomCont';
app.get('/', (req, res) => {
    res.send('Hello World!');
});
server.listen(port, () => {
    console.log(`server is listening at http://localhost:${port}`);
    //   const a = wordnet.lookup('cat', function(results) {
    //     results.forEach(function(result) {
    //         console.log('------------------------------------');
    //         // console.log(result.synsetOffset);
    //         // console.log(result.pos);
    //         // console.log(result.lemma);
    //         console.log(result.synonyms);
    //         // console.log(result.pos);
    //         // console.log(result.gloss);
    //     });
    // });
    //   console.log(a);
});
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    socket.on('create room', (roomId) => __awaiter(void 0, void 0, void 0, function* () {
        const newRoom = new roomModel_1.default();
        newRoom.roomCode = roomId;
        newRoom.players = 1;
        newRoom.rounds = 2;
        // await newRoom.save()
    }));
    socket.on('join room', (roomId) => __awaiter(void 0, void 0, void 0, function* () {
        const users = yield userModel_1.default.find({ inRoom: roomId });
        let avatarList = [];
        for (const user of users) {
            let avatar = yield drawModel_1.default.findOne({ ownerId: user._id, type: "currentAvatar" });
            if (avatar.imgData) {
                avatar = yield BSONtoString(avatar);
                avatarList.push(avatar);
            }
        }
        io.emit('avatars', avatarList);
    }));
    socket.on('start Draw', (roomId) => __awaiter(void 0, void 0, void 0, function* () {
        // let users = await User.find({ inRoom: roomId })
        // users.forEach(user => {
        //   user = user._id
        // });
        io.emit('gameStart', roomId);
    }));
    socket.on('done drawing', (roomId) => __awaiter(void 0, void 0, void 0, function* () {
        const drawings = yield drawModel_1.default.find({ type: roomId });
        const players = yield userModel_1.default.find({ inRoom: roomId });
        if (drawings.length == players.length) {
            io.emit('show drawings', roomId);
        }
    }));
    socket.on('done lying', (roomId) => __awaiter(void 0, void 0, void 0, function* () {
        const room = yield roomModel_1.default.findOne({ roomCode: roomId });
        const players = yield userModel_1.default.find({ inRoom: roomId });
        if (players.length == (room.lies + 1)) {
            io.emit('show lies', roomId);
        }
    }));
    socket.on('done answering', (roomId) => __awaiter(void 0, void 0, void 0, function* () {
        const room = yield roomModel_1.default.findOne({ roomCode: roomId });
        const players = yield userModel_1.default.find({ inRoom: roomId });
        if (players.length == (room.lies + 1)) {
            io.emit('show lies', roomId);
        }
    }));
});
function BSONtoString(img) {
    if (img) {
        img.dataURL = 'data:image/jpeg;base64,' + buffer_1.Buffer.from(img.imgData).toString();
    }
    return img;
}
// app.listen(port, () => {
//   return console.log(`Express is listening at http://localhost:${port}`);
// });
