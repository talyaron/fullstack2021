import mongoose from "mongoose";

export const TextLineSchema = new mongoose.Schema({
    id: String,
    text: String
})

const TextLineModel = mongoose.model('textLines', TextLineSchema);
export default TextLineModel;