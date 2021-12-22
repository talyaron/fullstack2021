const movies=[

{movieName:'The intouchables', movieDirector:'Olivier Nakach and eÉric Toledano', movieRating: 8.5, movieYearReleas: 2011
},
{movieName:'Spider-Man: No Way Home', movieDirector:'Jon Watts', movieRating: 9, movieYearReleas: 2021
},
{movieName:'Avengers infinity war', movieDirector:'Anthony and Joe Russo', movieRating: 8.4, movieYearReleas: 2018
},
{movieName:'The dark knight rises', movieDirector:'Christopher Nolan', movieRating: 8.4, movieYearReleas: 2012
},
{movieName:'Avenger endgame', movieDirector:'Anthony and Joe Russo', movieRating: 8.4, movieYearReleas: 2019
},
{movieName:'Monster, inc.', movieDirector:'Pete Docter and David Silverman andLee Unkrich', movieRating: 8.1, movieYearReleas: 2001
}
]
 
//sort movies by rate// 
const movieRate = movies.sort((a,b) => (a.movieRating-b.movieRating));
console.log(movieRate);
 
//sort movies by year//
//  const movieYear = movies.sort((i, j)=>(i.movieYearReleas-j.movieYearReleas));
// console.log(movieYear);

//find the name of the movie and add a number to the rating


const changeRate =movies.filter(name =>name.movieName=='Spider-Man: No Way Home');



function newMovieRate(title,rank){
    title=changeRate[0].movieName
    rank= 11
    changeRate[0].movieRating=rank
    return (title, rank);
}
console.log(newMovieRate(changeRate));
console.log(changeRate);