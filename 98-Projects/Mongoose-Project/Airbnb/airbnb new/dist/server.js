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
const path_1 = __importDefault(require("path"));
// import axios from "axios";
const app = express_1.default();
const port = process.env.PORT || 3000;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
mongoose_1.default.connect("mongodb+srv://shay:shayFoyer1994@cluster0.xyd5y.mongodb.net/sample_airbnb?retryWrites=true&w=majority");
//mongoose.connect('mongodb+srv://ShaniRom:ynbUaPL3oHZKGl8a@cluster0.vh1hg.mongodb.net/sample_airbnb?retryWrites=true&w=majority');
app.set("view engine", "ejs"); //connectiong ejs
console.log(app.get("view engine"));
app.set("views", path_1.default.resolve(__dirname, "pages"));
app.get("/", (req, res) => {
    res.send("Hello World!");
});
const PlacesSchema = new mongoose_1.default.Schema({
    name: String,
    summary: String,
    checkIn: String,
    checkOut: String,
    accommodates: Number,
    amenities: Array,
    bedrooms: Number,
    beds: Number,
    number_of_reviews: Number,
    price: Number,
    cancle: String,
    bathrooms: Number,
    images: String,
    host: Object,
    space: String,
    description: String,
    bed_type: String,
    reviews: Array,
    cancellation_policy: String,
    address: Object,
});
const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const userSchema = new mongoose_1.default.Schema({
    name: String,
    password: String,
});
const Users = mongoose_1.default.model("users", userSchema);
const Places = mongoose_1.default.model("listingsAndReviews", PlacesSchema);
app.get("/getPlaces", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const places = yield Places.find({});
        res.send({ ok: true, places });
    }
    catch (error) {
        console.error(error);
        res.send({ error: "error in app.get/getPlaces" });
    }
}));
app.post("/addPlaces", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { name, summary, checkIn, checkOut, accommodates, amenities, bedrooms, beds, number_of_reviews, price, cancle, bathrooms, images, host, space, description, bed_type, reviews, cancellation_policy, address, } = req.body;
        const newPlace = new Places({
            name,
            summary,
            checkIn,
            checkOut,
            accommodates,
            amenities,
            bedrooms,
            beds,
            number_of_reviews,
            price,
            cancle,
            bathrooms,
            images,
            host,
            space,
            description,
            bed_type,
            reviews,
            cancellation_policy,
            address,
        });
        const result = yield newPlace.save();
        res.send({ ok: true, result });
    }
    catch (error) {
        console.error(error);
        res.send({ error: error.massage });
    }
}));
app.post("/addUsers", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { user, password } = req.body;
        const newUser = new Users({ user, password });
        const result = yield newUser.save();
        res.send({ ok: true, result });
    }
    catch (error) {
        console.error(error);
        res.send({ error: error.massage });
    }
}));
// const options:any = {
//   method: 'GET',
//   url: 'https://hotels-com-free.p.rapidapi.com/pde/property-details/v1/hotels.com/106346',
//   params: {
//     rooms: '1',
//     checkIn: '2021-01-27',
//     checkOut: '2021-01-28',
//     locale: 'en_US',
//     currency: 'USD',
//     include: 'neighborhood'
//   },
//   headers: {
//     'x-rapidapi-key': 'insert-your-RapidAPI-key-here',
//     'x-rapidapi-host': 'hotels-com-free.p.rapidapi.com'
//   }
// };
// axios.request(options).then(function (response) {
//   console.log(response.data);
// }).catch(function (error) {
//   console.error(error);
// });
app.get("/goToPlace", (req, res) => {
    try {
        const { placeId } = req.body;
        const __id = req.body;
        if (__id == placeId) {
            res.send(placeId);
        }
        else {
            throw new Error("placeId is not the same as the __id");
        }
    }
    catch (error) {
        console.log(error.error);
        res.send({ error: error.massage });
    }
});
app.post("/findPlaceMap", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let coordinates = req.body;
    //  const center: google.maps.LatLngLiteral = {lat: 30, lng: -110};
    // initMap(center)
    res.send(coordinates);
}));
// let map: google.maps.Map;
// function initMap(center): void {
//   map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
//     center,
//     zoom: 8
//   });
// }
// ---- search in navigation bar---------
// app.get('/search-city',(req,res)=>{
//     const search=req.query.search;
//     const filteredCity=filteredCitySearch(search);
//     res.send(filteredCity)
// })
app.get('/search-city', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const search = req.query.search;
    const filteredCity = yield Places.find({ address: search });
    console.log(filteredCity);
    //res.send({city:filteredCity})
}));
// function filteredCitySearch(search) {
//     if (search) {
//       const regex = new RegExp(search, "i");
//       return data.filter((searchedTerm) => regex.test(searchedTerm.address.country));
//     } else {
//       return data
//     }
// }
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});