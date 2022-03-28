import mongoose from "mongoose"

const SongsSchema = new mongoose.Schema({
  song:String,
  picture:String,
  genre:String,
  youtube:String
  
})


const songs = mongoose.model('songsOwner', SongsSchema)

export default songs
