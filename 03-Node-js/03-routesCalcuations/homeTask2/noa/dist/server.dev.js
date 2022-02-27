"use strict";

var express = require("express");

var app = express();
var port = process.env.PORT || 3002;
app.use(express["static"]("public"));
var google = [{
  title: ' למה לשלב פעילות גופנית בחיים שלכם?',
  article: 'כמעט כל יום מביא איתו מחקר חדש בנושא פעילות גופנית, עם יתרונות וחסרונות חדשים, השפעות שונות ומגוונות על הגוף ולעיתים קרובות – הרבה פרטים מבלבלים. חלק מהמחקרים מראים ללא שום ספק יתרונות משמעותיים וטוענים כי אם אתם מעוניינים לרדת במשקל, אין דרך טובה יותר מאימון פיזי. אחרים לא מראים גישה חד משמעית.'
}];
app.get("/get-google", function (req, res) {
  function handleSearch(ev) {
    var search = ev.target.value;
    var regex = new RegExp(search, 'i');
    var searchresult = google.filter(function (article) {
      if (regex.test(article.title)) res.send(searchresult);
    });
  }
});
app.listen(port, function () {
  return console.log("Express is listening at http://localhost:".concat(port));
});