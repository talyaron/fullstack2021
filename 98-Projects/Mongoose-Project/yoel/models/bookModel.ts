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