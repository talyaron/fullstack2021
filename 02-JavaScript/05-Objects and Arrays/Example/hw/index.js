const imdbMovies = [
    { title: 'American Movie', director: 'Chris Smith', rating: 7.9, year: 1999 },
    { title: 'Laurence Anyways', director: 'Xavier Dolan', rating: 7.7, year: 2012 },
    { title: 'Crip Camp', director: 'James Lerbrecht & Nicole Newnham', rating: 7.7, year: 2020 },
    { title: 'Mommmy', director: 'Xavier Dolan', rating: 8.1, year: 2014 },
    { title: 'Nebraska', director: 'Alexander Payne', rating: 7.7, year: 2013 },
    { title: 'Im No Longer Here', director: 'Frenando Frias', rating: 7.3, year: 2019 }
];

const hollywoodMovies = [
    { title: 'American Movie', director: 'Chris Smith', rating: 7.9, year: 1999 },
    { title: 'Laurence Anyways', director: 'Xavier Dolan', rating: 7.7, year: 2012 },
    { title: 'Crip Camp', director: 'James Lerbrecht & Nicole Newnham', rating: 7.7, year: 2020 },
    { title: 'Mommmy', director: 'Xavier Dolan', rating: 8.1, year: 2014 },
    { title: 'Nebraska', director: 'Alexander Payne', rating: 7.7, year: 2013 },
    { title: 'Im No Longer Here', director: 'Frenando Frias', rating: 7.3, year: 2019 }
];



// //01
function getMoviesbyRating(movies) {
    return movies.sort((a, b) => b.rating - a.rating)
    let x = 9
}



const movieRatings = getMoviesbyRating(imdbMovies);
console.log(movieRatings)

// //02
function getMoviesbyYear(movies) {
    return movies.sort((x, y) => y.year - x.year)
}
const movieYear = getMoviesbyYear(imdbMovies);
console.log(movieYear)

// // 03

function changeRating(movies, title, newRating) {

    try {

      
        //check type
        if (!Array.isArray(movies)) throw new Error('movies is not an array');
        if (typeof title !== 'string') throw new Error('title is not a string');
        if (typeof newRating !== 'number') throw new Error('newRating is not a number');

        //find index in array

        const index = movies.findIndex(movie => movie.title === title)

        if (index === -1) {
            return movies
        } else {
            //change rating in the spesific location
            movies[index].rating = newRating;

            return movies;
        }


    } catch (error) {
        console.error(error)
        return movies
    }
}

const newMovies = changeRating(imdbMovies, 'American Movie', 10);

const newMovies = changeRating(imdbMovies, 'American Movie', 8);
console.log(newMovies)

const newMovies2 = changeRating(imdbMovies, 'Crip Camp', 5);
console.log(newMovies2)

// const findTitle = function changeRating() {
//     if (movies[0].rating); {
//         return (movies[4].rating)
//     }
// }

// console.log(findTitle())








