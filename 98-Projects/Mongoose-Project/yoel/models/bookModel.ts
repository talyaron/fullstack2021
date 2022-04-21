import mongoose from "mongoose"
const bookSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    year:{
        type:Number,
        require:true
    },
    author:{
        type:String,
        require:true
    }
})
const Book = mongoose.model('books',bookSchema )
export default Book;
