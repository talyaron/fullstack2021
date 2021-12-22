
const movie_1 = {
  title: 'The Shawshank Redemption',
  director: 'Frank Darabont',
  rate: 9.2,
  year: 1994
}

const movie_2 = {
  title: 'The matrix',
  director: 'Lana and Lilly Wachowski',
  rate: 8.6,
  year: 1999
}

const movie_3 = {
  title: 'Schindler`s List',
  director: 'Steven Spilberg',
  rate: 8.9,
  year: 1993
}

const movie_4 = {
  title: 'The Dark Knight',
  director: 'Christopher Nolan',
  rate: 9.0,
  year: 2008
}

const movie_5 = {
  title: 'The Pianist',
  director: 'Roman',
  rate: 8.5,
  year: 2002
}

const movie_6 = {
  title: 'The Godfather',
  director: 'Francis Ford Coppola',
  rate: 9.1,
  year: 1972
}

const movies = [movie_1, movie_2, movie_3, movie_4, movie_5, movie_6];

let movieByRate = ((movies) => {
  movies.sort((a, b) => { return b.rate - a.rate });
});

movieByRate(movies);

movies.forEach(movie => {
  console.log(`${movie.title} ${movie.rate}`);
});

console.log('--------------------------------------------------------------------');

let movieByYear = ((movies) => {
  movies.sort((a, b) => { return a.year - b.year })
});

movieByYear(movies);

movies.forEach(movie => {
  console.log(`${movie.title} publicshed at the year of: ${movie.year}`);
});

console.log('--------------------------------------------------------------------');

let changeRanking = ((title, newRanking) =>{
  movies.forEach( movie => {
    if(movie.title.localeCompare(title) === 0 ){
      movie.rate = newRanking;
    };
  });
});

changeRanking('The Pianist', 9.6);
movieByRate(movies);
movies.forEach(movie => {
  console.log(`${movie.title} ${movie.rate}`);
});














