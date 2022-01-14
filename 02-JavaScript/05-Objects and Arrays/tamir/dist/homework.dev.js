"use strict";

var movies = [{
  title: 'The Dark Knight',
  director: 'Christopher Nolan',
  rating: 9.0,
  year: 2008
}, {
  title: 'The Shawshank Redemption',
  director: 'Frank Darabont',
  rating: 9.2,
  year: 1994
}, {
  title: 'Angry Men',
  director: 'Sidney Lumet',
  rating: 8.9,
  year: 1957
}, {
  title: ' The Godfather',
  director: 'Francis Ford Coppola',
  rating: 9.1,
  year: 1972
}];
var topmovie = movies.filter(function (movie) {
  return movie.rating < 9.2;
});
topmovie.forEach(function (movie) {
  console.log(movie.title);
});