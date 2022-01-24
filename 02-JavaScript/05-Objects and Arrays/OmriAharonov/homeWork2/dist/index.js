var omriHome = {
    movies: [],
    books: [],
    tvShows: [],
    addMovie: function (movie) {
        this.movies.push(movie);
    },
    removeMovie: function (movieTitle) {
        var index = this.movies.findIndex(function (movie) { return movie.title === movieTitle; });
        if (index >= 0) {
            this.movies.splice(index, 1);
        }
    },
    renderMovie: function (domElem) {
        var html = '';
        this.movies.forEach(function (movie) {
            html += "<div class = 'card'>\n            <p> " + movie.title + ", " + movie.year;
        });
        domElem.innerHTML = html;
    }
};
omriHome.addMovie({ title: 'The Pianist', director: 'Roman Polanski' });
var rootMovies = document.querySelector('#root_Movies');
omriHome.renderMovie(rootMovies);
