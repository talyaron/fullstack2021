var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
var StandartEbooks = {
    books: [
        {
            title: "Hemlock Veils",
            author: "Davenport Jennie",
            genre: "science fiction",
            year: 2014,
            rank: 3.62,
            price: 15,
            img: "https://litlife.club/data/Book/0/234000/234306/BC3_1422109172.jpg?w=600&h=600&q=90"
        },
        {
            title: "One by One",
            author: "Carter Chris",
            genre: "detective",
            year: 2013,
            rank: 9.83,
            price: 28,
            img: "https://litlife.club/data/Book/0/217000/217759/BC3_1410688094.jpg?w=600&h=600&q=90"
        },
        {
            title: "Fight Club",
            author: "Palahniuk Chuck",
            genre: "prose",
            year: 2009,
            rank: 9.63,
            price: 17,
            img: "https://litlife.club/data/Book/0/87000/87828/BC3_1474544490.jpg?w=600&h=600&q=90"
        },
        {
            title: "Ramage",
            author: "Pope Dudley",
            genre: "adventures",
            year: 2010,
            rank: 10.0,
            price: 34,
            img: "https://litlife.club/data/Book/0/119000/119128/BCS_1349028836.jpg?w=600&h=600&q=90"
        },
        {
            title: "Grimms` Fairy Tales",
            author: "Davenport Jennie",
            genre: "children",
            year: 1994,
            rank: 9.5,
            price: 32,
            img: "https://litlife.club/data/Book/0/0/707/BC3_1386593820.jpg?w=600&h=600&q=90"
        },
        {
            title: "The Caller",
            author: "Carter Chris",
            genre: "detective",
            year: 2017,
            rank: 9.59,
            price: 44,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg0qX-IoJ1JM2tnDq2uuAddWLNtVo5MSU72zXtTBJm8O9CET4_"
        },
        {
            title: "Revelation",
            author: "Karpyshyn Drew",
            genre: "science fiction",
            year: 2010,
            rank: 7.8,
            price: 21,
            img: "https://litlife.club/data/Book/0/91000/91909/BCS_1349020826.jpg?w=600&h=600&q=90"
        },
        {
            title: "Deception Point",
            author: "Brown Dan",
            genre: "detective",
            year: 2010,
            rank: 9.99,
            price: 39,
            img: "https://litlife.club/data/Book/0/125000/125823/BCS_1349021980.jpg?w=600&h=600&q=90"
        },
        {
            title: "The Secret History",
            author: "Tartt Donna",
            genre: "prose",
            year: 2011,
            rank: 9.89,
            price: 41,
            img: "https://litlife.club/data/Book/0/94000/94365/BC3_1474425076.jpg?w=600&h=600&q=90"
        },
        {
            title: "Hornblower and the Crisis",
            author: "Forester Cecil Scott",
            genre: "adventures",
            year: 1990,
            rank: 0.23,
            price: 10,
            img: "https://litlife.club/data/Book/0/126000/126284/BCS_1349022091.jpg?w=600&h=600&q=90"
        },
        {
            title: "The Adventures of Huckleberry Finn",
            author: "Twain Mark",
            genre: "children",
            year: 1981,
            rank: 10.0,
            price: 43,
            img: "https://litlife.club/data/Book/0/0/755/BC3_1386593870.jpg?w=600&h=600&q=90",
            annotation: "Book Description Hilariously picaresque, epic in scope, alive with the poetry and vigor of the American people, Mark Twain's story about a young boy and his journey down the Mississippi was the first great novel to speak in a truly American voice. Influencing subsequent generations of writers — from Sherwood Anderson to Twain's fellow Missourian, T.S. Eliot, from Ernest Hemingway and William Faulkner to J.D. Salinger — Huckleberry Finn, like the river which flows through its pages, is one of the great sources which nourished and still nourishes the literature of America."
        },
    ],
    storeData: function () {
        localStorage.setItem("storeData", JSON.stringify(this.books));
    },
    getData: function () {
        var booksStorage = JSON.parse(localStorage.getItem("storeData"));
        if (booksStorage) {
            this.books = booksStorage;
        }
    },
    addBook: function (title, author, genre, year, rank, price, img, annotation) {
        var id = uid();
        this.books.push({ title: title, author: author, genre: genre, year: year, rank: rank, price: price, img: img, annotation: annotation, id: id });
        this.storeData();
    },
    deleteBook: function (title) {
        var index = this.books.findIndex(function (book) { return book.title === title; });
        if (index >= 0) {
            this.books.splice(index, 1);
        }
        this.storeData();
    },
    deleteByID: function (id) {
        this.books = this.books.filter(function (book) { return book.id !== id; });
        localStorage.setItem('storeData', JSON.stringify(this.books));
    },
    updateBook: function (title, price, id) {
        var index = this.books.findIndex(function (book) { return book.id === id; });
        if (index >= 0) {
            this.books[index].title = title;
            this.books[index].price = price;
        }
        this.storeData();
    },
    addToCard: function (book) {
    },
    sortAscenByAuthor: function () {
        this.books = this.books.sort(function (a, b) {
            var authorA = a.author.toLowerCase(), authorB = b.author.toLowerCase();
            if (authorA < authorB)
                //sort string ascending
                return -1;
            if (authorA > authorB)
                return 1;
            return 0; //default return value (no sorting)
        });
        this.books.forEach(function (book) {
            console.log(book.author);
        });
    },
    sortDescenByAuthor: function () {
        this.books = this.books.sort(function (a, b) {
            var authorA = a.author.toLowerCase(), authorB = b.author.toLowerCase();
            if (authorA < authorB)
                //sort string ascending
                return 1;
            if (authorA > authorB)
                return -1;
            return 0; //default return value (no sorting)
        });
        console.log('------');
        this.books.forEach(function (book) {
            console.log(book.author);
        });
    },
    sortAscenByYear: function () {
        this.books = this.books.sort(function (a, b) {
            return a.year - b.year;
        });
    },
    sortDescenByYear: function () {
        this.books = this.books.sort(function (a, b) {
            return b.year - a.year;
        });
    },
    sortAscenByRanking: function () {
        this.books = this.books.sort(function (a, b) {
            return a.rank - b.rank;
        });
    },
    sortDescenByRanking: function () {
        this.books = this.books.sort(function (a, b) {
            return b.rank - a.rank;
        });
    },
    filterByYear: function (year) {
        return this.books.filter(function (book) { return book.year <= year; });
    },
    filterByRank: function (rank) {
        return this.books.filter(function (book) { return book.rank <= rank; });
    },
    filterByGenre: function (genre) {
        return this.books.filter(function (book) { return book.genre === genre; });
    },
    filterByAuthor: function (author) {
        return this.books.filter(function (book) { return book.author === author; });
    },
    filterByTitle: function (title) {
        return this.books.filter(function (book) { return book.title === title; });
    },
    renderFilterByTitle: function (filteredByTitle, domElement) {
        this.render(filteredByTitle, domElement);
    },
    renderFilterByAuthor: function (filteredByAuthor, domElement) {
        this.render(filteredByAuthor, domElement);
    },
    renderFilterByGenre: function (filteredByGenre, domElement) {
        this.render(filteredByGenre, domElement);
    },
    renderFilterByRank: function (filteredByRank, domElement) {
        this.render(filteredByRank, domElement);
    },
    renderFilterByYear: function (filteredByYear, domElement) {
        this.render(filteredByYear, domElement);
    },
    render: function (list, domElement) {
        var htmlStore = '';
        list.forEach(function (book) {
            htmlStore +=
                "<div class=\"container__card\">\n                  <h2>" + book.title + "</h2>\n                  <h3>" + book.author + "</h3>      \n                  <img class=\"img\" src=\"" + book.img + "\">\n                  <p>" + book.year + " &nbsp &nbsp " + book.price + "$</p>\n                  <div class=\"rating\">                 \n                      <i class=\"far fa-star  \" data-number=\"1\" id=\"" + book.title + "\" onclick = \"handleStarClick(event)\"></i>\n                      <i class=\"far fa-star  \" data-number=\"2\" id=\"" + book.title + "\" onclick = \"handleStarClick(event)\"></i>\n                       <i class=\"far fa-star \" data-number=\"3\" id=\"" + book.title + "\" onclick = \"handleStarClick(event)\"></i>\n                       <i class=\"far fa-star \" data-number=\"4\" id=\"" + book.title + "\" onclick = \"handleStarClick(event)\"></i>\n                      <i class=\"far fa-star  \" data-number=\"5\" id=\"" + book.title + "\" onclick = \"handleStarClick(event)\"></i>\n                   </div>                   \n                  <p> " + book.rank + "</p>\n                  <input  class = \"container__card__addToCardBtn\" onclick = \"handleAddToCard(event)\" id =\"addToCard\" type =\"button\" value = \"Add to cart\">\n               </div>";
        });
        domElement.innerHTML = htmlStore;
    },
    renderERP: function (list, domElement) {
        var html = " ";
        list.forEach(function (book) {
            html +=
                "<div class=\"containerERP\">\n             <div class='card'>\n    \n                  <div class=\"imgToEdit\">\n                    <div class=\"title\">" + book.title + "</div>\n                    <div class=\"img\"><img src=\"" + book.img + ".jpg\" alt=\"\"></div>\n                      <div class=\"rating\">                 \n                          <i class=\"far fa-star  \" data-number=\"1\" id=\"" + book.title + "\" onclick = \"handleStarClick(event)\"></i>\n                          <i class=\"far fa-star  \" data-number=\"2\" id=\"" + book.title + "\" onclick = \"handleStarClick(event)\"></i>\n                          <i class=\"far fa-star \" data-number=\"3\" id=\"" + book.title + "\" onclick = \"handleStarClick(event)\"></i>\n                          <i class=\"far fa-star \" data-number=\"4\" id=\"" + book.title + "\" onclick = \"handleStarClick(event)\"></i>\n                          <i class=\"far fa-star  \" data-number=\"5\" id=\"" + book.title + "\" onclick = \"handleStarClick(event)\"></i>\n                      </div>\n                  </div>\n\n                  <div class=\"author\">" + book.author + "</div>\n                  <div class=\"genre\">" + book.genre + "</div>\n                  <div class=\"year\">" + book.year + "</div>\n                  <div class=\"rank\">" + book.rank + "</div>\n                  <div class=\"rank\">" + book.rank + "</div>\n                   \n                  \n             </div>               \n             <div class=\"delete\">\n                  <button onclick=\"handleDeleteByID('" + book.id + "')\"><span style =\"color: grey;\">Delete book</span></button>\n             </div>\n             <div class=\"update\">\n                  <form id=\"formAdd\" onsubmit=\"handleUpdateBook(event, '" + book.id + "')\">\n                       <input type=\"text\" name=\"title\" placeholder=\"Edit title\" value=\"" + book.title + "\">\n                       <input type=\"number\" name=\"price\" placeholder=\"Edit price\" value=\"" + book.price + "\">\n                       <input type=\"submit\" id=\"update\" value=\"Update book\">\n                  </form>\n              </div>          \n         </div>";
        });
        domElement.innerHTML = html;
    }
    // renderAddToCard(list, domElement) {
    //   let htmlCard = " ";
    //   list.forEach((book:any) => {
    //     htmlCard += `<div> </div>`
    //   });
    //   domElement.innerHTML = htmlCard;
    // },
    // renderAllBooks(domElement) {
    //   const list = this.books;
    //   this.render(list, domElement);
    //   this.renderERP(list, domElement);
    //   this.renderCard(list, domElement);
    // },
};
var allstars = document.querySelectorAll('.fa-star');
function handleStarClick(ev) {
    allstars.forEach(function (star) {
        if (ev.target.id == star.id && ev.target.dataset.number >= star.dataset.number) {
            console.log(star.dataset.number);
            star.classList.add('fas');
        }
        else if (ev.target.id == star.id && ev.target.dataset.number < star.dataset.number) {
            star.classList.remove('fas');
        }
        else {
            return 0;
        }
    });
}
function handleAddBook(e) {
    e.preventDefault();
    var id = uid();
    console.log(e.target);
    var title = e.target.title.value;
    var author = e.target.author.value;
    var genre = e.target.genre.value;
    var year = e.target.year.valueAsNumber;
    var rank = e.target.rank.valueAsNumber;
    var price = e.target.price.valueAsNumber;
    var img = e.target.img.value;
    var annotation = e.target.annotation.value;
    var root = document.querySelector("#root");
    var rootERP = document.querySelector("#rootERP");
    StandartEbooks.addBook(title, author, genre, year, rank, price, img, annotation);
    // StandartEbooks.renderAllBooks(rootERP);
    StandartEbooks.render(rootERP, root);
    StandartEbooks.storeData();
    e.target.reset();
}
function handleDeleteBook(e) {
    e.preventDefault();
    try {
        console.log(e);
        console.log(e.target.elements["delete"].value);
        var title = e.target.elements["delete"].value;
        // const root = document.querySelector("#root");
        var rootERP_1 = document.querySelector("#rootERP");
        if (title) {
            console.log(title);
            StandartEbooks.deleteBook(title);
            // StandartEbooks.renderAllBooks(root);
            // StandartEbooks.renderAllBooks(rootERP);
            StandartEbooks.renderERP(rootERP_1, StandartEbooks.books);
            StandartEbooks.storeData();
        }
        else {
            throw new Error('User didnt write a title');
        }
    }
    catch (err) {
        console.error(err);
    }
}
function handleDeleteByID(id) {
    var rootERP = document.getElementById('rootERP');
    StandartEbooks.deleteByID(id);
    StandartEbooks.renderERP(StandartEbooks.books, rootERP);
}
function handleUpdateBook(e, id) {
    e.preventDefault();
    var title = e.target.elements.title.value;
    var price = e.target.elements.price.valueAsNumber;
    StandartEbooks.updateBook(title, price, id);
    var rootERP = document.querySelector("#rootERP");
    StandartEbooks.renderERP(StandartEbooks.books, rootERP);
    // StandartEbooks.renderAllBooks(rootERP)
    e.target.reset();
}
// function handleAddToCard() {
// }
function handleAuthorAscen() {
    try {
        StandartEbooks.sortAscenByAuthor();
        var root_1 = document.querySelector("#root");
        // StandartEbooks.renderAllBooks(root);
        StandartEbooks.render(StandartEbooks.books, root_1);
    }
    catch (err) {
        console.error(err);
    }
}
function handleAuthoreDescen() {
    try {
        StandartEbooks.sortDescenByAuthor();
        var root_2 = document.querySelector("#root");
        // StandartEbooks.renderAllBooks(root);
        StandartEbooks.render(StandartEbooks.books, root_2);
    }
    catch (err) {
        console.error(err);
    }
}
function handleYearAscen() {
    StandartEbooks.sortAscenByYear();
    var root = document.querySelector("#root");
    // StandartEbooks.renderAllBooks(root);
    StandartEbooks.render(StandartEbooks.books, root);
}
function handleYearDescen() {
    StandartEbooks.sortDescenByYear();
    var root = document.querySelector("#root");
    // StandartEbooks.renderAllBooks(root);
    StandartEbooks.render(StandartEbooks.books, root);
}
function handleRankingAscen() {
    StandartEbooks.sortAscenByRanking();
    var root = document.querySelector("#root");
    // StandartEbooks.renderAllBooks(root);
    StandartEbooks.render(StandartEbooks.books, root);
}
function handleRankingeDescen() {
    StandartEbooks.sortDescenByRanking();
    var root = document.querySelector("#root");
    // StandartEbooks.renderAllBooks(root);
    StandartEbooks.render(StandartEbooks.books, root);
}
function handleFilterByYear(e) {
    e.preventDefault();
    // console.log(e);
    var year = e.target.valueAsNumber;
    var root = document.querySelector("#root");
    if (year) {
        var filteredByYear = StandartEbooks.filterByYear(year);
        StandartEbooks.renderFilterByYear(filteredByYear, root);
    }
    else {
        // StandartEbooks.renderAllBooks(root);
        StandartEbooks.render(StandartEbooks.books, root);
    }
}
function handleFilterByRank(e) {
    e.preventDefault();
    var rank = e.target.valueAsNumber;
    var root = document.querySelector("#root");
    if (rank) {
        var filteredByRank = StandartEbooks.filterByRank(rank);
        StandartEbooks.renderFilterByRank(filteredByRank, root);
    }
    else {
        // StandartEbooks.renderAllBooks(root);
        StandartEbooks.render(StandartEbooks.books, root);
    }
}
function handleFilterByGenre(e) {
    e.preventDefault();
    var genre = e.target.value;
    var root = document.querySelector("#root");
    if (genre) {
        var filterByGenre = StandartEbooks.filterByGenre(genre);
        StandartEbooks.renderFilterByGenre(filterByGenre, root);
    }
    else {
        // StandartEbooks.renderAllBooks(root);
        StandartEbooks.render(StandartEbooks.books, root);
    }
}
function handleFilterByAuthor(e) {
    e.preventDefault();
    var author = e.target.value;
    var root = document.querySelector("#root");
    if (author) {
        var filterByAuthor = StandartEbooks.filterByAuthor(author);
        StandartEbooks.renderFilterByAuthor(filterByAuthor, root);
    }
    else {
        // StandartEbooks.renderAllBooks(root);
        StandartEbooks.render(StandartEbooks.books, root);
    }
}
function handleFilterByTitle(e) {
    e.preventDefault();
    var title = e.target.value;
    var root = document.querySelector("#root");
    if (title) {
        var filterByTitle = StandartEbooks.filterByTitle(title);
        StandartEbooks.renderFilterByTitle(filterByTitle, root);
    }
    else {
        // StandartEbooks.renderAllBooks(root);
        StandartEbooks.render(StandartEbooks.books, root);
    }
}
var root = document.querySelector("#root");
var rootERP = document.querySelector("#rootERP");
StandartEbooks.renderERP(root, rootERP);
StandartEbooks.getData();
StandartEbooks.storeData();
