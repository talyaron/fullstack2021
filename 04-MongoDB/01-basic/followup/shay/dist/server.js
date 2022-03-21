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
const app = express_1.default();
const port = 3000;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
mongoose_1.default.connect('mongodb+srv://shay:shayFoyer1994@cluster0.xyd5y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
app.get('/', (req, res) => {
    res.send('Hello World!');
});
const UserSchema = new mongoose_1.default.Schema({
    song: String,
    singer: String,
    photo: String,
    year: Number,
    type: String
});
const Songs = mongoose_1.default.model('songs', UserSchema);
app.get('/getSong', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const songs = yield Songs.find({});
        res.send({ ok: true, songs });
    }
    catch (error) {
        console.error(error);
        res.send({ error: 'error in app.get/getSong' });
    }
}));
app.post('/addSong', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { song, singer, type, photo, year } = req.body;
        const newSong = new Songs({ song, singer, type, photo, year });
        const result = yield newSong.save();
        res.send({ ok: true, result });
    }
    catch (error) {
        console.error(error);
        res.send({ error: error.massage });
    }
}));
app.get('/getSongByType', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const rbnb = await Songs.find({type:"rbnb"})
        // const pop = await Songs.find({type:"pop"})
        // const soul = await Songs.find({type:"soul"})
        // const country = await Songs.find({type:"country"})
        // const oldies = await Songs.find({type:"oldies"})
        // const jazz = await Songs.find({type:"jazz"})
        // const all = await Songs.find({type:"all"})
        //   if(rbnb){
        //   res.send({ok:true, rbnb})
        // }
        // else if(pop){
        //   res.send({ok:true, pop})
        // }
        // else if(soul){
        //   res.send({ok:true, soul})
        // }
        // else if(country){
        // res.send({ok:true, country})
        // }
        // else if(oldies){
        //   res.send({ok:true, oldies})
        // }
        // else if(jazz){
        //   res.send({ok:true, jazz})
        // }
        // else{
        //   res.send({ok:true, all})
        // }
        let types = yield Songs.find({});
        res.send({ ok: true, types });
    }
    catch (error) {
        console.log(error.error);
        res.send({ error: error.massage });
    }
}));
app.patch('/updateSong', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { songId, song } = req.body;
        if (songId && song) {
            const users = yield Songs.updateOne({ _id: songId }, { song: song });
            res.send({ ok: true, users });
        }
        else {
            throw new Error("userId or song is missing");
        }
    }
    catch (error) {
        console.log(error.error);
        res.send({ error: error.massage });
    }
}));
app.delete("/deleteSong", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { songId } = req.body;
        console.log(songId);
        if (songId) {
            const users = yield Songs.deleteOne({ _id: songId });
            res.send({ ok: true, users });
        }
        else {
            throw new Error("userId or song is missing");
        }
    }
    catch (error) {
        console.log(error.error);
        res.send({ error: error.massage });
    }
}));
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
