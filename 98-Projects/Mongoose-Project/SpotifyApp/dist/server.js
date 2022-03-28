"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const colors_1 = __importDefault(require("colors"));
const app = express_1.default();
const port = process.env.PORT || 3000;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
mongoose_1.default.connect('mongodb+srv://alexroz:Uou8wsRDp2J0FImM@cluster0.x62d1.mongodb.net/songsApp?retryWrites=true&w=majority');
const userRoute_1 = __importDefault(require("./routes/userRoute"));
app.use("/songsUser", userRoute_1.default);
// import songRoute from "./routes/songsRoute";
// app.use()
// const UserSchema = new mongoose.Schema({
//   searches: String,
//   topGenres: String,
//   })
// const spotifyApi = new mongoose.Schema({
//   })
// const User = mongoose.model('userdata', UserSchema)
// const spotify = mongoose.model('spotifydata', spotifyApi)
// app.get('/get-music', async (req,res)=>{
// const musicArchive = await songs.find({});
// res.send({ok:true, musicArchive})
// });
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(port, () => {
    return console.log(colors_1.default.bgYellow.black(`Express is listening at http://localhost:${port}`));
});
