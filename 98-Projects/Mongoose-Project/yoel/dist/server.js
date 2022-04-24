"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config(); //24/4/2022
//console.log(process.env); //24/4/2022 // if we will print it we can see that we have there the secret JWR_ SECRET = ****;
//so if we want tp print only then secret = 
//console.log(process.env.JWT_SECRET) 24/4/2022
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cookieParser = require('cookie-parser');
const app = express_1.default();
const port = 3000;
app.use(cookieParser()); // if not write it we not get the cookie 
app.use(express_1.default.static('public'));
app.use(express_1.default.json());
const userRoute_1 = __importDefault(require("./routes/userRoute"));
app.use('/user', userRoute_1.default);
const bookRoute_1 = __importDefault(require("./routes/bookRoute"));
app.use('/book', bookRoute_1.default);
const uri = process.env.MONGODB_URI;
mongoose_1.default.connect(uri).then(res => {
    console.log("Connected to DB");
}).catch(err => {
    console.error(err.message);
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
