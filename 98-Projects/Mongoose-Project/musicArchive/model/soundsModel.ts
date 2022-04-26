import mongoose from "mongoose"

const SoundsSchema = new mongoose.Schema({
  title:String,
  type:String,
  location:String,
  description:String,
  duration:Number,
  file:String,

  
})


export const sounds = mongoose.model('sounds', SoundsSchema)
export const searches = mongoose.model('searches', SoundsSchema)


