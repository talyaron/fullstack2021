interface myHome {
    books: Array<Book>;
    movies: Array<Movie>;
    tvShows: Array<tvShow>;
    addMovie(movie: Movie);
    removeMovie(movieTitle: string);
    renderMovie(domElem: any);
}

interface Movie {
    title: string;
    director: string;
}

interface Book {
    title: string;
    author: string;
}

interface tvShow {
    title: string;
    rate: number;
}

const omriHome: myHome = {
    movies: [],
    books: [],
    tvShows: [],
    addMovie(movie: Movie) {
        this.movies.push(movie)
    },
    removeMovie(movieTitle: string) {
        const index = this.movies.findIndex(movie => movie.title === movieTitle);
        if (index >= 0) {
            this.movies.splice(index, 1)
        }
    },
    renderMovie(domElem) {
        let html = '';
        this.movies.forEach(movie => {
            html += `<div class = 'card'>
            <p>Title: ${movie.title} </p>
            <p>Director: ${movie.director} </p>`
        })
        html += `</div>`
        domElem.innerHTML = html;
    }
}

function handleMovie(ev){
    ev.preventDefault();
    const title = ev.target;
    console.dir(title);
    ev.reset()
}


// omriHome.addMovie({ title: 'The Pianist', director: 'Roman Polanski' });
// const rootMovies = document.querySelector('#root_Movies');
// omriHome.renderMovie(rootMovies);