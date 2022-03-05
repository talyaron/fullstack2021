var myHome = {
    books: [],
    clothes: [],
    movies: [],
    addItems: function () {
        this.books.push("harry , potter , meod");
        this.clothes.push("shoe , tshirt , nose");
        this.movies.push("movie1 , movie2 , movie3");
        return this;
    },
    removeItem: function (item) {
        var _this = this;
        this.books.forEach(function (element, i) {
            if (item == element)
                return _this.books.splice(i, 1);
        });
        this.clothes.forEach(function (element, i) {
            if (item == element)
                return _this.books.splice(i, 1);
        });
        this.movies.forEach(function (element, i) {
            if (item == element)
                return _this.books.splice(i, 1);
        });
        return this;
    }
};
// myHome.addItems();
// myHome.removeItem('potter')
var root = document.getElementById('root');
function renderObj(objMyHome, root) {
    var html = '';
    objMyHome.books.forEach(function (book) {
        var bookss = "<div class = 'card' > <h2>" + book;
        objMyHome.clothes.forEach(function (cloth) {
            var clothes = "<div class = 'card' > <h2>" + cloth;
        });
        objMyHome.movies.forEach(function (movie) {
            var movies = "<div class = 'card' > <h2>" + movie;
        });
    });
    bookss =
        clothes;
}
