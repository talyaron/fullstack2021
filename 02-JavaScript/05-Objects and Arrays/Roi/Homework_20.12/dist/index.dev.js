"use strict";

//Create objects (title, director, rating, year) of 6 movies from IMDB
var Movies = [{
  movieName: 'The Shawshank Redemption',
  year: 1994,
  Drirector: 'Frank Darabont',
  Rank: 9.2
}, {
  movieName: 'Goodfellas',
  year: 1990,
  Drirector: 'Martin Scorsese',
  Rank: 8.7
}, {
  movieName: 'The Godfather',
  year: 1972,
  Drirector: 'Francis Ford Coppola',
  Rank: 9.1
}, {
  movieName: 'Snatch',
  year: 2000,
  Drirector: 'Guy Ritchie',
  Rank: 8.2
}, {
  movieName: "Schindler's List",
  year: 1993,
  Drirector: 'Steven Spielberg',
  Rank: 8.9
}, {
  movieName: 'The Dark Knight',
  year: 2008,
  Drirector: 'Christopher Nolan',
  Rank: 9.0
}]; //create a function that sorts the movies according to their ranking

var ranking = Movies.sort(Movies.Rank);
console.log(Rank); //create a function that sorts the movies according to their year of publication
//Create a function that finds the movie according to its title, and changes its ranking to the new ranking 
//which was set to the function (function changeRanking(title, newRanking){})

var topTeams = footballTeams.filter(function (team) {
  return team.place <= 6;
});
topTeams.forEach(function (team) {
  console.log(team.teamName);
});