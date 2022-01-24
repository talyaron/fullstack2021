const movie1 = {
     namemovie: 'homot shel tikva',
    director: 'Frank Darabont',
    rating :9.2,
    year: 1994 }

    const movie2 = {
    namemovie: '12 angry man',
    director: 'sidney lumet',
    rating: 8.0,
    year: 1957}

    const movie3={
    namemovie: 'sifrut zola',
    director: 'Quentin tarantino',
    rating: 8.8,
    year: 1994}

    const movie4={
    namemovie: 'the dark knight',
    director: 'cristoper nolan',
    rating: 9,
    year: 2008}

    const movie5=
       { namemovie: 'the godfather',
    director: 'Franics Ford Copoola',
    rating: 9,
    year: 1974}

    const movie6=
{    namemovie: 'hasandak',
    director: 'Franics Ford Copoola',
    rating: 9.1,
    year: 1972}

const movies= [movie1, movie2, movie3, movie4, movie5, movie6]
      console.log (movies)

    const years= movies.sort(function(a, b){return a.year - b.year});
      console.log (years)

    const rating= movies.sort(function(x, y){return x.rating - y.rating});
   console.log (movies)

const namesmovi=movies.filter (name=>name.namemovie=="homot shel tikva")
console.log (namesmovi)



const title = 'homot shel tikva';
const mynewRate = '7.5';


const namemovie = (movie) => movie.name == title;

namemovie  ([movies.findIndex(namemovie)])

namemovie.rating= mynewRate;

console.log(`movie is the homot shel tik and its riating is ${namemovie.rating}`);

