import mongoose from "mongoose"

const Songs = new mongoose.Schema({
  song:String,
  albume:String,
  picture:String,
  genre:String,
  youtube:String
  
})


const songs = mongoose.model('songsdata', Songs)

export default songs
