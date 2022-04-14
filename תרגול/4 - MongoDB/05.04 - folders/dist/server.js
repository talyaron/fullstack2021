"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const mongoose_1 = __importDefault(require("mongoose"));
const PORT = process.env.PORT || 4564;
app.use(express_1.default.static('public')); //static folder
app.use(express_1.default.json());
//DATA CONNECT
try {
    mongoose_1.default.connect("mongodb+srv://KaKa:WO3sm2Hl7eXTMN0Y@cluster0.mfqlq.mongodb.net/fullStackOct2021", () => {
        console.log(`DATA CONNECTED`);
    });
}
catch (err) {
    console.log(err);
}
const index_1 = __importDefault(require("./routes/index"));
app.use('/', index_1.default);
// const bookSchema = new mongoose.Schema({
//     username:String, 
//     password:String, 
//     howMuch:Number,
//   })
//   //create a collection 
//   const User = mongoose.model('users' , bookSchema);
//   import User from '....'
//   const result = await newUser.save();
//LISTEN TO
app.listen(PORT, () => {
    return console.log(`Listening at http://localhost:${PORT}`);
});
