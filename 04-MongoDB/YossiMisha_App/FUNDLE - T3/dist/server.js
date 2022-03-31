"use strict";
exports.__esModule = true;
var express_1 = require("express");
var mongoose_1 = require("mongoose");
var userRoutes_1 = require("./routes/userRoutes");
var wordRoutes_1 = require("./routes/wordRoutes");
var app = express_1["default"]();
var port = process.env.PORT || 3007;
app.use(express_1["default"].static("public"));
app.use(express_1["default"].json());
app.use('/users', userRoutes_1["default"]);
app.use('/words', wordRoutes_1["default"]);
var wordsDictionary = require('./dictionary.json');
mongoose_1["default"].connect('mongodb+srv://michaeldubovik:michaeldubovik1991@cluster0.y9ozg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
shuffleDictionary(wordsDictionary);
function shuffleDictionary(Dictionary) {
    for (var i = 0; i < Dictionary.length; i++) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = Dictionary[i];
        Dictionary[i] = Dictionary[j];
        Dictionary[j] = temp;
    }
}
app.post("add-user");
app.get("get-user");
app.get("get-word");
app.listen(port, function () {
    return console.log("Express is listening at http://localhost:" + port);
});
