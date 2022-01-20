var myHome = {
    books: [],
    clothes: [],
    movies: [],
    addItems: function () {
        this.books.push({ name: "harry potter" }, { name: "god of war" }),
            this.clothes.push({ name: "jeans" }, { name: "shirt" });
        this.movies.push({ name: "name:fast and furious" }, { name: "the saw" });
        return this;
    }
};
console.log(myHome.addItems());
function renderItems(myHome, domElement) {
    var html = "\n    <h1>My Home</h1>\n    <h1>books:</h1>";
    myHome.books.forEach(function (book) {
        var homeHtml = "<div class='card'><h2>" + book.name + "</h2> </div>";
        html += homeHtml;
    });
    myHome.movies.forEach(function (movie) {
        var homeHtml = "<div class='card'><h2>" + movie.name + "</h2> </div>";
        html += homeHtml;
    });
    html += "<h1>clothes:</h1>";
    myHome.clothes.forEach(function (clothes) {
        var homeHtml = "<div class='card'><h2>" + clothes.name + "</h2> </div>";
        html += homeHtml;
    });
    domElement.innerHtml = html;
}
var root = document.querySelector("#rootItems");
renderItems(myHome, root);
