import mongoose from "mongoose";

const ChocolateSchema = new mongoose.Schema({
    name:String
})
const ChocolateFlavours = mongoose.model('Chocolate',ChocolateSchema)

export default ChocolateFlavours;