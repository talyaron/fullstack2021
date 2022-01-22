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
            html += "<div class='card'>\n            <p>" + movie.title + ", " + movie.year + "</p></div>";
        });
        // console.log(html)
        domElement.innerHTML = html;
    }
};
// const numbers = [2, 4, 5, 66, 45, 23, 12];
// const lessThan20 = numbers.filter((elm) => { return elm > 20 });
// console.log(lessThan20)
function handleAddMovie(ev) {
    ev.preventDefault();
    console.dir(ev.target);
    var title = ev.target.elements.title.value;
    var year = ev.target.elements.year.valueAsNumber;
    talHome.addMovie({ title: title, year: year });
    var rootMovies = document.getElementById('rootMovies');
    talHome.renderMovies(rootMovies);
    ev.target.reset();
}
talHome.addMovie({ title: 'matrix-3', year: 2003 });
talHome.addMovie({ title: 'matrix', year: 1999 });
talHome.addMovie({ title: 'matrix-2', year: 2000 });
var rootMovies = document.getElementById('rootMovies');
talHome.renderMovies(rootMovies);
console.log(talHome);
var newMovies = talHome.newMovies(1999);
console.log(newMovies);
// talHome.sortMovies();
// console.log(talHome.movies);
// function handlePriceChange(ev){
//     console.log(ev.target.valueAsNumber)
