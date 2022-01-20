var myHome = {
    books: [
        { name: "Tania" },
        { name: "Rashi" },
        { name: "siddur" }
    ],
    movies: [
        { name: "spider-man" },
        { name: "the blind side" },
        { name: "prestige" }
    ],
    spices: [
        { name: "paprika" },
        { name: "salt" },
        { name: "pepper" }
    ],
    addObj: function (obj, title) {
        obj.push({ name: title });
        return this;
    },
    removeObj: function (obj, title) {
        var index = obj.indexOf(title);
        obj.splice(index);
        return this;
    }
};
myHome.addObj(myHome.books, "Tehilim");
myHome.removeObj(myHome.spices, "pepper");
console.dir(myHome);
function renderHome(homeObj, domElement) {
    var HTML = "\n    <h1>My Home</h1>\n    <h1>books:</h1>";
    myHome.books.forEach(function (book) {
        var homeHtml = "<div class='card'><h2>" + book.name + "</h2> </div>";
        HTML += homeHtml;
    });
    HTML += "<h1>movies:</h1>";
    myHome.movies.forEach(function (movie) {
        var homeHtml = "<div class='card'><h2>" + movie.name + "</h2> </div>";
        HTML += homeHtml;
    });
    HTML += "<h1>spices:</h1>";
    myHome.spices.forEach(function (spice) {
        var homeHtml = "<div class='card'><h2>" + spice.name + "</h2> </div>";
        HTML += homeHtml;
    });
    domElement.innerHTML = HTML;
}
var root = document.querySelector("#rootHome");
renderHome(myHome, root);
