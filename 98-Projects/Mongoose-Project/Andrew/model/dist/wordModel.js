"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var wordSchema = new mongoose_1["default"].Schema({
    word: String,
    type: String
});
var Word = mongoose_1["default"].model('words', wordSchema);
exports["default"] = Word;
// const sentenceSchema = new mongoose.Schema({
//     word: String,
//     type: String,
// });
// const Sentence = mongoose.model('sentences', sentenceSchema);
// export default Sentence;
