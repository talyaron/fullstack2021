const movies = [
    { movieName: 'Hasandak ', year: 1972, director:'stephen',rating:9.2 },
    { movieName: 'spiderman', year: 2021,director:'stephen', rating:9.5},
    { movieName: 'Sifrut Zolla', year: 1994,director:'stephen',rating:8.2 },
    { movieName: 'The Godfather: Part II', year: 1974,director:'stephen',rating: 9},
    { movieName: 'carreabean', year: 2003,director:'lenon',rating: 7.5},
    { movieName: 'snatch', year: 2000,director:'john',rating: 8}
];
/*sort by rank*/
const sortedmovies=movies.sort(
    (a,b)=> (a.rating<b.rating ? 1:-1)
);
console.log(sortedmovies)


/*sort by their year*/

const sortyear=movies.sort(function(m1,m2){
    if (m1.year<m2.year){
        return 1
    }
    else {
       return -1
    }
});
console.log(sortyear);


const moviesname= movies.map(function(movie){
    return movie.movieName;
})

console.log(moviesname)


const movienam=movies.filter(name=>name.movieName=="spiderman");
console.log(movienam)

function moviename1(title,rank){
    title=movies.movieName[1]

    return (movies[1],movies[1].movieName)
}
console.log(moviename1())

   



//  movies.forEach(movie=>{
//      console.log(movie)
//  })


  