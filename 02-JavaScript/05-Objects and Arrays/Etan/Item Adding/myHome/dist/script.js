var container = document.querySelector('#container');
var myHome = {
    Books: [
        { name: 'atomic habbits', author: 'James Clear' },
        { name: 'john', author: 'dough' }
    ],
    Clothes: [
        { type: 'Jeans pants', company: "Levi's" },
        { type: 'Jeans jacket', company: "Levi's" }
    ],
    Movies: [
        { name: "Harry potter 1", year: 2001 },
        { name: "Harry potter 2", year: 2002 }
    ],
    addBook: function (name, author) {
        var upHome = this.Books.push({ name: name, author: author });
        var lastOfList = myHome.Books.at(-1);
        var lastBook = "<div id=\"book\">\n       <p class\u00DF=\"text\">Your newly added book is:</p>\n       <p class=\"first\">" + lastOfList.name + "</p>\n       <p class=\"second\">By: " + lastOfList.author + "</p>\n   </div>";
        container.innerHTML += lastBook;
        return upHome;
    },
    addClothing: function (type, company) {
        var upHome = this.Clothes.push({ type: type, company: company });
        var lastOfList = myHome.Clothes.at(-1);
        var lastClothing = "<div id=\"clothing\">\n       <p class\u00DF=\"text\">Your newly added clothing item is:</p>\n       <p class=\"first\">A " + lastOfList.type + "</p>\n       <p class=\"second\">By: " + lastOfList.company + "</p>\n   </div>";
        container.innerHTML += lastClothing;
        return upHome;
    },
    addMovie: function (name, year) {
        var upHome = this.Movies.push({ name: name, year: year });
        var lastOfList = myHome.Movies.at(-1);
        var lastMovie = "<div id=\"movie\">\n       <p class\u00DF=\"text\">Your newly added movie is:</p>\n       <p class=\"first\">" + lastOfList.name + "</p>\n       <p class=\"second\">Published:" + lastOfList.year + "</p>\n       </div>";
        container.innerHTML += lastMovie;
        return upHome;
    }
};
myHome.addBook('JavaScript: The Good Parts', 'Douglas Crockford');
myHome.addClothing('jacket', "Levi's");
myHome.addMovie('Pirates of Silicon Valley', 1999);
console.log(myHome);
//לא עשית מחיקה
//remove an item from an array, by name of the item.
