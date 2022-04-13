import mongoose from "mongoose";
const BookSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    year: {
        type:String,
        required:true
    },
    author: {
        type:String,
        required:true
    },
    ownerId:String
  })
  
  export const Book = mongoose.model('books', BookSchema)