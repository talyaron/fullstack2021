
const movies = [
    {title: '12 Angry Men ', year: 1957, rank: 8.9},
    {title: 'The Shawshank Redemption', year: 1994, rank: 9.2},
    {title: 'The Godfather', year: 1972, rank: 9.1},
    {title: 'Pulp Fiction ', year: 1994, rank: 8.8},
    {title: 'The Dark Knight', year: 2008, rank: 9.0},
   
];


 // 1.  function that sorts the movies according to their ranking (I) 

movies.sort( function (b, a) { return a.rank - b.rank;}); 
console.log(movies);

// 1.  function that sorts the movies according to their ranking (II) 

const sortRank = movies.sort ((a, b) =>                 
 (b.rank > a.rank ? 1 : -1)
)
console.log (sortRank);


// 2.  function that sorts the movies according to their year of publication

movies.sort( function (a, b) { return b.year - a.year;});   
console.log(movies);


// 3. function that finds the movie according to its title

const findFilm = movies.filter (film => film.title == 'The Godfather');       
console.log (findFilm);


//  4. changes its ranking to the new ranking which was set to the function ('Pulp Fiction '  rank 8.8 --> 9.2)

function changeRank (filmtitle, ranking) {
    filmtitle = movies[2].title 
    ranking = movies [2].rank 
    return (movies [2], movies [2].title, movies [1].rank );  
}

console.log (changeRank())



// console.log('---------------')


// for ( let film of movies) {         // 1. list print
//     console.log(movies)
// }


// console.log('---------------')


// movies.forEach (film => {            // 2. list print
//     console.log (film)
// })


// console.log('---------------')



// movies.forEach(film => console.log(film.rank));           // ranks of all movies





// movies.forEach(film => console.log(film.title));         // title













