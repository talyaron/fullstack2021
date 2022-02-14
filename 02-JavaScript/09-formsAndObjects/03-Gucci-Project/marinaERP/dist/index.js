var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
var StandartEbooks = {
    books: [
        {
            title: "The Three-Body Problem",
            author: "Liu Cixin",
            genre: "scienceF",
            year: 2008,
            rank: 4.07,
            price: 15,
            img: "https://images-na.ssl-images-amazon.com/images/I/919XM42JQlL.jpg",
            id: uid()
        },
        {
            title: "One by One",
            author: "Carter Chris",
            genre: "detective",
            year: 2013,
            rank: 9.83,
            price: 28,
            img: "https://litlife.club/data/Book/0/217000/217759/BC3_1410688094.jpg?w=600&h=600&q=90",
            id: uid()
        },
        {
            title: "Fight Club",
            author: "Palahniuk Chuck",
            genre: "prose",
            year: 2009,
            rank: 9.63,
            price: 17,
            img: "https://litlife.club/data/Book/0/87000/87828/BC3_1474544490.jpg?w=600&h=600&q=90",
            id: uid()
        },
        {
            title: "Ramage",
            author: "Pope Dudley",
            genre: "adventures",
            year: 2010,
            rank: 10.0,
            price: 34,
            img: "https://litlife.club/data/Book/0/119000/119128/BCS_1349028836.jpg?w=600&h=600&q=90",
            id: uid()
        },
        {
            title: "Grimms` Fairy Tales",
            author: "Davenport Jennie",
            genre: "children",
            year: 1994,
            rank: 9.5,
            price: 32,
            img: "https://litlife.club/data/Book/0/0/707/BC3_1386593820.jpg?w=600&h=600&q=90",
            id: uid()
        },
        {
            title: "The Caller",
            author: "Carter Chris",
            genre: "detective",
            year: 2017,
            rank: 9.59,
            price: 44,
            img: "https://images-na.ssl-images-amazon.com/images/I/81-7W7KGYQL.jpg",
            id: uid()
        },
        {
            title: "Revelation",
            author: "Karpyshyn Drew",
            genre: "scienceF",
            year: 2010,
            rank: 7.8,
            price: 21,
            img: "https://litlife.club/data/Book/0/91000/91909/BCS_1349020826.jpg?w=600&h=600&q=90",
            id: uid()
        },
        {
            title: "Deception Point",
            author: "Brown Dan",
            genre: "detective",
            year: 2010,
            rank: 9.99,
            price: 39,
            img: "https://litlife.club/data/Book/0/125000/125823/BCS_1349021980.jpg?w=600&h=600&q=90",
            id: uid()
        },
        {
            title: "The Secret History",
            author: "Tartt Donna",
            genre: "prose",
            year: 2011,
            rank: 9.89,
            price: 41,
            img: "https://litlife.club/data/Book/0/94000/94365/BC3_1474425076.jpg?w=600&h=600&q=90",
            id: uid()
        },
        {
            title: "Hornblower and the Crisis",
            author: "Forester Cecil Scott",
            genre: "adventures",
            year: 1990,
            rank: 0.23,
            price: 10,
            img: "https://litlife.club/data/Book/0/126000/126284/BCS_1349022091.jpg?w=600&h=600&q=90",
            id: uid()
        },
        {
            title: "The Adventures of Huckleberry Finn",
            author: "Twain Mark",
            genre: "children",
            year: 1981,
            rank: 10.0,
            price: 43,
            img: "https://litlife.club/data/Book/0/0/755/BC3_1386593870.jpg?w=600&h=600&q=90",
            id: uid()
        }
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
        this.books.push({
            title: title,
            author: author,
            genre: genre,
            year: year,
            rank: rank,
            price: price,
            img: img,
            annotation: annotation,
            id: id
        });
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
        localStorage.setItem("storeData", JSON.stringify(this.books));
    },
    updateBook: function (id, title, price) {
        var index = this.books.findIndex(function (book) { return book.id === id; });
        if (index >= 0) {
            // this.books[index].img = img;
            this.books[index].title = title;
            this.books[index].price = price;
        }
        this.storeData();
    },
    addToCard: function (id) {
        var index = this.books.findIndex(function (book) { return book.id === id; });
        if (index >= 0) {
            this.books[index].id = id;
        }
        this.storeData();
    },
    sortAscenByAuthor: function () {
        this.books = this.books.sort(function (a, b) {
            var authorA = a.author.toLowerCase(), authorB = b.author.toLowerCase();
            if (authorA < authorB)
                return -1;
            if (authorA > authorB)
                return 1;
            return 0;
        });
        this.books.forEach(function (book) {
            console.log(book.author);
        });
    },
    sortDescenByAuthor: function () {
        this.books = this.books.sort(function (a, b) {
            var authorA = a.author.toLowerCase(), authorB = b.author.toLowerCase();
            if (authorA < authorB)
                return 1;
            if (authorA > authorB)
                return -1;
            return 0;
        });
        console.log("------");
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
        var htmlStore = "";
        list.forEach(function (book) {
            htmlStore += "<div class=\"card\">\n                  <h2>" + book.title + "</h2>\n                  <h3>" + book.author + "</h3>      \n                  <img class=\"img\" src=\"" + book.img + "\">\n                  <p>" + book.year + " &nbsp &nbsp " + book.price + "$</p>\n                  <div class=\"rating\">                 \n                      <i class=\"far fa-star  \" data-number=\"1\" id=\"" + book.title + "\" onclick = \"handleStarClick(event)\"></i>\n                      <i class=\"far fa-star  \" data-number=\"2\" id=\"" + book.title + "\" onclick = \"handleStarClick(event)\"></i>\n                       <i class=\"far fa-star \" data-number=\"3\" id=\"" + book.title + "\" onclick = \"handleStarClick(event)\"></i>\n                       <i class=\"far fa-star \" data-number=\"4\" id=\"" + book.title + "\" onclick = \"handleStarClick(event)\"></i>\n                      <i class=\"far fa-star  \" data-number=\"5\" id=\"" + book.title + "\" onclick = \"handleStarClick(event)\"></i>\n                   </div>                   \n                  <p> " + book.rank + "</p>\n                  <input  class = \"card__addToCardBtn\" onclick = \"handleAddToCard(event)\" id =\"addToCard\" type =\"button\" value = \"Add to cart\">\n               </div>";
        });
        domElement.innerHTML = htmlStore;
    },
    renderERP: function (list, domElement) {
        var html = " ";
        list.forEach(function (book) {
            html += "<div class=\"containerERP__content\">\n      \n                  <div class='containerERP__content__cardERP'> \n\n                      <div class='containerERP__content__cardERP__img'> \n                         <img src=\"" + book.img + ".jpg\" alt=\"\">  \n                      </div> \n                      \n                       <div class='containerERP__content__cardERP__info'>  \n                             <strong class=\"title\">" + book.title + "</strong>                                \n                             <strong class=\"author\">" + book.author + "</strong>\n                             <strong class=\"genre\">" + book.genre + "</strong>\n                             <strong class=\"year\">" + book.year + "</strong>\n                             <strong class=\"rank\">" + book.rank + "</strong>             \n                        </div> \n                  </div>\n                   <div class=\"containerERP__content__erpBtn\">      \n                         <div class=\"content__erpBtn__delete\" style= \"margin-bottom: 1em;\" >\n                               <button class=\"containerERP__inputs__form__one__inp\"  onclick=\"handleDeleteByID('" + book.id + "')\"><span style =\"color: grey;\">Delete book</span></button>\n                         </div> \n                         <input class=\"containerERP__inputs__form__one__inp\"  type=\"file\" id=\"file\" name=\"file\" accept=\"image/png, image/jpeg\"  style= \"margin-bottom: 1em;\"  >\n                         <div class=\"content__erpBtn__update\">\n                             <form id=\"formAdd\" onsubmit=\"handleUpdateBook(event, '" + book.id + "')\">\n                                  <select class=\"containerERP__inputs__form__one__inp\" name=\"genre\" id=\"\">\n                                      <option value=\"genre\" disabled selected>genre</option>\n                                      <option value=\"scienceF\">scienceF</option>\n                                      <option value=\"detective\">detective</option>\n                                      <option value=\"prose\">prose</option>\n                                      <option value=\"adventures\">adventures</option>\n                                      <option value=\"children\">children</option>\n                                   </select>  \n                                 <input class=\"containerERP__inputs__form__one__inp\"  type=\"text\" name=\"title\" placeholder=\"Edit title\" value=\"" + book.title + "\">\n                                 <input class=\"containerERP__inputs__form__one__inp\"  type=\"number\" name=\"price\" placeholder=\"Edit price\" value=\"" + book.price + "\">\n                                 <input class=\"containerERP__inputs__form__one__inp\"  type=\"submit\" id=\"update\" value=\"Update book\">\n                             </form>\n                         </div> \n                    </div>          \n               </div>";
        });
        domElement.innerHTML = html;
    },
    renderAddToCard: function (list, domElement) {
        var htmlCard = " ";
        list.forEach(function (book) {
            htmlCard += "<div class=\"card\">\n                       <h2>" + book.title + "</h2>\n                       <h3>" + book.author + "</h3>      \n                        <img class=\"img\" src=\"" + book.img + "\">\n                        <strong>" + book.year + " &nbsp &nbsp " + book.price + "$</strong>\n                             <div class=\"rating\">                 \n                                  <i class=\"far fa-star  \" data-number=\"1\" id=\"" + book.title + "\" onclick = \"handleStarClick(event)\"></i>\n                                  <i class=\"far fa-star  \" data-number=\"2\" id=\"" + book.title + "\" onclick = \"handleStarClick(event)\"></i>\n                                  <i class=\"far fa-star \" data-number=\"3\" id=\"" + book.title + "\" onclick = \"handleStarClick(event)\"></i>\n                                  <i class=\"far fa-star \" data-number=\"4\" id=\"" + book.title + "\" onclick = \"handleStarClick(event)\"></i>\n                                  <i class=\"far fa-star  \" data-number=\"5\" id=\"" + book.title + "\" onclick = \"handleStarClick(event)\"></i>\n                             </div>                   \n                          <strong> " + book.rank + "</strong>\n                          <input  class = \"container__card__addToCardBtn\" onclick = \"handleAddToCard(event)\" id =\"addToCard\" type =\"button\" value = \"Add to cart\">\n                   </div>";
        });
        domElement.innerHTML = htmlCard;
    },
    renderAllBooks: function (domElement) {
        var list = this.books;
        this.render(list, domElement);
        this.renderERP(list, domElement);
        this.renderAddToCar(list, domElement);
    }
};
StandartEbooks.getData();
StandartEbooks.storeData();
var allstars = document.querySelectorAll(".fa-star");
var rating = document.querySelector('.rating');
function handleStarClick(e) {
    console.log(e.target);
    allstars.forEach(function (star) {
        if (e.target.id == star.id &&
            e.target.dataset.number >= star.dataset.number) {
            console.log(star.dataset.number);
            star.classList.add("fas");
        }
        else if (e.target.id == star.id &&
            e.target.dataset.number < star.dataset.number) {
            star.classList.remove("fas");
        }
        else {
            return 0;
        }
        console.log(star);
        console.log(e.target);
    });
}
function renderOwener() {
    StandartEbooks.getData();
    var rootERP = document.getElementById("rootERP");
    StandartEbooks.renderERP(StandartEbooks.books, rootERP);
}
function renderCustomer() {
    StandartEbooks.getData();
    var root = document.querySelector("#root");
    StandartEbooks.render(StandartEbooks.books, root);
}
function renderAddToCard() {
    StandartEbooks.getData();
    var rootCard = document.querySelector(".rootCard");
    StandartEbooks.renderAddToCard(StandartEbooks.books, rootCard);
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
    var rootERP = document.querySelector("#rootERP");
    StandartEbooks.addBook(title, author, genre, year, rank, price, img, annotation);
    StandartEbooks.render(rootERP, StandartEbooks.books);
    StandartEbooks.storeData();
    e.target.reset();
}
function handleDeleteBook(e) {
    e.preventDefault();
    try {
        console.log(e);
        console.log(e.target.elements["delete"].value);
        var title = e.target.elements["delete"].value;
        var rootERP_1 = document.querySelector("#rootERP");
        if (title) {
            console.log(title);
            StandartEbooks.deleteBook(title);
            StandartEbooks.renderERP(rootERP_1, StandartEbooks.books);
            StandartEbooks.storeData();
        }
        else {
            throw new Error("User didnt write a title");
        }
    }
    catch (err) {
        console.error(err);
    }
}
function handleDeleteByID(id) {
    console.log(id);
    var rootERP = document.getElementById("rootERP");
    StandartEbooks.deleteByID(id);
    StandartEbooks.renderERP(StandartEbooks.books, rootERP);
}
function handleUpdateBook(e, id) {
    e.preventDefault();
    console.log(id);
    // const img = e.target.elements.img.value;
    var title = e.target.elements.title.value;
    var price = e.target.elements.price.valueAsNumber;
    var rootERP = document.querySelector("#rootERP");
    StandartEbooks.updateBook(id, title, price);
    StandartEbooks.renderERP(StandartEbooks.books, rootERP);
    StandartEbooks.storeData();
    e.target.reset();
}
function handleAddToCard(id) {
    console.log(id);
    var rootCard = document.getElementById('rootCard');
    StandartEbooks.addToCard(id);
    StandartEbooks.renderAddToCard(StandartEbooks.books, rootCard);
}
function handleAuthorAscen() {
    try {
        StandartEbooks.sortAscenByAuthor();
        var root_1 = document.querySelector("#root");
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
        StandartEbooks.render(StandartEbooks.books, root_2);
    }
    catch (err) {
        console.error(err);
    }
}
function handleYearAscen() {
    StandartEbooks.sortAscenByYear();
    var root = document.querySelector("#root");
    StandartEbooks.render(StandartEbooks.books, root);
}
function handleYearDescen() {
    StandartEbooks.sortDescenByYear();
    var root = document.querySelector("#root");
    StandartEbooks.render(StandartEbooks.books, root);
}
function handleRankingAscen() {
    StandartEbooks.sortAscenByRanking();
    var root = document.querySelector("#root");
    StandartEbooks.render(StandartEbooks.books, root);
}
function handleRankingeDescen() {
    StandartEbooks.sortDescenByRanking();
    var root = document.querySelector("#root");
    StandartEbooks.render(StandartEbooks.books, root);
}
function handleFilterByYear(e) {
    e.preventDefault();
    var year = e.target.valueAsNumber;
    var root = document.querySelector("#root");
    if (year) {
        var filteredByYear = StandartEbooks.filterByYear(year);
        StandartEbooks.renderFilterByYear(filteredByYear, root);
    }
    else {
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
        StandartEbooks.render(StandartEbooks.books, root);
    }
}
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function handleSelectByGenre(e) {
    e.preventDefault();
    console.log(e.target);
    console.log(e);
    // debugger;
    var genre = e.target.id;
    var root = document.querySelector("#root");
    if (genre === "all") {
        StandartEbooks.render(StandartEbooks.books, root);
    }
    else {
        console.log(genre);
        var filterByGenre = StandartEbooks.filterByGenre(genre);
        var a = StandartEbooks.books.filter(function (item) {
            return item.genre === genre;
        });
        console.log('ghgjg..........', filterByGenre, genre, a);
        StandartEbooks.renderFilterByGenre(filterByGenre, root);
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
        StandartEbooks.render(StandartEbooks.books, root);
    }
}
var root = document.querySelector("#root");
var rootERP = document.querySelector("#rootERP");
// StandartEbooks.renderERP(root, rootERP);
StandartEbooks.getData();
StandartEbooks.storeData();
// const scrollToTopBtn = document.querySelector("#scrollToTopBtn");
// const rootElement = document.documentElement;
// function handleScroll() {
//   // Do something on scroll
//   const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
//   if (rootElement.scrollTop / scrollTotal > 0.8) {
//     // Show button
//     scrollToTopBtn.classList.add("showBtn");
//   } else {
//     // Hide button
//     scrollToTopBtn.classList.remove("showBtn");
//   }
// }
// function scrollToTop() {
//   // Scroll to top logic
//   rootElement.scrollTo({
//     top: 0,
//     behavior: "smooth"
//   });
// }
// scrollToTopBtn.addEventListener("click", scrollToTop);
// document.addEventListener("scroll", handleScroll);
