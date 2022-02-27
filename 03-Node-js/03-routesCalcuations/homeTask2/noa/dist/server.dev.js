"use strict";

var express = require("express");

var app = express();
var port = process.env.PORT || 3002;
var google = [{
  title: ' למה לשלב פעילות גופנית בחיים שלכם?',
  article: 'כמעט כל יום מביא איתו מחקר חדש בנושא פעילות גופנית, עם יתרונות וחסרונות חדשים, השפעות שונות ומגוונות על הגוף ולעיתים קרובות – הרבה פרטים מבלבלים. חלק מהמחקרים מראים ללא שום ספק יתרונות משמעותיים וטוענים כי אם אתם מעוניינים לרדת במשקל, אין דרך טובה יותר מאימון פיזי. אחרים לא מראים גישה חד משמעית.'
}];
app.use(express["static"]("public"));
app.get("/get-google", function (req, res) {
  var search = req.query.search;
  console.log(search);
  var searchreasult = getSearchReasult(search);
  console.log('p');
  res.send(searchreasult);
});

function getSearchReasult(search) {
  if (search) {
    var regex = new RegExp(search, 'i');
    return google.filter(function (article) {
      regex.test(article.title);
    });
  } else {
    return [];
  }
}

app.listen(port, function () {
  return console.log("Express is listening at http://localhost:".concat(port));
});