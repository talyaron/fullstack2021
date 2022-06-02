import mongoose from "mongoose";

const VanillaSchema = new mongoose.Schema({
    name:String
})
const VanillaFlavours = mongoose.model('Vanilla',VanillaSchema)

export default VanillaFlavours;