"use strict";

var express = require('express');

var app = express();
var port = 3000;
var text = [{
  title: 'reguler expressions',
  body: 'Regular expressions are patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects.'
}, {
  title: 'markdown',
  body: 'Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents.'
}];
app.use(express["static"]("public"));
app.listen(port, function () {
  return console.log("example app on port http://localhost:".concat(port, " "));
});
app.get('/getText', function (req, res) {
  console.log(req.query);
  var search = req.query.text;

  if (search) {
    console.log(search);
  }

  res.send(text);
});

function filterText(title) {
  var regex = new RegExp(title.text, 'i');
}