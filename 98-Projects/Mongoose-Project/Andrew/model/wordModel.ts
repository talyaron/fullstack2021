import mongoose from "mongoose";

const wordSchema = new mongoose.Schema({
    word: String,
    type: String,
});

const Word = mongoose.model('words', wordSchema);
export default Word;

// const sentenceSchema = new mongoose.Schema({
//     word: String,
//     type: String,
// });

// const Sentence = mongoose.model('sentences', sentenceSchema);
// export default Sentence;