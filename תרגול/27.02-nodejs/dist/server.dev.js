"use strict";

var express = require("express");

var app = express();
var port = process.env.PORT || 4040;

var color = require('colors');

var path = require("path");

console.log(__dirname); // console.log(__filename);
// const basename = path.basename(__filename);
// console.log(color.bgBlue.black(basename))
// const dirname = path.dirname(__filename);
// console.log(color.bgRed.black(dirname))
// const extname = path.extname(__filename);
// console.log(color.bgGreen.black(extname))
// const parse = path.parse(__filename);
// console.log(color.bgYellow.black(parse))
// console.log(parse.root)
// const join = path.join(__dirname, 'index.html');
// console.log(color.bgCyan.black(join))

app.use(express["static"]("public")); //middlware

app.get('/', function (req, res) {
  // res.send('Hello World')
  res.sendFile(__dirname + '/index.html');
});
app.get('/about', function (req, res) {
  res.sendFile(__dirname + '/public/about.html');
});
app.listen(port, function () {
  console.log(color.bgBlue.white("server listen on http://localhost:".concat(port)));
});