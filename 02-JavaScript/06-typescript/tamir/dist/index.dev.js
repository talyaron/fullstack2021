"use strict";

//    sort by rating
// const Movies = [{
//         moviename: 'spidermen',
//         year: 1965,
//         director: 'shoval',
//         rating: 10
//     },
//     {
//         moviename: 'sopermen',
//         year: 1972,
//         director: 'aviel',
//         rating: 6
//     },
//     {
//         moviename: 'metriks',
//         year: 1935,
//         director: 'tamir',
//         rating: 7
//     },
//     {
//         moviename: 'lusi',
//         year: 1927,
//         director: 'haim',
//         rating: 8.6
//     }
// ];
// const shortmovies = Movies.sort(
//     (a,b)=>(a.rating<b.rating? 1:-1)
// );
// console.log(shortmovies)
// sort by year
// const sortyear = Movies.sort(
//     (a,b)=>(a.year<b.year? 1:-1)
// );
// console.log(sortyear)
// finddirector
// function changerating(Movies, director, newrating) {
//     const index = Movies.findIndex(Movie => Movie.director === director)
//     try {
//         if (typeof director !=='number') throw new eroor('director is not a number')
//         if (index === -1) {
//             return Movies
//         } else {
//             Movies[index].rating = newrating;
//             return Movies
//         }
//     }
//     catch (error){
//         console.log(error)
//     }
// }
console.dir(window);
console.dir(document);
console.dir(navigator);