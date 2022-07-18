import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    name: String,
    user: String,
    date: String,
    views: String,
    img: String,
    uploaderId: String,
})

const Video = mongoose.model('videos', VideoSchema)

export default Video;