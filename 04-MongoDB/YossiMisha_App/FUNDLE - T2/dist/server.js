"use strict";
exports.__esModule = true;
var express_1 = require("express");
var mongoose_1 = require("mongoose");
var app = express_1["default"]();
var port = process.env.PORT || 3006;
app.use(express_1["default"].static("public"));
app.use(express_1["default"].json());
// const dictionary = require('./dictionary.json'); 
// console.log(dictionary)
mongoose_1["default"].connect('mongodb+srv://michaeldubovik:michaeldubovik1991@cluster0.y9ozg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });
app.listen(port, function () {
    return console.log("Express is listening at http://localhost:" + port);
});
