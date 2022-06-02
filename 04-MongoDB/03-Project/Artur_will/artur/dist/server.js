"use strict";
exports.__esModule = true;
var express_1 = require("express");
var mongoose_1 = require("mongoose");
var app = express_1["default"]();
var port = 3000;
app.use(express_1["default"].static("public"));
app.use(express_1["default"].json());
mongoose_1["default"].connect('mongodb+srv://tal1:rbBnTtoiIia3ddKK@tal-test1.m39if.mongodb.net/fs-2021-oct-test?retryWrites=true&w=majority');
//create a schema (interface)
// const UserSchema = new mongoose.Schema({
//   username:String,
//   password:String
// })
//create a collection
// const User = mongoose.model('bestusers', UserSchema);
// app.post("/add-user", async (req, res) => {
//   try {
//     let { username, password } = req.body;
//     const newUser = new User({username, password})
//     const result = await newUser.save()
//     res.send({ result });
//   } catch (error) {
//     console.error(error);
//     res.send({ error: error.message });
//   }
// });
app.listen(port, function () {
    return console.log("Express is listening at http://localhost:" + port);
});
