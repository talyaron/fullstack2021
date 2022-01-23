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
            html += "<div class = 'card'>\n            <p>Title: " + movie.title + " </p>\n            <p>Director: " + movie.director + " </p>";
        });
        html += "</div>";
        domElem.innerHTML = html;
    }
};
function handleMovie(ev) {
    ev.preventDefault();
    var title = ev.target.elements.Title.value;
    var director = ev.target.elements.Director.value;
    omriHome.addMovie({ title: title, director: director });
    var root_Movies = document.querySelector('#root_Movies');
    omriHome.renderMovie(root_Movies);
}
omriHome.addMovie({ title: 'The Pianist', director: 'Roman Polanski' });
var rootMovies = document.querySelector('#root_Movies');
omriHome.renderMovie(rootMovies);
