
const IMDbTopMovies = [
    {title: '12 Angry Men ', year: 1957, rank: 8.9},
    {title: 'The Shawshank Redemption', year: 1994, rank: 9.2},
    {title: 'The Godfather', year: 1972, rank: 9.1},
    {title: 'Pulp Fiction ', year: 1994, rank: 8.8},
    {title: 'The Dark Knight', year: 2008, rank: 9.0},
   
];

for ( let movie of IMDbTopMovies) {           // print the movie`s list 1.
    console.log(movie)
}

console.log('---------------')


IMDbTopMovies.forEach (movie => {            // print the movie`s list 2.
    console.log (movie)
})


console.log('---------------')



IMDbTopMovies.forEach(movie => console.log(movie.rank));


console.log('---------------')


IMDbTopMovies.sort( function (a, b) { return b.rank - a.rank;});
console.log(IMDbTopMovies);


IMDbTopMovies.sort( function (a, b) { return b.year - a.year;});
console.log(IMDbTopMovies);



// const findMovieByTitle = IMDbTopMovies.filter ( movie => )


IMDbTopMovies.forEach(movie => console.log(movie.title));








