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
            img: "https://litlife.club/data/Book/0/234000/234306/BC3_1422109172.jpg?w=600&h=600&q=90"
        },
        {
            title: "One by One",
            author: "Carter Chris",
            genre: "detective",
            year: 2013,
            rank: 9.83,
            img: "https://litlife.club/data/Book/0/217000/217759/BC3_1410688094.jpg?w=600&h=600&q=90"
        },
        {
            title: "Fight Club",
            author: "Palahniuk Chuck",
            genre: "prose",
            year: 2009,
            rank: 9.63,
            img: "https://litlife.club/data/Book/0/87000/87828/BC3_1474544490.jpg?w=600&h=600&q=90"
        },
        {
            title: "Ramage",
            author: "Pope Dudley",
            genre: "adventures",
            year: 2010,
            rank: 10.0,
            img: "https://litlife.club/data/Book/0/119000/119128/BCS_1349028836.jpg?w=600&h=600&q=90"
        },
        {
            title: "Grimms` Fairy Tales",
            author: "Davenport Jennie",
            genre: "children",
            year: 1994,
            rank: 9.5,
            img: "https://litlife.club/data/Book/0/0/707/BC3_1386593820.jpg?w=600&h=600&q=90"
        },
        {
            title: "Revelation",
            author: "Karpyshyn Drew",
            genre: "science fiction",
            year: 2010,
            rank: 7.8,
            img: "https://litlife.club/data/Book/0/91000/91909/BCS_1349020826.jpg?w=600&h=600&q=90"
        },
        {
            title: "Deception Point",
            author: "Brown Dan",
            genre: "detective",
            year: 2010,
            rank: 9.99,
            img: "https://litlife.club/data/Book/0/125000/125823/BCS_1349021980.jpg?w=600&h=600&q=90"
        },
        {
            title: "The Secret History",
            author: "Tartt Donna",
            genre: "prose",
            year: 2011,
            rank: 9.89,
            img: "https://litlife.club/data/Book/0/94000/94365/BC3_1474425076.jpg?w=600&h=600&q=90"
        },
        {
            title: "Hornblower and the Crisis",
            author: "Forester Cecil Scott",
            genre: "adventures",
            year: 1990,
            rank: 0.23,
            img: "https://litlife.club/data/Book/0/126000/126284/BCS_1349022091.jpg?w=600&h=600&q=90"
        },
        {
            title: "The Adventures of Huckleberry Finn",
            author: "Twain Mark",
            genre: "children",
            year: 1981,
            rank: 10.0,
            img: "https://litlife.club/data/Book/0/0/755/BC3_1386593870.jpg?w=600&h=600&q=90"
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
    addBook: function (title, author, genre, year, rank, img, annotation) {
        var id = uid();
        this.books.push({ title: title, author: author, genre: genre, year: year, rank: rank, img: img, annotation: annotation, id: id });
        this.storeData();
    },
    deleteBook: function (bookName) {
        var index = this.books.findIndex(function (book) { return book.title === bookName; });
        if (index >= 0) {
            this.books.splice(index, 1);
            this.storeData();
        }
    },
    // sortAscenByAuthor() {
    //   this.books = this.books.sort((a, b) => {
    //     return a.author - b.author;
    //   });
    //   console.log(this.books);
    // },
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
    },
    sortDescenByAuthor: function () {
        this.books = this.books.sort(function (a, b) {
            return b.author - a.author;
        });
        console.dir(this);
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
        var html = " ";
        list.forEach(function (book) {
            html += "<div class=\"container__card\">\n                  <h2>" + book.title + "</h2>\n                  <h3> " + book.author + "</h3>      \n                  <img class=\"img\" src=\"" + book.img + "\">\n                  <p>" + book.year + " </p> \n                  <div class=\"star\"\n                  <ion-icon name=\"star-outline\"></ion-icon>\n                  <ion-icon  name=\"star-outline\"></ion-icon>\n                  <ion-icon  name=\"star-outline\"></ion-icon>\n                  <ion-icon  name=\"star-outline\"></ion-icon>\n                  <ion-icon  name=\"star-outline\"></ion-icon>\n                  <ion-icon  name=\"star-outline\"></ion-icon>\n                  </div>\n                  <p> " + book.rank + "</p>\n               </div>";
            //  <div class="annotation">${book.annotation}</div>
        });
        domElement.innerHTML = html;
    },
    renderAllBooks: function (domElement) {
        var list = this.books;
        this.render(list, domElement);
    }
};
function handleAddBook(e) {
    e.preventDefault();
    var id = uid();
    console.log(e.target);
    var title = e.target.title.value;
    var author = e.target.author.value;
    var genre = e.target.genre.value;
    var year = e.target.year.valueAsNumber;
    var rank = e.target.rank.valueAsNumber;
    var img = e.target.img.value;
    var annotation = e.target.annotation.value;
    var root = document.querySelector(".root");
    StandartEbooks.addBook(title, author, genre, year, rank, img, annotation);
    StandartEbooks.renderAllBooks(root);
    StandartEbooks.storeData();
}
function handleDeleteBook(e) {
    e.preventDefault();
    console.log(e);
    var name = e.targer.elements["delete"].value;
    var root = document.querySelector(".root");
    StandartEbooks.deleteBook(bookName);
    StandartEbooks.renderAllBooks(root);
    StandartEbooks.storeData();
}
function handleAuthorAscen() {
    StandartEbooks.sortAscenByAuthor();
    var root = document.querySelector(".root");
    StandartEbooks.renderAllBooks(root);
}
function handleAuthoreDescen() {
    StandartEbooks.sortDescenByAuthor();
    var root = document.querySelector(".root");
    StandartEbooks.renderAllBooks(root);
}
function handleYearAscen() {
    StandartEbooks.sortAscenByYear();
    var root = document.querySelector(".root");
    StandartEbooks.renderAllBooks(root);
}
function handleYearDescen() {
    StandartEbooks.sortDescenByYear();
    var root = document.querySelector(".root");
    StandartEbooks.renderAllBooks(root);
}
function handleRankingAscen() {
    StandartEbooks.sortAscenByRanking();
    var root = document.querySelector(".root");
    StandartEbooks.renderAllBooks(root);
}
function handleRankingeDescen() {
    StandartEbooks.sortDescenByRanking();
    var root = document.querySelector(".root");
    StandartEbooks.renderAllBooks(root);
}
function handleFilterByYear(e) {
    e.preventDefault();
    // console.log(e);
    var year = e.target.valueAsNumber;
    var root = document.querySelector(".root");
    if (year) {
        var filteredByYear = StandartEbooks.filterByYear(year);
        StandartEbooks.renderFilterByYear(filteredByYear, root);
    }
    else {
        StandartEbooks.renderAllBooks(root);
    }
}
function handleFilterByRank(e) {
    e.preventDefault();
    var rank = e.target.valueAsNumber;
    var root = document.querySelector(".root");
    if (rank) {
        var filteredByRank = StandartEbooks.filterByRank(rank);
        StandartEbooks.renderFilterByRank(filteredByRank, root);
    }
    else {
        StandartEbooks.renderAllBooks(root);
    }
}
function handleFilterByGenre(e) {
    e.preventDefault();
    var genre = e.target.value;
    var root = document.querySelector(".root");
    if (genre) {
        var filterByGenre = StandartEbooks.filterByGenre(genre);
        StandartEbooks.renderFilterByGenre(filterByGenre, root);
    }
    else {
        StandartEbooks.renderAllBooks(root);
    }
}
function handleFilterByAuthor(e) {
    e.preventDefault();
    var author = e.target.value;
    var root = document.querySelector(".root");
    if (author) {
        var filterByAuthor = StandartEbooks.filterByAuthor(author);
        StandartEbooks.renderFilterByAuthor(filterByAuthor, root);
    }
    else {
        StandartEbooks.renderAllBooks(root);
    }
}
function handleFilterByTitle(e) {
    e.preventDefault();
    var title = e.target.value;
    var root = document.querySelector(".root");
    if (title) {
        var filterByTitle = StandartEbooks.filterByTitle(title);
        StandartEbooks.renderFilterByTitle(filterByTitle, root);
    }
    else {
        StandartEbooks.renderAllBooks(root);
    }
}
StandartEbooks.getData();
var root = document.querySelector(".root");
StandartEbooks.renderAllBooks(root);
function bookName(bookName) {
    throw new Error("Function not implemented.");
}
// console.log(StandartEbooks.getData());
// LOCAL STORAGE TEST
// let data: number = 0;
// function handleUpdateData(e) {
//   data = e.target.valueAsNumber;
//   console.log(data);
// }
// function handleAddDataToStorage() {
//   localStorage.setItem("storeData", JSON.stringify(data));
// }
// function getData() {
//   data = +JSON.parse(localStorage.getItem("storeData"));
//   console.log(data);
// }
// getData();
