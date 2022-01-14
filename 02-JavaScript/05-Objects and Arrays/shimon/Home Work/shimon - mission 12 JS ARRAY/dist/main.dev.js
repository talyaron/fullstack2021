"use strict";

var movies = [{
  title: 'Homot Shel Tikva',
  director: 'Sergio Leone',
  rating: 9.2,
  year: 1994
}, {
  title: ' Hasandak',
  director: 'Sergio Leone',
  rating: 9.1,
  year: 1972
}, {
  title: ' Reshimut Schindler ',
  director: 'Sergio Leone',
  rating: 8.7,
  year: 1993
}, {
  title: 'The Godfather: Part II',
  director: 'Sergio Leone',
  rating: 9.0,
  year: 1974
}, {
  title: 'The Dark Knight',
  director: 'Sergio Leone',
  rating: 8.9,
  year: 2008
}, {
  title: ' 12 Angry Men',
  director: 'Sergio Leone',
  rating: 8.8,
  year: 1957
}]; //Function that sorts the movies according to their ranking

var sortRating = movies.sort(function (a, b) {
  return a.rating > b.rating ? 1 : -1;
});
console.log(sortRating); //Function that sorts the movies according to their year

var sortYear = movies.sort(function (a, b) {
  return a.year > b.year ? 1 : -1;
});
console.log(sortYear); //Function that change thr rating

var movieName = window.prompt("Please enter the name of the movie:");
var newRating = window.prompt("Please enter the new ranking of the movie:");

function changeRanking(movieName, newRating) {
  if (movieName == title) {
    var wantedMovie = movies.findIndex(function (movie) {
      return movie.title == title;
    });
    movies[wantedMovie].rating = newRating;
  }
}

;
alert('the new ranked order is:' + newRating);