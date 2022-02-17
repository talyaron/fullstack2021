var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
var StandartEbooks = {
    cart: [],
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
    storeCartData: function () {
        localStorage.setItem("storeCartData", JSON.stringify(this.books));
    },
    getCartData: function () {
        var booksCartStorage = JSON.parse(localStorage.getItem("storeCartData"));
        if (booksCartStorage) {
            this.books = booksCartStorage;
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
    updateBook: function (id, genre, title, price) {
        var index = this.books.findIndex(function (book) { return book.id === id; });
        if (index >= 0) {
            this.books[index].genre = genre;
            this.books[index].title = title;
            this.books[index].price = price;
        }
        this.storeData();
    },
    addToCart: function (id) {
        var index = this.books.findIndex(function (book) { return book.id === id; });
        if (index >= 0) {
            this.books[index].id = id;
        }
        this.storeCartData();
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
    renderERP: function (list, domElement) {
        var html = " ";
        list.forEach(function (book) {
            html += "<div class=\"containerERP__content\">\n      \n                  <div class='containerERP__content__cartERP'> \n\n                      <div class='containerERP__content__cartERP__img'> \n                         <img src=\"" + book.img + ".jpg\" alt=\"\">  \n                      </div> \n                      \n                       <div class='containerERP__content__cartERP__info'>  \n                             <strong class=\"title\">" + book.title + "</strong>                                \n                             <strong class=\"author\">" + book.author + "</strong>\n                             <strong class=\"genre\">" + book.genre + "</strong>\n                             <strong class=\"year\">" + book.year + "</strong>\n                             <strong class=\"rank\">" + book.rank + "</strong>             \n                        </div> \n                  </div>\n                   <div class=\"containerERP__content__erpBtn\">      \n                         <div class=\"content__erpBtn__delete\" style= \"margin-bottom: 1em;\" >\n                               <button class=\"containerERP__inputs__form__one__inp\"  onclick=\"handleDeleteByID('" + book.id + "')\"><span style =\"color: grey; cursor: pointer;\" >Delete book</span></button>\n                         </div> \n                       \n                         <div class=\"content__erpBtn__update\">\n                             <form id=\"formAdd\" onsubmit=\"handleUpdateBook(event, '" + book.id + "')\">\n                                  <select class=\"containerERP__inputs__form__one__inp\" name=\"genre\" id=\"\"  style=\"cursor: pointer;\" >\n                                      <option value=\"genre\" disabled selected>genre</option>\n                                      <option value=\"scienceF\">scienceF</option>\n                                      <option value=\"detective\">detective</option>\n                                      <option value=\"prose\">prose</option>\n                                      <option value=\"adventures\">adventures</option>\n                                      <option value=\"children\">children</option>\n                                   </select>  \n                                 <input class=\"containerERP__inputs__form__one__inp\"  type=\"text\" name=\"title\" placeholder=\"Edit title\" value=\"" + book.title + "\">\n                                 <input class=\"containerERP__inputs__form__one__inp\"  type=\"number\" name=\"price\"  id=\"price\" placeholder=\"Edit price\" value=\"" + book.price + "\">\n                                 <input class=\"containerERP__inputs__form__one__inp\"  type=\"submit\" id=\"update\" value=\"Update book\" style=\"cursor: pointer;\" >\n                             </form>\n                         </div> \n                    </div>          \n               </div>";
        });
        domElement.innerHTML = html;
    },
    renderAddToCart: function (list, domElement) {
        var htmlCart = " ";
        list.forEach(function (book) {
            htmlCart += "<div class=\"cart\">\n                       <h2>" + book.title + "</h2>\n                       <h3>" + book.author + "</h3>\n                        <img class=\"img\" src=\"" + book.img + "\">\n                        <p>" + book.year + " &nbsp &nbsp " + book.price + "$</p>\n                             <div class=\"rating\">\n                                  <i class=\"far fa-star\" data-number=\"1\" id=\"" + book.id + "\" onclick = \"handleStarClick(event)\"></i>\n                                  <i class=\"far fa-star\" data-number=\"2\" id=\"" + book.id + "\" onclick = \"handleStarClick(event)\"></i>\n                                  <i class=\"far fa-star\" data-number=\"3\" id=\"" + book.id + "\" onclick = \"handleStarClick(event)\"></i>\n                                  <i class=\"far fa-star\" data-number=\"4\" id=\"" + book.id + "\" onclick = \"handleStarClick(event)\"></i>\n                                  <i class=\"far fa-star\" data-number=\"5\" id=\"" + book.id + "\" onclick = \"handleStarClick(event)\"></i>\n                             </div>\n                          <p> " + book.rank + "</p>\n                          <star-rating></star-rating>\n                   </div>";
        });
        domElement.innerHTML = htmlCart;
    },
    render: function (list, domElement) {
        var htmlStore = "";
        list.forEach(function (book) {
            htmlStore += "<div class=\"cart\">\n                  <h2  class=\"bookTitle\" >" + book.title + "</h2>\n                  <h3>" + book.author + "</h3>      \n                  <img class=\"img\" src=\"" + book.img + "\">\n                  <p class=\"price\" >" + book.year + " &nbsp &nbsp " + book.price + "$</p>\n                  <div class=\"rating\">                 \n                      <i class=\"far fa-star\" data-number=\"1\" id=\"" + book.id + "\" onclick = \"handleStarClick(event)\"></i>\n                      <i class=\"far fa-star\" data-number=\"2\" id=\"" + book.id + "\" onclick = \"handleStarClick(event)\"></i>\n                      <i class=\"far fa-star\" data-number=\"3\" id=\"" + book.id + "\" onclick = \"handleStarClick(event)\"></i>\n                      <i class=\"far fa-star\" data-number=\"4\" id=\"" + book.id + "\" onclick = \"handleStarClick(event)\"></i>\n                      <i class=\"far fa-star\" data-number=\"5\" id=\"" + book.id + "\" onclick = \"handleStarClick(event)\"></i>\n                   </div>                        \n                  <p> " + book.rank + "</p>\n                  <input  type =\"button\" class = \"cart__addToCartBtn\" onclick=\"handleAddToCart(event)\"  value = \"Add to cart\">              \n                             \n               </div>";
        });
        domElement.innerHTML = htmlStore;
    }
};
// <input  type ="button" class = "cart__addToCartBtn" onclick="addToCart(event)" id="${book.id}" value= "Add to cart2">   
StandartEbooks.getData();
StandartEbooks.storeData();
StandartEbooks.storeCartData();
StandartEbooks.getCartData();
function renderOwener() {
    try {
        StandartEbooks.getData();
        var rootERP_1 = document.querySelector("#rootERP");
        StandartEbooks.renderERP(StandartEbooks.books, rootERP_1);
    }
    catch (err) {
        console.error(err);
    }
}
function renderCustomer() {
    try {
        StandartEbooks.getData();
        var root_1 = document.querySelector("#root");
        StandartEbooks.render(StandartEbooks.books, root_1);
    }
    catch (err) {
        console.error(err);
    }
}
function renderAddToCart() {
    try {
        // StandartEbooks.storeCartData();
        StandartEbooks.getCartData();
        var rootCart_1 = document.querySelector("#rootCart");
        StandartEbooks.renderAddToCart(StandartEbooks.books, rootCart_1);
    }
    catch (err) {
        console.error(err);
    }
}
// function handleAddToCart(id) {
//   const rootCart = document.querySelector("#rootCart");
//   console.log(id);
//   StandartEbooks.addToCart(id);
//   StandartEbooks.renderAddToCart(StandartEbooks.books, rootCart);
// }
function handleAddToCart(e) {
    try {
        e.preventDefault();
        var id_1 = uid();
        console.log(e.target);
        console.log(e);
        // debugger;
        var cart = e.target.value;
        var root_2 = document.querySelector("#root");
        if (cart === id_1) {
            StandartEbooks.render(StandartEbooks.books, root_2);
        }
        else {
            console.log(cart);
            var addToCart = StandartEbooks.addToCart(id_1);
            var a = StandartEbooks.books.filter(function (item) {
                return item.id === id_1;
            });
            console.log("ghgjg..........", addToCart, id_1, a);
            StandartEbooks.renderAddToCart(StandartEbooks.books, root_2);
        }
    }
    catch (error) {
        console.log(error);
    }
}
// function addToCart (e) {
//   console.log(e);
//   let cart = [];
//   const selectedBook = StandartEbooks.books.filter((item) => {
//     return item.id == e.target.id
//   })[0];
//   StandartEbooks.addToCart(e.target.id);
// }
function handleAddBook(e) {
    try {
        // debugger;
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
        var rootERP_2 = document.querySelector("#rootERP");
        StandartEbooks.addBook(title, author, genre, year, rank, price, img, annotation);
        StandartEbooks.render(StandartEbooks.books, rootERP_2);
        StandartEbooks.storeData();
        if (typeof title !== "string")
            throw new Error('input should be of type string');
        e.target.reset();
    }
    catch (err) {
        console.error(err);
    }
}
function handleDeleteBook(e) {
    e.preventDefault();
    try {
        console.log(e);
        console.log(e.target.elements["delete"].value);
        var title = e.target.elements["delete"].value;
        var rootERP_3 = document.querySelector("#rootERP");
        if (typeof title !== "string")
            throw new Error('input should be of type string');
        if (title) {
            console.log(title);
            StandartEbooks.deleteBook(title);
            StandartEbooks.renderERP(StandartEbooks.books, rootERP_3);
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
    try {
        console.log(id);
        var rootERP_4 = document.querySelector("#rootERP");
        StandartEbooks.deleteByID(id);
        StandartEbooks.renderERP(StandartEbooks.books, rootERP_4);
        if (typeof id !== id)
            throw new Error('you have no id');
    }
    catch (err) {
        console.error(err);
    }
}
function handleUpdateBook(e, id) {
    try {
        e.preventDefault();
        console.log(id);
        var genre = e.target.genre.value;
        var title = e.target.elements.title.value;
        var price = e.target.elements.price.valueAsNumber;
        var rootERP_5 = document.querySelector("#rootERP");
        StandartEbooks.updateBook(id, genre, title, price);
        StandartEbooks.renderERP(StandartEbooks.books, rootERP_5);
        StandartEbooks.storeData();
        e.target.reset();
        if (typeof genre !== "string")
            throw new Error('input should be of type string');
        if (typeof price !== "number")
            throw new Error('input should be of type number');
    }
    catch (err) {
        console.error(err);
    }
}
function handleAuthorAscen() {
    try {
        StandartEbooks.sortAscenByAuthor();
        var root_3 = document.querySelector("#root");
        StandartEbooks.render(StandartEbooks.books, root_3);
    }
    catch (err) {
        console.error(err);
    }
}
function handleAuthoreDescen() {
    try {
        StandartEbooks.sortDescenByAuthor();
        var root_4 = document.querySelector("#root");
        StandartEbooks.render(StandartEbooks.books, root_4);
    }
    catch (err) {
        console.error(err);
    }
}
function handleYearAscen() {
    try {
        StandartEbooks.sortAscenByYear();
        var root_5 = document.querySelector("#root");
        StandartEbooks.render(StandartEbooks.books, root_5);
    }
    catch (err) {
        console.error(err);
    }
}
function handleYearDescen() {
    try {
        StandartEbooks.sortDescenByYear();
        var root_6 = document.querySelector("#root");
        StandartEbooks.render(StandartEbooks.books, root_6);
    }
    catch (err) {
        console.error(err);
    }
}
function handleRankingAscen() {
    try {
        StandartEbooks.sortAscenByRanking();
        var root_7 = document.querySelector("#root");
        StandartEbooks.render(StandartEbooks.books, root_7);
    }
    catch (err) {
        console.error(err);
    }
}
function handleRankingeDescen() {
    try {
        StandartEbooks.sortDescenByRanking();
        var root_8 = document.querySelector("#root");
        StandartEbooks.render(StandartEbooks.books, root_8);
    }
    catch (err) {
        console.error(err);
    }
}
function handleFilterByYear(e) {
    try {
        e.preventDefault();
        var year = e.target.valueAsNumber;
        var root_9 = document.querySelector("#root");
        if (typeof year !== "number")
            throw new Error('input should be of type number');
        if (year) {
            var filteredByYear = StandartEbooks.filterByYear(year);
            StandartEbooks.renderFilterByYear(filteredByYear, root_9);
        }
        else {
            StandartEbooks.render(StandartEbooks.books, root_9);
        }
    }
    catch (err) {
        console.error(err);
    }
}
function handleFilterByRank(e) {
    try {
        e.preventDefault();
        var rank = e.target.valueAsNumber;
        var root_10 = document.querySelector("#root");
        if (typeof rank !== "number")
            throw new Error('input should be of type number');
        if (rank) {
            var filteredByRank = StandartEbooks.filterByRank(rank);
            StandartEbooks.renderFilterByRank(filteredByRank, root_10);
        }
        else {
            StandartEbooks.render(StandartEbooks.books, root_10);
        }
    }
    catch (err) {
        console.error(err);
    }
}
// function handleFilterByGenre(e) {
//   try {
//     e.preventDefault();
//     const genre = e.target.value;
//     const root = document.querySelector("#root");
//     if (genre) {
//       const filterByGenre = StandartEbooks.filterByGenre(genre);
//       StandartEbooks.renderFilterByGenre(filterByGenre, root);
//     } else {
//       StandartEbooks.render(StandartEbooks.books, root);
//     }
//   } catch (err) {
//     console.error(err);
//   }
// }
function handleSelectByGenre(e) {
    try {
        e.preventDefault();
        console.log(e.target);
        console.log(e);
        // debugger;
        var genre_1 = e.target.id;
        var root_11 = document.querySelector("#root");
        if (typeof genre_1 !== "string")
            throw new Error('input should be of type string');
        if (genre_1 === "all") {
            StandartEbooks.render(StandartEbooks.books, root_11);
        }
        else {
            console.log(genre_1);
            var filterByGenre = StandartEbooks.filterByGenre(genre_1);
            var a = StandartEbooks.books.filter(function (item) {
                return item.genre === genre_1;
            });
            // console.log("ghgjg..........", filterByGenre, genre, a);
            StandartEbooks.renderFilterByGenre(filterByGenre, root_11);
        }
    }
    catch (error) {
        console.log(error);
    }
}
function handleFilterByAuthor(e) {
    try {
        e.preventDefault();
        var author = e.target.value;
        var root_12 = document.querySelector("#root");
        if (typeof author !== "string")
            throw new Error('input should be of type string');
        if (author) {
            var filterByAuthor = StandartEbooks.filterByAuthor(author);
            StandartEbooks.renderFilterByAuthor(filterByAuthor, root_12);
        }
        else {
            StandartEbooks.render(StandartEbooks.books, root_12);
        }
    }
    catch (error) {
        console.log(error);
    }
}
function handleFilterByTitle(e) {
    try {
        e.preventDefault();
        var title = e.target.value;
        var root_13 = document.querySelector("#root");
        if (typeof title !== "string")
            throw new Error('input should be of type string');
        if (title) {
            var filterByTitle = StandartEbooks.filterByTitle(title);
            StandartEbooks.renderFilterByTitle(filterByTitle, root_13);
        }
        else {
            StandartEbooks.render(StandartEbooks.books, root_13);
        }
    }
    catch (error) {
        console.log(error);
    }
}
function handleSearchBook(e) {
    try {
        e.preventDefault();
        var author_1 = e.target.value;
        var title_1 = e.target.value;
        var search = e.target.value;
        var regex_1 = new RegExp(search, "i");
        var root_14 = document.querySelector("#root");
        root_14.innerHTML = "";
        if (typeof search !== "string")
            throw new Error('input should be of type string');
        if (search.length > 0) {
            var foundBook = StandartEbooks.books.filter(function (book) {
                if (regex_1.test(book.title) || regex_1.test(book.author))
                    return true;
                var filterByTitle = StandartEbooks.filterByTitle(title_1);
                var filterByAuthor = StandartEbooks.filterByAuthor(author_1);
                StandartEbooks.renderFilterByTitle(filterByTitle, root_14);
                StandartEbooks.renderFilterByAuthor(filterByAuthor, root_14);
            });
            var html = foundBook
                .map(function (book) {
                return "<p>" + book.title + "</p>\n                <p>" + book.author + "</p>";
            })
                .join("");
            root_14.innerHTML = html;
            console.log(foundBook);
        }
        else {
            StandartEbooks.render(StandartEbooks.books, root_14);
        }
    }
    catch (error) {
        console.log(error);
        // alert(error.message);
    }
}
var scrollToTopBtn = document.querySelector("#scrollToTopBtn");
var rootElement = document.documentElement;
function handleScroll() {
    try {
        var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
        if (rootElement.scrollTop / scrollTotal > 0.8) {
            scrollToTopBtn.classList.add("showBtn");
        }
        else {
            scrollToTopBtn.classList.remove("showBtn");
        }
    }
    catch (error) {
        console.log(error);
        // alert(error.message);
    }
}
function scrollToTop() {
    try {
        rootElement.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    catch (error) {
        console.log(error);
        // alert(error.message);
    }
}
scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);
var root = document.querySelector("#root");
var rootERP = document.querySelector("#rootERP");
var rootCart = document.querySelector("#rootCart");
StandartEbooks.getData();
StandartEbooks.storeData();
StandartEbooks.storeCartData();
StandartEbooks.getCartData();
/* get cart total from session on load */
updateCartTotal();
/* button event listeners */
document.getElementById("emptycart").addEventListener("click", emptyCart);
var btns = document.getElementsByClassName("cart__addToCartBtn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        AddToCart(this);
    });
}
/* ADD TO CART functions */
function AddToCart(book) {
    try {
        //init
        var sibs = [];
        var getprice = void 0;
        var getproductName = void 0;
        var cart = [];
        var stringCart = void 0;
        //cycles siblings for product info near the add button
        while ((book = book.previousSibling)) {
            if (book.nodeType === 3)
                continue; // text node
            if (book.className == "price") {
                getprice = book.innerHTML;
            }
            if (book.className == "bookTitle") {
                getproductName = StandartEbooks.books.innerHTML;
            }
            sibs.push(book);
        }
        //create product object
        var product = {
            bookTitle: getproductName,
            price: getprice
        };
        //convert product data to JSON for storage
        var stringProduct = JSON.stringify(product);
        /*send product data to session storage */
        if (!sessionStorage.getItem("cart")) {
            //append product JSON object to cart array
            cart.push(stringProduct);
            //cart to JSON
            stringCart = JSON.stringify(cart);
            //create session storage cart item
            sessionStorage.setItem("cart", stringCart);
            addedToCart(getproductName);
            updateCartTotal();
        }
        else {
            //get existing cart data from storage and convert back into array
            cart = JSON.parse(sessionStorage.getItem("cart"));
            //append new product JSON object
            cart.push(stringProduct);
            //cart back to JSON
            stringCart = JSON.stringify(cart);
            //overwrite cart data in sessionstorage
            sessionStorage.setItem("cart", stringCart);
            addedToCart(getproductName);
            updateCartTotal();
        }
    }
    catch (err) {
        console.error(err);
    }
}
/* Calculate Cart Total */
function updateCartTotal() {
    //init
    var total = 0;
    var price = 0;
    var items = 0;
    var bookTitle = "";
    var carttable = "";
    if (sessionStorage.getItem("cart")) {
        //get cart data & parse to array
        var cart = JSON.parse(sessionStorage.getItem("cart"));
        //get no of items in cart
        items = cart.length;
        //loop over cart array
        for (var i = 0; i < items; i++) {
            //convert each JSON product in array back into object
            var x = JSON.parse(cart[i]);
            //get property value of price
            price = parseFloat(x.price.split("$")[1]);
            bookTitle = x.bookTitle;
            //add price to total
            carttable +=
                "<tr><td>" + bookTitle + "</td><td>$" + price.toFixed(2) + "</td></tr>";
            total += price;
        }
    }
    //update total on website HTML
    document.querySelector("#total").innerHTML = total.toFixed(2);
    //insert saved products to cart table
    document.querySelector("#carttable").innerHTML = carttable;
    //update items in cart on website HTML
    document.querySelector("#itemsquantity").innerHTML = items;
}
//user feedback on successful add
function addedToCart(title) {
    var message = title + " was added to the cart";
    var alerts = document.getElementById("alerts");
    alerts.innerHTML = message;
    if (!alerts.classList.contains("message")) {
        alerts.classList.add("message");
    }
}
/* User Manually empty cart */
function emptyCart() {
    //remove cart session storage object & refresh cart totals
    if (sessionStorage.getItem("cart")) {
        sessionStorage.removeItem("cart");
        updateCartTotal();
        //clear message and remove class style
        var alerts = document.getElementById("alerts");
        alerts.innerHTML = "";
        if (alerts.classList.contains("message")) {
            alerts.classList.remove("message");
        }
    }
}
var allstars = document.querySelectorAll(".fa-star");
var rating = document.querySelector(".rating");
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
