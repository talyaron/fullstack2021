<<<<<<< HEAD
import mongoose from "mongoose"
const bookSchema = new mongoose.Schema({
    name:{
        typeof:String,
        require:true
    },
    year:{
        typeof:Number,
        require:true
    },
    author:{
        typeof:String,
        require:true
    }
})
const Book = mongoose.model('books',bookSchema )
export default Book;
=======
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
    ownerId:  {
        type:String,
        required:true
    }
  })
  
  export const Book = mongoose.model('books', BookSchema)
>>>>>>> 1ca405c86a6b7748f75a8892b490a58717beaf84
