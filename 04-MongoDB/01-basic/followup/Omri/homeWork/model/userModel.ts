import mongoose from "mongoose";

const marketSechma = new mongoose.Schema({
    name: String,
    description: String,
    Price: Number,
    img: String
});

const User = mongoose.model('userItems', marketSechma);

export default (User);