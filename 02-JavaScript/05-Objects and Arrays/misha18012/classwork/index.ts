interface MichaHome {
    movies: Array<Movie>;
    books: Array<Books>;
    clothes: Array<Clothes>;
    addMovie(movie: Movie);
    removeMovie(moviteTitle: string);
    renderMovies(domElement: any);
}

interface Movie {
    title: string;
    year: number;
}
interface Books {
    title: string;
    author: string;
}
interface Clothes {
    type: string;
    brand: string;
}

const michaHome: MichaHome = {
    movies: [],
    books: [],
    clothes: [],
    addMovie(movie: Movie) {
        this.movies.push(movie);
    },
    removeMovie(movieTitle: string) {

        const index = this.movies.findIndex(movie => movie.title === movieTitle);
        if (index >= 0) {
            this.movies.splice(index, 1);
        }
    },
    renderMovies(domElement) {
        let html = '';
        this.movies.forEach(movie => {
            html += `<div class='card'>
            <p> ${movie.title}, ${movie.year}</p></div>`
        })

        domElement.innerHtml = html;
    }
}

function handleAddMovie(ev) {
    ev.preventDefault();

    const title = ev.target.elements.title.value;
    const year: number = ev.target.elements.year.valueAsNumber;

    michaHome.addMovie({ title, year });
    const rootMovies = document.getElementById('rootMovies');
    michaHome.renderMovies(rootMovies);

    // ev.target.reset();
}

michaHome.addMovie({ title: 'matrix', year: 1999 });
michaHome.addMovie({ title: 'matrix-2', year: 2000 });
michaHome.addMovie({ title: 'matrix-3', year: 2003 });
michaHome.removeMovie('matrix-2');

const rootMovies = document.getElementById('rootMovies');

michaHome.renderMovies(rootMovies);

console.log(michaHome);