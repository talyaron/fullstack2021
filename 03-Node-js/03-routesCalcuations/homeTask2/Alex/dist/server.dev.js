"use strict";

var express = require('express');

var app = express();
var port = 2000;
var text = [{
  title: 'reguler expressions',
  body: 'Regular expressions are patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects.'
}, {
  title: 'markdown',
  body: 'Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents.'
}];
app.use(express["static"]("public"));
app.get('/getText', function (req, res) {
  var search = req.query.searchTerm;
  var filtered = filterText(search);
  res.send(filtered);
});

function filterText(event) {
  if (event) {
    var regex = new RegExp(event, 'i');
    return text.filter(function (word) {
      return regex.test(word.title) || regex.test(word.body);
    });
  }
}

app.listen(port, function () {
  return console.log("example app on port http://localhost:".concat(port, " "));
});