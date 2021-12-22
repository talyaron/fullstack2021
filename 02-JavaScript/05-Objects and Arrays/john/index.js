movie_1={
    title:"Empire stikes back",
    director:"Irvin Kershner",
    rating:8.7,
    year:1980
} 
movie_2={
    title:"Spider-Man: No Way Home",
    director:"Jon Watts",
    rating:9.0,
    year:2021,
}   
movie_3={
    title:"The King Lion",
    director:"Roger Allers",
    rating:8.5,
    year:1994,
}   
movie_4={
    title:"Shutter Island",
    director:"Martin Scorsese",
    rating:8.1,
    year:2010,
}   
movie_5={
    title:"Avengers: Infinity War",
    director:"Anthony Russo",
    rating:8.4,
    year:2018,
}   
movie_6={
    title:"Coco",
    director:"Lee Unkrich",
    rating:8.4,
    year:2017,
}     
const movies = [movie_1,movie_2,movie_3,movie_4,movie_5,movie_6];
let ranking = (movies) => {
    movies.sort(function (a, b) { return (b.rating) - (a.rating) });
};  

ranking(movies);
let moviesRank = "";
for (i = 0; i < movies.length; i++) {
    moviesRank += `${movies[i].title} ${movies[i].rating}. `;
}
alert(`${moviesRank}`)

let yearOf = (movies) => {
    movies.sort(function (a, b) { return (a.year) - (b.year) });
};

yearOf(movies);
let moviesYear = "";
for (i = 0; i < movies.length; i++) {
    moviesYear += `${movies[i].title} ${movies[i].year}. `;
}
alert(`${moviesYear}`)
