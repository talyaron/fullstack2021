"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const placesModel_1 = __importDefault(require("./model/placesModel"));
const cookieParser = require('cookie-parser');
// import axios from "axios";
const app = express_1.default();
const port = process.env.PORT || 3001;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
app.use(cookieParser());
mongoose_1.default
    .connect("mongodb+srv://shay:shayFoyer1994@cluster0.xyd5y.mongodb.net/airbnbProject?retryWrites=true&w=majority")
    .then((result) => {
    console.log("connected to db");
    placesModel_1.default.find({})
        .then((res) => {
        console.log('test');
        console.log(res);
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
