// interface MyHome {
//     movies: Array<Movie>;
//     books: Array<Books>;
//     clothes: Array<Clothes>;
//     addMovie(movie: Movie);
//     removeMovie(movieTitle: string);
//     renderMovies(domElement: any);
// }

// interface Movie {
//     title: string;
//     year: number
// }
// interface Books {
//     title: string;
//     author: string;
// }
// interface Clothes {
//     type: string;
//     brand: string;
// }

// const talHome: MyHome = {
//     movies: [],
//     books: [],
//     clothes: [],
//     addMovie(movie: Movie) {
//         this.movies.push(movie);
//     },
//     removeMovie(movieTitle: string) {

//         const index = this.movies.findIndex(movie => movie.title === movieTitle);
//         if (index >= 0) {
//             this.movies.splice(index, 1)
//         }
//     },
//     renderMovies(domElement) {
//         let html = '';
//         this.movies.forEach(movie => {
//             html += `<div class='card'>
//             <h2>${movie.title}, ${movie.year}</h2></div>`
//         })

//         domElement.innerHTML = html
//     }


// }
// function handleAddMovie(ev) {
//     ev.preventDefault();
//     const title = ev.target.elements.title.value;
//     const year: number = ev.target.elements.year.valueAsNumber;

//     talHome.addMovie({ title, year });
//     const rootMovies = document.getElementById('rootMovies');
//     talHome.renderMovies(rootMovies);

//     ev.target.reset();
// }

// // talHome.addMovie({ title: 'matrix', year: 1999 });
// // talHome.addMovie({ title: 'matrix-2', year: 2000 });
// // talHome.addMovie({ title: 'matrix-3', year: 2003 });
// // talHome.removeMovie('matrix-2');

// // const rootMovies = document.getElementById('rootMovies');
// // talHome.renderMovies(rootMovies);

// // console.log(talHome);