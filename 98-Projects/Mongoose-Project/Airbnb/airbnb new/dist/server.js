"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
<<<<<<< HEAD
const path_1 = __importDefault(require("path"));
const userModel_1 = __importDefault(require("./model/userModel"));
=======
const placesModel_1 = __importDefault(require("./model/placesModel"));
<<<<<<< HEAD
>>>>>>> main
=======
const cookieParser = require('cookie-parser');
>>>>>>> main
// import axios from "axios";
const app = express_1.default();
const port = process.env.PORT || 3000;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
<<<<<<< HEAD
<<<<<<< HEAD
// mongoose.connect("mongodb+srv://shay:shayFoyer1994@cluster0.xyd5y.mongodb.net/sample_airbnb?retryWrites=true&w=majority");
//mongoose.connect('mongodb+srv://ShaniRom:ynbUaPL3oHZKGl8a@cluster0.vh1hg.mongodb.net/sample_airbnb?retryWrites=true&w=majority');
app.set("view engine", "ejs"); //connectiong ejs
console.log(app.get("view engine"));
app.set("views", path_1.default.resolve(__dirname, "pages"));
app.get("/", (req, res) => {
    res.send("Hello World!");
});
// const PlacesSchema = new mongoose.Schema({
//   name: String,
//   summary: String,
//   checkIn: String,
//   checkOut: String,
//   accommodates: Number,
//   amenities: Array,
//   bedrooms: Number,
//   beds: Number,
//   number_of_reviews: Number,
//   price: Number,
//   cancle: String,
//   bathrooms: Number,
//   images: String,
//   host: Object,
//   space: String,
//   description: String,
//   bed_type: String,
//   reviews: Array,
//   cancellation_policy: String,
//   address: Object,
// });
=======
>>>>>>> main
=======
app.use(cookieParser());
>>>>>>> main
mongoose_1.default
    .connect("mongodb+srv://shay:shayFoyer1994@cluster0.xyd5y.mongodb.net/sample_airbnb?retryWrites=true&w=majority")
    .then((result) => {
    console.log("connected to db");
<<<<<<< HEAD
    userModel_1.default.find({}).limit(10)
        .then((res) => {
        console.log('test');
        console.log(res);
=======
    placesModel_1.default.find({})
        .then((res) => {
        // console.log(res);
>>>>>>> main
    })
        .catch((err) => {
        console.log(err.message);
    });
})
    .catch((err) => {
    console.log(err.message);
});
// const userSchema = new mongoose.Schema({
//   name: String,
//   password: String,
// });
// const Users = mongoose.model("users", userSchema);
// const Places = mongoose.model("listingsAndReviews", PlacesSchema);
// app.get("/getPlaces", async (req, res) => {
//   try {
//     const places = await Places.find({});
//     res.send({ ok: true, places });
//   } catch (error) {
//     console.error(error);
//     res.send({ error: "error in app.get/getPlaces" });
//   }
// });
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
const usersRoutes_1 = __importDefault(require("./routes/usersRoutes"));
app.use('/users', usersRoutes_1.default);
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
