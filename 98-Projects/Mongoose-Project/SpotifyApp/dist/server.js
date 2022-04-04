"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const colors_1 = __importDefault(require("colors"));
const app = express_1.default();
const port = process.env.PORT || 3002;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
// const http = require("http")
// console.log(http.STATUS_CODES);
mongoose_1.default.connect('mongodb+srv://alexroz:Uou8wsRDp2J0FImM@cluster0.x62d1.mongodb.net/songsApp?retryWrites=true&w=majority');
const userRoute_1 = __importDefault(require("./routes/userRoute"));
app.use("/songsUser", userRoute_1.default);
const songsRoute_1 = __importDefault(require("./routes/songsRoute"));
app.use("/songs", songsRoute_1.default);
// app.get('/', (req, res) => {
//   console.log(req.headers)
//   console.log(req.ip)
//   console.log(req.url)
//   console.log(req.method)
//   console.log(req.protocol)
//   console.log(req.body)
//   console.log(req.path)
//   console.log(req.query)
//   console.log(req.subdomains)
//   console.log(req.params)
//   res.status(404).end();
// });
app.listen(port, () => {
    return console.log(colors_1.default.bgYellow.black(`Express is listening at http://localhost:${port}`));
});
