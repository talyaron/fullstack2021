interface MyHome {
    movies: Array<Movie>;
    books: Array<Books>;
    clothes: Array<Clothes>;
    addMovie(movie: Movie);
    removeMovie(movieTitle: string);
    renderMovies(domElement: any);
    newMovies(year: number);
    sortMovies(orderBy?: string);
}

interface Movie {
    title: string;
    year: number
}
interface Books {
    title: string;
    author: string;
}
interface Clothes {
    type: string;
    brand: string;
}

const talHome: MyHome = {
    movies: [],
    books: [],
    clothes: [],
    addMovie(movie: Movie) {
        this.movies.push(movie);
    },
    removeMovie(movieTitle: string) {

        const index = this.movies.findIndex(movie => movie.title === movieTitle);
        if (index >= 0) {
            this.movies.splice(index, 1)
        }
    },
    renderMovies(domElement) {
        let html = '';
        this.movies.forEach(movie => {
            html += `<div class='card'>
            <p>${movie.title}, ${movie.year}</p></div>`
        })
        // console.log(html)
        domElement.innerHTML = html
    },
    newMovies(year): Array<Movie> {
        return this.movies.filter((movie) => { return movie.year > year })
    },
    sortMovies(orderBy = 'asc') {
        if (orderBy === 'asc') {
            this.movies.sort((a, b) => { return a.year - b.year })
        } else if (orderBy === 'desc') {
            this.movies.sort((a, b) => { return b.year - a.year })
        }
    }


}

const numbers = [2, 4, 5, 66, 45, 23, 12];
const lessThan20 = numbers.filter((elm) => { return elm > 20 });
console.log(lessThan20)

function handleAddMovie(ev) {
    ev.preventDefault();
    console.dir(ev.target)
    const title = ev.target.elements.title.value;
    const year: number = ev.target.elements.year.valueAsNumber;

    talHome.addMovie({ title, year });
    const rootMovies = document.getElementById('rootMovies');
    talHome.renderMovies(rootMovies);

    ev.target.reset();
}

talHome.addMovie({ title: 'matrix-3', year: 2003 });
talHome.addMovie({ title: 'matrix', year: 1999 });
talHome.addMovie({ title: 'matrix-2', year: 2000 });



const rootMovies = document.getElementById('rootMovies');
talHome.renderMovies(rootMovies);

console.log(talHome);

const newMovies = talHome.newMovies(1999);
console.log(newMovies);

talHome.sortMovies();
console.log(talHome.movies)