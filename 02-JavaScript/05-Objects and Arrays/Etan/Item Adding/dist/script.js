var container = document.querySelector("#container");
var myHome = {
    Books: [
        { name: "atomic habbits", author: "James Clear" },
        { name: "john", author: "dough" },
    ],
    Clothes: [
        { type: "Jeans pants", company: "Levi's" },
        { type: "Jeans jacket", company: "Levi's" },
    ],
    Movies: [
        { name: "Harry potter 1", year: 2001 },
        { name: "Harry potter 2", year: 2002 },
    ],
    addBook: function (name, author) {
        this.Books.push({ name: name, author: author });
        var lastOfList = myHome.Books.at(-1);
        var lastBook = "<div id=\"book\">\n       <p class=\"text\">Your newly added book is:</p>\n       <p class=\"first\">" + lastOfList.name + "</p>\n       <p class=\"second\">By: " + lastOfList.author + "</p>\n   </div>";
        container.innerHTML += lastBook;
    },
    removeBook: function (name) {
        this.Books.splice(name, 1);
    },
    addClothing: function (type, company) {
        var upHome = this.Clothes.push({ type: type, company: company });
        var lastOfList = myHome.Clothes.at(-1);
        var lastClothing = "<div id=\"clothing\">\n       <p class=\"text\">Your newly added clothing item is:</p>\n       <p class=\"first\">A " + lastOfList.type + "</p>\n       <p class=\"second\">By: " + lastOfList.company + "</p>\n   </div>";
        container.innerHTML += lastClothing;
    },
    removeClothing: function (type) {
        this.Clothes.splice(type, 1);
    },
    addMovie: function (name, year) {
        this.Movies.push({ name: name, year: year });
        var lastOfList = myHome.Movies.at(-1);
        var lastMovie = "<div id=\"movie\">\n       <p class=\"text\">Your newly added movie is:</p>\n       <p class=\"first\">" + lastOfList.name + "</p>\n       <p class=\"second\">Published:" + lastOfList.year + "</p>\n       </div>";
        container.innerHTML += lastMovie;
    },
    removeMovie: function (name) {
        this.Movies.splice(name, 1);
    }
};
myHome.addBook("JavaScript: The Good Parts", "Douglas Crockford");
myHome.addClothing("jacket", "Levi's");
myHome.addMovie("Pirates of Silicon Valley", 1999);
myHome.removeBook("atomic habbits");
myHome.removeClothing("Jeans jacket", "Levi's");
myHome.removeMovie("Harry potter 1");
console.log(myHome);
