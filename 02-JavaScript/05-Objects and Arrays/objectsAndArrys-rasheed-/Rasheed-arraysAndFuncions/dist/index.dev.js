"use strict";

var movies = [{
  title: "The Matrix",
  director: "Lana Wachowski",
  rating: "8.7",
  releaseDate: "1999"
}, {
  title: "The Godfather",
  director: "Francis Ford Coppola",
  rating: "9.2",
  releaseDate: "1972"
}, {
  title: "Fight Club",
  director: "David Fincher",
  rating: "8.8",
  releaseDate: "1999"
}, {
  title: "Inception",
  director: "Christopher Nolan",
  rating: "8.8",
  releaseDate: "2010"
}, {
  title: "Interstellar",
  director: "Christopher Nolan",
  rating: "8.6",
  releaseDate: "2014"
}, {
  title: "Back to the Future",
  director: "Robert Zemeckis",
  rating: "8.5",
  releaseDate: "1985"
}];
console.log("-------------by rating------------------");
var moviesByRating = movies.sort(function (a, b) {
  return b.rating - a.rating;
});

for (var i in movies) {
  console.log("".concat(movies[i].title, " - ").concat(movies[i].rating));
}

console.log("-------------by releaseDate------------------");
movies.sort(function (a, b) {
  var dateA = a.releaseDate,
      dateB = b.releaseDate;
  return dateB - dateA;
});

for (var _i in movies) {
  console.log("".concat(movies[_i].title, " - ").concat(movies[_i].releaseDate));
}