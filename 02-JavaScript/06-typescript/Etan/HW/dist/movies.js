var Movies = [
    {
        title: "Inception",
        director: "Christopher Nolan",
        ranking: 8.8,
        yearCreated: 2010
    },
    {
        title: "Saving Private Ryan",
        director: "Steven Spielberg",
        ranking: 8.6,
        yearCreated: 1998
    },
    {
        title: "WALL-E",
        director: "Andrew Stanton",
        ranking: 8.4,
        yearCreated: 2008
    },
    {
        title: "The Wolf of Wall Street",
        director: "Andrew Stanton",
        ranking: 8.2,
        yearCreated: 2013
    },
    {
        title: "Harry Potter and the Deathly Hallows: Part 2",
        director: "David Yates",
        ranking: 8.1,
        yearCreated: 2011
    },
    {
        title: "The Lion King",
        director: "Roger Allers and Rob Minkoff",
        ranking: 8.5,
        yearCreated: 1994
    },
];
function getMoviesByRank(Movies) {
    return Movies.sort(function (x, y) { return x.ranking - y.ranking; });
}
var movieRanks = getMoviesByRank(Movies);
console.log(movieRanks);
function getMoviesByYear(Movies) {
    return Movies.sort(function (x, y) { return x.yearCreated - y.yearCreated; });
}
var movieYear = getMoviesByYear(Movies);
console.log(movieYear);
// let movieRank = function(){
// Movies.sort((x, y) => y.ranking - x.ranking);
// console.log(Movies.map(movie => movie.title));
// };
// movieRank()
// let movieDate = function(){
//     Movies.sort((x, y) => x.yearCreated - y.yearCreated);
//     console.log(Movies.map(movie => movie.yearCreated))
// }
// movieDate()
// const topTopMovies = Movies.filter(Movie => Movie.ranking <= 8.5);
// console.log(topTopMovies.map(Movie => Movie.title));
