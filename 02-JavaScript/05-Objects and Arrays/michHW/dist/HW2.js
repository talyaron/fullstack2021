var home = {
    books: [{ name: "book1" }, { name: "book2" }, { name: "book3" }, { name: "book4" }],
    clothes: [{ brand: "pants1" }, { brand: "pants1" }, { brand: "pants1" }, { brand: "pants1" }],
    movies: [{ name: "movie1" }, { name: "movie2" }, { name: "movie3" }, { name: "movie4" }],
    pushBook: function (name) {
        var inHome = this.books.push({ name: name });
        return inHome;
    },
    pushClothes: function (name) {
        var inHome = this.clothes.push({ brand: name });
        return inHome;
    },
    pushMovie: function (name) {
        var inHome = this.movies.push({ name: name });
        return inHome;
    },
    // removeBook: function (name: string) {
    //     let outHome = this.books.splice(name, 1)
    //     return outHome
    // },
    // removeClothes: function (name: string) {
    //     let outHome = this.clothes.splice(name, 1)
    //     return outHome
    // },
    // removeMovie: function (name: string) {
    //     let outHome = this.movies.splice(name, 1)
    //     return outHome
    // },
    rendermovie: function (domElement) {
        var html = '';
        this.movies.forEach(function (movie) {
            html += "<div class='card'>\n            <p>" + movie.name + "</p></div>";
        });
        //  console.log(html);
        domElement.innerHTML = html;
    },
    renderbook: function (domElement) {
        var html = "";
        this.books.forEach(function (book) {
            html += "<div class='card2'>\n            <p>" + book.name + "</p></div>";
        });
        domElement.innerHTML = html;
    },
    renderclothing: function (domElement) {
        var html = "";
        this.clothes.forEach(function (clothes) {
            html += "<div class = 'card3'>\n            <p>" + clothes.brand + "</p></div>";
        });
        domElement.innerHTML = html;
    }
};
function functionformovie(ev) {
    ev.preventDefault();
    console.dir(ev.target);
    var name = ev.target.elements.title.value;
    home.pushMovie(name);
    var rootMovie = document.getElementById("rootMovies");
    home.rendermovie(rootMovie);
    ev.target.reset();
}
function functionforbook(ev) {
    ev.preventDefault();
    console.dir(ev.target);
    var name = ev.target.elements.bookName.value;
    home.pushBook(name);
    var rootBook = document.getElementById("rootBook");
    home.renderbook(rootBook);
    ev.target.reset();
}
function functionforclothes(ev) {
    ev.preventDefault();
    console.dir(ev.target);
    var brand = ev.target.elements.brand.value;
    home.pushClothes(brand);
    var rootClothing = document.getElementById("rootClothing");
    home.renderclothing(rootClothing);
    ev.target.reset();
}
home.pushBook("book5");
console.log(home);
