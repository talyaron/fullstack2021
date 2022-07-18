import mongoose from 'mongoose'

export const countryFlagSchema = new mongoose.Schema({
    countryName:String,
    countryFlag: String
})

const countryFlagModel = mongoose.model("flags", countryFlagSchema)
export default countryFlagModel