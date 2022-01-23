var talHome = {
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
            html += "<div class='card'>\n            <h2>" + movie.title + ", " + movie.year + "</h2></div>";
        });
        domElement.innerHTML = html;
    }
};
function handleAddMovie(ev) {
    ev.preventDefault();
    var title = ev.target.elements.title.value;
    var year = ev.target.elements.year.valueAsNumber;
    talHome.addMovie({ title: title, year: year });
    var rootMovies = document.getElementById('rootMovies');
    talHome.renderMovies(rootMovies);
    ev.target.reset();
}
// talHome.addMovie({ title: 'matrix', year: 1999 });
// talHome.addMovie({ title: 'matrix-2', year: 2000 });
// talHome.addMovie({ title: 'matrix-3', year: 2003 });
// talHome.removeMovie('matrix-2');
// const rootMovies = document.getElementById('rootMovies');
// talHome.renderMovies(rootMovies);
// console.log(talHome);
