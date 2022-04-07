"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const placesModel_1 = __importDefault(require("./model/placesModel"));
const cookieParser = require('cookie-parser');
const path_1 = __importDefault(require("path"));
require('dotenv').config();
console.log(process.env.ENV);
console.log(process.env.JWT_SECRET);
const app = express_1.default();
const port = process.env.PORT || 3000;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
app.use(cookieParser());
app.use(body_parser_1.default.urlencoded({ extended: false })); //bodyParser
//EJS
app.set('view engine', 'ejs'); //connecting ejs
console.log(app.get('view engine'));
app.set('views', path_1.default.resolve(__dirname, 'pages'));
app.use(express_1.default.static(path_1.default.resolve(__dirname, 'public'))); //static folder
mongoose_1.default
    .connect("mongodb+srv://shay:shayFoyer1994@cluster0.xyd5y.mongodb.net/airbnbProject?retryWrites=true&w=majority")
    .then((result) => {
    console.log("connected to db");
    placesModel_1.default.find({})
        .then((res) => {
        // console.log(res);
    })
        .catch((err) => {
        console.log(err.message);
    });
})
    .catch((err) => {
    console.log(err.message);
});
// app.post("/addUsers", async (req, res) => {
//   try {
//     let { user, password } = req.body;
//     const newUser = new Users({ user, password });
//     const result = await newUser.save();
//     res.send({ ok: true, result });
//   } catch (error) {
//     console.error(error);
//     res.send({ error: error.massage });
//   }
// });
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
app.use('/', indexRoutes_1.default);
const placesRoutes_1 = __importDefault(require("./routes/placesRoutes"));
app.use('/places', placesRoutes_1.default);
const usersRoutes_1 = __importDefault(require("./routes/usersRoutes"));
app.use('/users', usersRoutes_1.default);
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
