import mongoose from 'mongoose';

const IceCreamSchema = new mongoose.Schema({
    taste: String,
    subTaste: String,
})

const IceCream = mongoose.model('taste', IceCreamSchema)

export default IceCream;