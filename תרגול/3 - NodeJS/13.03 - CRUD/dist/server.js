"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var port = 30001;
app.use(express_1["default"].json());
app.use(express_1["default"].static("public"));
var tasks = [
    { id: "1", title: "one" },
    { id: "2", title: "two" },
    { id: "3", title: "three" },
    { id: "4", title: "four" }
];
// app.get(('/'), (req, res)=>{
//     // req.body // get info client
//     // req.params // 
//     // req.query // chech if yes or no
// })
app.get('/getTasks', function (req, res) {
    res.send(tasks);
});
app.listen(port, function () {
    console.log("Server listen on port http://localhost:" + port);
});
