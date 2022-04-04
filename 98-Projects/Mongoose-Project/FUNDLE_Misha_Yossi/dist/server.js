"use strict";
exports.__esModule = true;
var express_1 = require("express");
var mongoose_1 = require("mongoose");
var userRoutes_1 = require("./routes/userRoutes");
var wordRoutes_1 = require("./routes/wordRoutes");
var cookieParser = require('cookie-parser');
var app = express_1["default"]();
var port = process.env.PORT || 3001;
app.use(express_1["default"].static("public"));
app.use(express_1["default"].json());
app.use(cookieParser());
app.use('/users', userRoutes_1["default"]);
app.use('/words', wordRoutes_1["default"]);
// mongoose.connect('mongodb+srv://asnafy:ZyTcRnGlhXYqaYjE@cluster0.xgv3d.mongodb.net/fundle?retryWrites=true&w=majority');
mongoose_1["default"].connect('mongodb+srv://michaeldubovik:michaeldubovik1991@cluster0.y9ozg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
app.listen(port, function () {
    return console.log("Express is listening at http://localhost:" + port);
});
