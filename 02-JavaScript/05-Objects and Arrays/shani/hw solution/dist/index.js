var shaniHome = {
    movies: [{ title: "shani", year: 1999 }],
    books: [{ title: "Apple", author: "shani" }],
    clothes: [{ type: "Shoe", brand: "store" }],
    addMovie: function (movie) {
        this.movies.push(movie);
    },
    addBook: function (book) {
        this.books.push(book);
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
            html += "<div class='card'>\n            <p>" + movie.title + ", " + movie.year + "</p></div>";
        });
        domElement.innerHTML = html;
    }
};
function handleAddMovie(ev) {
    ev.preventDefault();
    console.dir(ev.target);
    var title = ev.target.elements.title.value;
    var year = ev.target.elements.year.valueAsNumber;
    shaniHome.addMovie({ title: title, year: year });
    var rootMovies = document.getElementById('rootMovies');
    shaniHome.renderMovies(rootMovies);
    ev.target.reset();
}
shaniHome.addMovie({ title: 'matrix', year: 1999 });
shaniHome.addBook({ title: "meeee", author: "shani" });
shaniHome.removeMovie('matrix-2');
var rootMovies = document.getElementById('rootMovies');
shaniHome.renderMovies(rootMovies);
console.log(shaniHome);
