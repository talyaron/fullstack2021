;
var myHome = {
    books: [
        { name: 'Harry Potter ', author: 'J. K. Rowling ', pages: 223 },
        { name: 'Da Vinci Code ', author: 'Dan Brown ', pages: 689 },
        { name: 'Lord of The Rings ', author: 'J. R. R. Tolkien ', pages: 479 }
    ],
    clothing: [
        { item: 'Shirt', color: 'Green', size: 10 },
        { item: 'Pants', color: 'Red', size: 32 },
        { item: 'Shoes', color: 'Black', size: 41 }
    ],
    movies: [
        { name: 'The Hobbit', director: 'J. K. Rowling', rate: 9.5 },
        { name: 'The Matrix', director: 'Lana Wachowski', rate: 9.3 },
        { name: 'Harry Potter', director: 'J. K. Rowling', rate: 9.6 }
    ],
    addMoreBooks: function (bookName, bookAurther, bookPages) {
        var addNewBook = this.books.push({ name: bookName, author: bookAurther, pages: bookPages });
        return this;
    },
    removeBooks: function () {
        var addNewBook = this.books.shift();
        return this;
    },
    addMoreClothing: function (clothingItem, clothingColor, clothingSize) {
        var addNewClothing = this.clothing.push({ item: clothingItem, color: clothingColor, size: clothingSize });
        return this;
    },
    removeClothing: function () {
        var addNewBook = this.clothing.shift();
        return this;
    },
    addMoreMovies: function (movieName, movieDirector, moviesRate) {
        var addNewMovie = this.movies.push({ name: movieName, director: movieDirector, rate: moviesRate });
        return this;
    },
    removeMovies: function () {
        var addNewBook = this.movies.shift();
        return this;
    }
};
function myHomeDome(myHome, domElement) {
    var html = '';
    var bookName = "<h2> My Books. ";
    bookName += '</h2>';
    html += bookName;
    myHome.books.forEach(function (book) {
        var bookHtml = "<div class= 'card'><p>Name : " + book.name + " , Author : " + book.author + ", Total Pages : " + book.pages + "<p>";
        bookHtml += '</div>';
        html += bookHtml;
    });
    var clothingName = "<h2> My Clothes. ";
    clothingName += '</h2>';
    html += clothingName;
    myHome.clothing.forEach(function (wear) {
        var clothingHtml = "<div class= 'card'><p>Item :" + wear.item + " , Color : " + wear.color + " , Size : " + wear.size + "<p>";
        clothingHtml += '</div>';
        html += clothingHtml;
    });
    var movieName = "<h2> My Movies. ";
    movieName += '</h2>';
    html += movieName;
    myHome.movies.forEach(function (movie) {
        var movieHtml = "<div class= 'card'><p>Name : " + movie.name + " , Director : " + movie.director + ", Rate : " + movie.rate + "<p>";
        movieHtml += '</div>';
        html += movieHtml;
    });
    domElement.innerHTML = html;
}
var root = document.querySelector('.renderForm');
myHome.removeBooks();
myHome.removeClothing();
myHome.removeMovies();
myHomeDome(myHome.addMoreBooks('Osho ', ' O.Sho ', 556), root);
myHomeDome(myHome.addMoreClothing('T-Shirt ', ' Black ', 32), root);
myHomeDome(myHome.addMoreMovies('inception ', ' will marks ', '5.6'), root);
console.log(myHome);
