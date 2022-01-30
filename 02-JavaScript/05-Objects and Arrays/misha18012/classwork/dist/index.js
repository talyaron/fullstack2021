var michaHome = {
    movies: [],
    books: [],
    clothes: [],
    addMovie: function (movie) {
        this.movies.push(movie);
    },
    removeMovie: function (movieTitle) {
        var index = this.movies.findIndex(function (movie) { return movie.title === movieTitle; });
        if (index >= 0) {
            this.movies.splice(index, 1);
        }
    },
    renderMovies: function (domElement) {
        var html = '';
        this.movies.forEach(function (movie) {
            html += "<div class='card'>\n            <p> " + movie.title + ", " + movie.year + "</p></div>";
        });
        domElement.innerHtml = html;
    }
};
function handleAddMovie(ev) {
    ev.preventDefault();
    var title = ev.target.elements.title.value;
    var year = ev.target.elements.year.valueAsNumber;
    michaHome.addMovie({ title: title, year: year });
    var rootMovies = document.getElementById('rootMovies');
    michaHome.renderMovies(rootMovies);
    // ev.target.reset();
}
michaHome.addMovie({ title: 'matrix', year: 1999 });
michaHome.addMovie({ title: 'matrix-2', year: 2000 });
michaHome.addMovie({ title: 'matrix-3', year: 2003 });
michaHome.removeMovie('matrix-2');
var rootMovies = document.getElementById('rootMovies');
michaHome.renderMovies(rootMovies);
console.log(michaHome);
