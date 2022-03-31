import mongoose from "mongoose"

const SongsSchema = new mongoose.Schema({
  song:String,
  picture:String,
  genre:String,
  youtube:String
  
})


export const songs = mongoose.model('songs', SongsSchema)
export const searches = mongoose.model('searches', SongsSchema)


