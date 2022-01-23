const movie1 = {
    name: 'The Kid',
    director: 'Charles Chaplin',
    rating: 8.0,
    year: 1921
}

const movie2 = {
    name: 'Sherlock Jr.',
    director: 'Buster Keaton',
    rating: 8.2,
    year: 1924
}

const movie3 = {
    name: 'Metropolis',
    director: 'Fritz Lang',
    rating: 8.1,
    year: 1927
}

const movie4 = {
    name: 'It Happened One Night',
    director: 'Frank Capra',
    rating: 7.0,
    year: 1923
}

const movie5 = {
    name: 'The Third Man',
    director: 'Carol Reed',
    rating: 7.9,
    year: 1949
}

const movie6 = {
    name: 'Vertigo',
    director: 'Alfred Hitchcock',
    rating: 10,
    year: 1958
}

const movies = [movie1, movie2, movie3, movie4, movie5, movie6];



// create a function that sorts the movies according to their ranking:

const sortMoviesByRating = movies.sort(function(a, b) {
	return b.rating - a.rating;
});
console.log(sortMoviesByRating);



// create a function that sorts the movies according to their year of publication:

const sortMoviesByYear = movies.sort(function(a, b) {
	return a.year - b.year;
});

console.log(sortMoviesByYear);



// find a movie by title, and changes its ranking :

let title = 'The Third Man';
let myNewRate = '8';


let isMovieName = (movie) => movie.name === title;

moveiName = (movies[movies.findIndex(isMovieName)]);

moveiName.rating= myNewRate;

console.log(`movie is ${moveiName.name} and its new riating is ${moveiName.rating}`);
