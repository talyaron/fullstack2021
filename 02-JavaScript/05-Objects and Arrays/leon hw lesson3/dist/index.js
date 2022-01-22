var myHome = {
    books: [],
    clothes: [],
    movies: [],
    addItems: function () {
        this.books.push({ name: "harry potter", year: "1923" }, { name: "god of war" }),
            this.clothes.push({ name: "jeans" }, { name: "shirt" });
        this.movies.push({ name: "name:fast and furious" }, { name: "the saw" });
        return this;
    }
};
console.log(myHome.addItems());
function renderItems(myHome, domElement) {
    var html = '';
    this.movies.forEach(function (movie) {
        html += "<div class='card'>\n        <p>" + movie.name + ", " + movie.year + "</p></div>";
    });
    domElement.innerHTML = html;
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
