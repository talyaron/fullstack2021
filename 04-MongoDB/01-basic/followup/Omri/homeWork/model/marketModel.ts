import mongoose from "mongoose";

const marketSechma = new mongoose.Schema({
    name: String,
    description: String,
    Price: Number,
    img: String
});

const Market = mongoose.model('marketPlaces', marketSechma);

export default (Market);
