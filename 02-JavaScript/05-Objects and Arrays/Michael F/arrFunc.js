//Create objects (title, director, rating, year) of 6 movies from IMDB 
//(https://www.imdb.com/chart/top/?ref_=nv_mv_250)Create an array of movies (called movies)

const shawshank = {
    title: "The shawshank redemption",
    director: "Frank Darabont",
    rating: 9.2,
    year: 1994,
}

const godfather1 = {
    title: "The godfather",
    director: "Francis Ford Coppola",
    rating: 9.1,
    year: 1972,
}

const godfather2 = {
    title: "The godfather: partII",
    director: "Francis Ford Coppola",
    rating: 9,
    year: 1974,
}

const darkKnight = {
    title: "The dark knight",
    director: "Christopher Nolan",
    rating: 9,
    year: 1994,
}

const angryMen = {
    title: "12 Angry Men",
    director: "Sidney Lumet",
    rating: 8.9,
    year: 1957,
}

const Schindler = {
    title: "The Schindler's list",
    director: "Steven Spielberg",
    rating: 8.9,
    year: 1993,
}



//Create a function that finds the movie according to its title, and changes its ranking to the new ranking which was set to the function (function changeRanking(title, newRanking){})
//function changeRanking(title, newRanking){}



function changeRanking (title, newRanking) {let new = movies.forEach(movie) => movie.title == title);
    movies[new].rating = newRanking;
};




//     for (let i=0; i<title; i++){
//         newRanking.rating++;
//     }
// });

// console.log(changeRanking);

// const movies = [shawshank, godfather1, godfather2, darkKnight, angryMen, Schindler];


// let changeRanking = movies.filter((movie, rank) => {
//     if (movie.title == "The godfather"){
//         return rank.rating + 1;
//     }
// });

// console.log(changeRanking("The godfather", 9.1));

// function changeRanking(title, newRanking){

// }





/*


sort()
------
let year = movies.sort((a,b) => a.year - b.year);
console.log(year);
let alpha = movies.sort((a, b) => a.title.localeCompare(b.title));
console.log(alpha);
//let rate = movies.sort((a,b) => a.rating - b.rating)
//console.log(rate);

let rate = movies.sort((a,b) => 0 <= (a.rating - b.rating))
console.log(rate);

let stam = ['miki', 'aba', 'uri', 'ima', 'yael'];
let stam2 = stam.sort();
console.log(stam2);



const rate =  movies.sort((a,b) => b-a<0);
console.log(rate);


//let rank = movies.sort(movie => movie.title);
//console.log(rank);




filter()
========
const rate = movies.filter(movie => movie.rating >=9);
console.log(rate)

arrays.forEach()
-----------------
movies.forEach(movie => console.log(movie.rating))

for in
------
for (let i in movies){
    console.log(i, movies[i], movies[i].title)
}

for of
------
for (let i of movies){
    console.log(i)
}

let moviesSorted = movies.sort(movie => {return movie.rating;});
console.log(moviesSorted);

let moviesYear = movies.sort(movie => {return movie.year;});
console.log(moviesYear);

*/












