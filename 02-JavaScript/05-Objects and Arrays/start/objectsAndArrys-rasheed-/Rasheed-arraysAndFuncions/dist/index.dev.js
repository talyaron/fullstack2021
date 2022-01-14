"use strict";

var movies = [{
  title: "the matrix",
  director: "Lana Wachowski",
  rating: "8.7",
  releaseDate: "1999"
}, {
  title: "the godfather",
  director: "Francis Ford Coppola",
  rating: "9.2",
  releaseDate: "1972"
}, {
  title: "fight club",
  director: "David Fincher",
  rating: "8.8",
  releaseDate: "1999"
}, {
  title: "inception",
  director: "Christopher Nolan",
  rating: "8.8",
  releaseDate: "2010"
}, {
  title: "interstellar",
  director: "Christopher Nolan",
  rating: "8.6",
  releaseDate: "2014"
}, {
  title: "back to the future",
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

console.log("-------------by title and rank change------------------");
var changeMovie = window.prompt("which movie rank do you want to change?");
var newRate = window.prompt('What is your new rank?');
var updatedRate = changeRating(changeMovie, newRate);

function changeRating(title, newRating) {
  var objIndex = movies.findIndex(function (obj) {
    return obj.title == changeMovie;
  });
  movies[objIndex].rating = newRating;
  return objIndex;
}

console.log("".concat(movies[updatedRate].title, " - ").concat(movies[updatedRate].rating));