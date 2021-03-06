"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 3058;
var data = [{
  imgUrl: "https://www.monetpaintings.org/The%20Waterlily%20Pond,%20Green%20Harmony%20Claude%20Monet.jpg?ezimgfmt=rs:400x389/rscb2/ng:webp/ngcb2",
  view: "pond",
  name: "Waterlily Pond",
  year: "1899"
}, {
  imgUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Monet_-_Monets_Garten_in_Giverny.jpg",
  view: "garden",
  name: "Garden at Giverny",
  year: "1900"
}, {
  imgUrl: "https://uploads3.wikiart.org/00143/images/claude-monet/5.jpg!Large.jpg",
  view: "field",
  name: "Field of Poppies",
  year: "1873"
}, {
  imgUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Monet_Claude%2C_The_Beach_at_Pourville%2C_1882.jpg",
  view: "beach",
  name: "Beach in Pourville",
  year: "1882"
}, {
  imgUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Monet_canal-in-amsterdam.jpg",
  view: "city",
  name: "Canal in Amsterdam",
  year: "1874"
}, {
  imgUrl: "https://www.claude-monet.com/images/paintings/the-rue-montorgueil-in-paris.jpg",
  view: "city",
  name: "Rue Montorgueil (La Rue Montorgueil)",
  year: "1878"
}, {
  imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/The_Artist%27s_Garden_in_Argenteuil_%28A_Corner_of_the_Garden_with_Dahlias%29_A12382.jpg/1200px-The_Artist%27s_Garden_in_Argenteuil_%28A_Corner_of_the_Garden_with_Dahlias%29_A12382.jpg",
  view: "garden",
  name: "The Garden At Argenteuil Aka The Dahlias",
  year: "1873"
}];
app.use(express["static"]('public'));
app.get('/getPics', function (req, res) {
  console.log(req.query); //what does req.query show?

  var view = req.query.view;
  var year = req.query.year;

  if (view) {
    console.log(view);
    var filteredPaintingsByView = data.filter(function (painting) {
      return painting.view === view;
    });
    res.send(filteredPaintingsByView);
  } else if (year) {
    console.log(year);
    var filteredPaintingsByYear = data.filter(function (painting) {
      return painting.year === year;
    });
    res.send(filteredPaintingsByYear);
  } else {
    res.send(data);
  }
});
app.listen(port, function () {
  return console.log("Express is listening to localhost:".concat(port));
});