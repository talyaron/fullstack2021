var shaniHome = {
    movies: [{ title: "Shark Tale", imgSrc: "https://m.media-amazon.com/images/M/MV5BMTMxMjY0NzE2M15BMl5BanBnXkFtZTcwNTc3ODcyMw@@._V1_.jpg", year: 2004 },
        { title: "Some Like It Hot", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Some_Like_It_Hot_%281959_poster%29.png", year: 1959 },],
    books: [{ title: "The Girl with the Dragon Tattoo", imgSrc: "https://m.media-amazon.com/images/I/51L+3fbhYML.jpg", author: "Stieg Larsson" },
        { title: "The Land of Stories: A Grimm Warning", imgSrc: "https://images-na.ssl-images-amazon.com/images/I/91Q5WZ7+TlL.jpg", author: "Chric Colfer" },],
    expiredStuff: [{ name: "Neosporin", description: "It still seems to work", year: 2018 },
        { name: "Bagel", description: "No one wants to be the asshole that takes the last bagel", year: 2017 },],
    addMovie: function (movie) {
        this.movies.push(movie);
    },
    addBooks: function (book) {
        this.books.push(book);
    },
    addExpired: function (expired) {
        this.expiredStuff.push(expired);
    },
    removeMovie: function (movieTitle) {
        var index = this.movies.findIndex(function (movie) { return movie.title === movieTitle; });
        if (index >= 0) {
            this.movies.splice(index, 1);
        }
    },
    removeBooks: function (bookTitle) {
        var index = this.books.findIndex(function (book) { return book.title === bookTitle; });
        if (index >= 0) {
            this.books.splice(index, 1);
        }
    },
    removeExpired: function (expiredName) {
        var index = this.expiredStuff.findIndex(function (expired) { return expired.name === expiredName; });
        if (index >= 0) {
            this.expiredStuff.splice(index, 1);
        }
    },
    renderMovies: function (domElement) {
        var html = '';
        this.movies.forEach(function (movie) {
            html += "<div class='card'>\n            <p>" + movie.title + ", " + movie.year + "</p> <img src=" + movie.imgSrc + "></div>";
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
    var rootM = document.getElementById('rootMovies');
    shaniHome.renderMovies(rootM);
    ev.target.reset();
}
shaniHome.addMovie({ title: "Madagascar", imgSrc: "", year: 2005 });
shaniHome.addBooks({ title: "Harry Potter", imgSrc: "", author: "JK Rowling" });
shaniHome.addExpired({ name: "apple", description: "for pie maybe ", year: 2021 });
shaniHome.removeMovie("Madagascar");
shaniHome.removeBooks("Harry Potter");
shaniHome.removeExpired("apple");
var rootM = document.getElementById('rootMovies');
shaniHome.renderMovies(rootM);
console.log(shaniHome);
