"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const placesModel_1 = __importDefault(require("./model/placesModel"));
const cookieParser = require('cookie-parser');
const userMid_1 = require("./middleware/userMid");
require('dotenv').config();
console.log(process.env.ENV);
console.log(process.env.JWT_SECRET);
const app = express_1.default();
const port = process.env.PORT || 3058;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
app.use(cookieParser());
app.use(userMid_1.getId);
const uri = process.env.MONGODB_URI;
//-----for mongo contact shay for access
mongoose_1.default
    .connect(uri)
    .then((result) => {
    console.log("connected to db");
    placesModel_1.default.find({})
        .then((res) => {
    })
        .catch((err) => {
        console.log(err.message);
    });
})
    .catch((err) => {
    console.log(err.message);
});
const placesRoutes_1 = __importDefault(require("./routes/placesRoutes"));
app.use('/places', placesRoutes_1.default);
const usersRoutes_1 = __importDefault(require("./routes/usersRoutes"));
app.use('/users', usersRoutes_1.default);
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
