import mongoose from "mongoose"

const SongsSchema = new mongoose.Schema({
  band:String,
  album:String,
  song:String,
  genre:String,
  image:String
  
})


export const songs = mongoose.model('songs', SongsSchema)
export const searches = mongoose.model('searches', SongsSchema)


