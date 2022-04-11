import mongoose from "mongoose"

const SoundsSchema = new mongoose.Schema({
  title: {
    type: String,
    // required: true
  },
  type: {
    type: String,
    // required: true
  },
  location: {
    type: String,
    // required: true
  },
  description: {
    type: String,
    // required: true
  },
  duration: {
    type: Number,
    // required: true
  },
  file: {
    type: String
  }
 
})


export const sounds = mongoose.model('sounds', SoundsSchema)
export const searches = mongoose.model('searches', SoundsSchema)


