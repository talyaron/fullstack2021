const movies = [
  {
    name: "The Shawshank Redemption",
    director: "Frank Darabont",
    rating: 9.2,
    year: 1994,
  },
  {
    name: "Angry Men",
    director: "Sidney Lumet",
    rating: 8.9,
    year: 1957,
  },
  {
    name: "The Godfather ",
    director: "Francis Ford Coppola",
    rating: 9.1,
    year: 1972,
  },
  {
    name: "The Godfather: Part II ",
    director: "Francis Ford Coppola",
    rating: 9.0,
    year: 1974,
  },
  {
    name: "The Dark Knight",
    director: "Christopher Nolan",
    rating: 9.0,
    year: 2008,
  },

  {
    name: "Schindler's List",
    director: "Steven Spielberg",
    rating: 8.9,
    year: 1993,
  },
];
const sortRatin = movies.sort((a, b) => (a.rating < b.rating ? 1 : -1));
console.log(sortRatin);
// *****
const sortYear = movies.sort((a, b) => (a.year > b.year ? 1 : -1));
console.log(sortYear);
// *****

let movieName = window.prompt("Please enter the name of the movie:");
let newRating = window.prompt("Please enter the new ranking of the movie:");

function changeRanking(movieName, newRating) {
  if (movieName == title) {
    let wantedMovie = movies.findIndex((movie) => movie.name == title);
    movies[wantedMovie].rating = newRating;
  }
}
console.log(`the new ranked order to ${movieName} is ${newRating} `);
