"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const placesModel_1 = __importDefault(require("./model/placesModel"));
// import axios from "axios";
const app = express_1.default();
const port = process.env.PORT || 3000;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
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
const placesRoutes_1 = __importDefault(require("./routes/placesRoutes"));
app.use('/places', placesRoutes_1.default);
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
