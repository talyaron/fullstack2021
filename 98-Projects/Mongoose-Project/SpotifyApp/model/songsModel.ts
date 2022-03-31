import mongoose from "mongoose"

const SongsSchema = new mongoose.Schema({
  song:String,
  picture:String,
  genre:String,
  youtube:String
  
})


const songs = mongoose.model('songsOwner', SongsSchema)
const searches = mongoose.model('searches', SongsSchema)

export default songs && searches;
