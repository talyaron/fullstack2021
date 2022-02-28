"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 3000;
var articles = [{
  title: "How to build trust in a food crisis",
  content: "Ahead of Food Integrity 2022, we hear from one of our moderators, Sterling Crew, about the lessons we can learn from the UK Salmonella egg crisis and the scheme that changed everything. Catch his workshop on building trust this March!"
}, {
  title: "Let’s talk sustainability for the sports nutrition sector",
  content: "Dr Adam Carey from the European Specialist Sports Nutrition Alliance (ESSNA) discusses sustainability in sports nutrition and defines key targets and regulatory insights to help the industry innovate while meeting policymakers’ and consumers’ expectations."
}, {
  title: "We are amidst one of the great drivers of food fraud; here’s why",
  content: "Professor Chris Elliott outlines how price increases are serving fraudulent activity and the ways in which food fraud is beginning to manifest in the UK using rice as a key example."
}, {
  title: "Food Integrity sneak peek",
  content: "As Food Integrity 2022 fast approaches, we offer you a sneak preview of what to expect at the five-day event."
}, {
  title: "Ingredients – low/no alcohol, nutrition and plant-based",
  content: "This edition of our Ingredients In-depth Focus features the expertise of three food and drink leaders - Barbara Bray, Marisa Heath and Christopher Lackner."
}, {
  title: "Single origin coffee: What is it and why are consumers opting for it?",
  content: "Consumers are demanding more traceability from their products than ever before, so what does this mean for the coffee sector? New Food spoke to two craft coffee retailers to find out."
}];
app.use(express["static"]("public"));
app.get('/get-articles', function (req, res) {
  var searchInput = req.query.searchInput;
  var filtered = filteredArticles(searchInput);
  res.send(filtered);
});

function filteredArticles(searchInput) {
  if (searchInput) {
    var regex = new RegExp(searchInput, "i");
    return articles.filter(function (article) {
      return regex.test(article.title) || regex.test(article.content);
    });
  } else {
    return [];
  }
}

app.listen(port, function () {
  return console.log("Express is listening at http://localhost:".concat(port));
});