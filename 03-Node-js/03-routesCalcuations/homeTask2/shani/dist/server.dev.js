"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 3058;
var article = [{
  title: "Breakfast and Brunch Recipes | Allrecipes ",
  content: "We rounded up the best tasty and filling recipes that will get you pumped to get out of bed for your morning meal (yes, even on Mondays), including make-ahead options, genius ideas for breakfast sandwiches, and sweet (but secretly healthy!) options that make breakfast taste like dessert. Craving savory? We've got new ideas for everything from eggs to bacon to sausage. If you're feeling sweet, fresh fruit, homemade jam and breakfast baked goods are also all covered here. Best of all, many of these quick breakfasts take fewer than five minutes to pull together, or feature five ingredients or less. And since you’re saving so much time on breakfast, you’ll be able to cook one of our favorite healthy lunch ideas or easy dinner recipes later on in the day. Win, win!"
}, {
  title: "Kids Breakfast Recipes | BBC ood Food",
  content: "Kids' breakfast recipes · Breakfast bar · Homemade cocoa pops · Blueberry & lemon pancakes · Peanut butter & banana on toast · Breakfast muffins. Set kids up for the day ahead with our children's breakfast recipes. These pancakes, muffins, oat bars and smoothies will satisfy fussy eaters."
}, {
  title: "Our 60 Best Egg Recipes - Taste of Home",
  content: " Classic Egg Recipes For Breakfast · Chorizo Scotch quail's eggs · Eggs Florentine pizza · Spanish tortilla · How to make an omelette · Egg custard tarts · "
}, {
  title: "Lunch Recipes | Allrecipes",
  content: "Tasty Lunch ideas. From sandwiches to full family lunch meals.Vegetarian and non-vegetarian recipes."
}, {
  title: "60 Best Vegetarian Meals | The Modern Proper",
  content: "Weve rounded up our 60 best vegetarian meals! From a 15-minute mac and cheese to a vegan hummus bowl and everything in between, we know that you’ll find more than a few meatless recipes to love."
}, {
  title: "Non-vegetarian recipes | 125 non-vegetarian recipes",
  content: "Explore popular non-vegetarian Main Course recipes cooked by Ranveer Brar, So you never have to cook boring non-veg Main Course dishes again."
}];
app.use(express["static"]('public'));
app.get('/getArticle', function (req, res) {
  var search = req.query.search;
  var regex = new RegExp(search, "i", "g");
  res.send(article);
});
app.listen(port, function () {
  return console.log("Express is listening to localHost:".concat(port));
});