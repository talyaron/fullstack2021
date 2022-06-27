import CardRoute from "./routes/CardRoute"
const express = require("express");
const app = express();
// const http = require("http");
// const server = http.createServer(app);
// const { Server } = require("socket.io");
// export const io = new Server(server);
const port = process.env.PORT || 4000;
// var cors = require("cors");
import mongoose from 'mongoose';

app.use(express.static('public/build'))
app.use(express.json());

app.use("/api/users",CardRoute)
app.use('/api/companies',CardRoute)


// mongoose.connect('mongodb+srv://GviMentorMentee:DlOC8kO9pt6jsKoj@cluster0.vbho2.mongodb.net/MentorMentee?retryWrites=true&w=majority')
//     .then(res => {
//         console.log("connected to Mongoose");
//     })
//     .catch((err) => {
//         console.log("Failed to connect to Mongoose:")
//         console.log(err.message);
//     });

// app.listen(port, () => {
//     return console.log(`Express is listening at http://localhost:${port}`);
// });






// app.use(cors());

// app.use(express.static('client/build'))

// io.on("connection", (socket: any) => {
//   console.log('user connected', socket.id)
// });

// server.listen(port, () => {
//   console.log(`listening on *:${port}`);
// });
