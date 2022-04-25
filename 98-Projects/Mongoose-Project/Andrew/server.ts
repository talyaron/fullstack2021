import express from 'express';
import mongoose from "mongoose";
import cookieParser from 'cookie-parser';
import 'dotenv/config'
import Room from "./model/roomModel";
import ShortUniqueId from 'short-unique-id';
import { Buffer } from 'buffer';
import WordNet from 'node-wordnet';
import Word from "./model/wordModel";


const wordnet = new WordNet()


const app = express();

const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cookie: true
});
const secret = process.env.JWT_SECRET;

const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());


mongoose.connect(process.env.MDB_URI).then(res => {
  console.log('connected to DB');
}).catch(err => {
  console.log('At mongoose.connect: ');
  console.error(err.message);
})

import userRoutes from './routes/userRoutes'
app.use('/users', userRoutes)

import drawRoutes from './routes/DrawRoutes'
app.use('/drawings', drawRoutes)

import wordRoutes from './routes/wordRouts'
app.use('/words', wordRoutes)

import roomRoutes from './routes/roomRoutes'
import User from './model/userModel';
import Drawing from './model/drawModel';
app.use('/rooms', roomRoutes)
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
  socket.on('create room', async (roomId) => {
    const newRoom = new Room()
    newRoom.roomCode = roomId;
    newRoom.players = 1;
    newRoom.rounds = 2;
    // await newRoom.save()

  });
  socket.on('join room', async (roomId) => {
    const users = await User.find({ inRoom: roomId })
    let avatarList = [];
    for (const user of users) {
      let avatar: any = await Drawing.findOne({ ownerId: user._id, type: "currentAvatar" })
      if (avatar.imgData) {
        avatar = await BSONtoString(avatar);
        avatarList.push(avatar);
      }
    }
    io.emit('avatars', avatarList,);
  });
  socket.on('start Draw', async (roomId) => {
    // let users = await User.find({ inRoom: roomId })
    // users.forEach(user => {
    //   user = user._id
    // });
    io.emit('gameStart', roomId)
  });
  socket.on('done drawing', async (roomId) => {
    const drawings = await Drawing.find({ type: roomId });
    const players = await User.find({ inRoom: roomId });
    if (drawings.length == players.length) {
      io.emit('show drawings', roomId)
    }

  })
  socket.on('done lying', async (roomId) => {
    const room: any = await Room.findOne({ roomCode: roomId });
    const players = await User.find({ inRoom: roomId });
    if (players.length == (room.lies+1)) {
      io.emit('show lies', roomId)
    }

  })
  socket.on('done answering', async (roomId) => {
    const room: any = await Room.findOne({ roomCode: roomId });
    const players = await User.find({ inRoom: roomId });
    if (players.length == (room.lies+1)) {
      io.emit('show lies', roomId)
    }

  })

});

function BSONtoString(img) {
  if (img) {
    img.dataURL = 'data:image/jpeg;base64,' + Buffer.from(img.imgData).toString()
  }
  return img;
}

// app.listen(port, () => {
//   return console.log(`Express is listening at http://localhost:${port}`);
// });

