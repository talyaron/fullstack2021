import { Binary } from "mongodb";
import mongoose from "mongoose";

const drawingSchema = new mongoose.Schema({
    imgData: Buffer,
    ownerId: String,
    ownerName: String,
    type: String,
    dataURL: String
});

const Drawing = mongoose.model('drawings', drawingSchema);
export default Drawing;