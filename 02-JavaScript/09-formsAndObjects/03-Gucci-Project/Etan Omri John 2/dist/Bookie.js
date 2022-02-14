var selectRoot = document.querySelector("[data-update-book-by-id]");
var addingForm = document.querySelector("[data-addingItemForm]");
var bookTitle = document.querySelector("[data-bookTitle]");
var imagePreview = document.querySelector("[data-bookImage-preview]");
var rootBooks = document.querySelector("[data-rootBooks]");
var backToTop = document.querySelector("[data-back-to-top]");
var ownerTable = document.querySelector("[data-toggle-existing]");
function ascPrice(a, b) {
    return a.price - b.price;
}
;
function descPrice(a, b) {
    return b.price - a.price;
}
;
function ascYear(a, b) {
    return a.year - b.year;
}
;
function descYear(a, b) {
    return b.year - a.year;
}
;
// make sure your function is called at the right page!!!
// if (window.document.title === 'Bookie')
function handleTop(ev) {
    ev.preventDefault();
    document.documentElement.scrollTop = 0;
}
function hideTopBtn() {
    if (window.document.title === "Bookie") {
        var rootElement = document.documentElement;
        var topTotal = rootElement.scrollHeight - rootElement.clientHeight;
        if (rootElement.scrollTop / topTotal > 0.8) {
            backToTop.classList.remove("hidden");
        }
        else {
            backToTop.classList.add("hidden");
        }
    }
}
document.addEventListener("scroll", hideTopBtn);
var bookie = {
    id: 0,
    books: [
        {
            id: 1,
            category: "thriller",
            title: "bye",
            price: 3,
            img: "Bye.jpeg",
            year: 1998
        },
        {
            id: 2,
            category: "thriller",
            title: "outsider",
            price: 154,
            img: "outsider.jpeg",
            year: 2000
        },
        {
            id: 3,
            category: "thriller",
            title: "The Little Prince",
            price: 12,
            img: "the little prince.jpg",
            year: 1999
        },
        {
            id: 4,
            category: "thriller",
            title: "Star wars",
            price: 18,
            img: "Star Wars.jpg",
            year: 2001
        },
        {
            id: 5,
            category: "thriller",
            title: "Harry Potter",
            price: 35,
            img: "Harry Potter.jpg",
            year: 1995
        },
    ],
    tempBooks: [],
    addItem: function (ev) {
        var _a;
        var id = +ev.target.elements.id.value || ev.target.elements.id.value;
        var category = ev.target.elements.category.value;
        var title = ev.target.elements.title.value;
        var price = +ev.target.elements.price.value;
        var img = (_a = ev.target.elements.image.files[0]) === null || _a === void 0 ? void 0 : _a.name;
        var year = ev.target.elements.year.value;
        var book = { id: id, category: category, title: title, price: price, img: img, year: year };
        var newBook = book;
        makeId(newBook);
        this.books.push(newBook);
        showLocalToOwner(ascYear);
    },
    sortItemAsc: function () {
        this.items.sort(function (a, b) {
            return a.price - b.price;
        });
    },
    sortItemDesc: function () {
        this.items.sort(function (a, b) {
            return b.price - a.price;
        });
    },
    renderItem: function (domElement) {
        if (window.document.title === "Bookie") {
            bookie.books = JSON.parse(localStorage.getItem("Bookie shop")).books;
            console.log(bookie);
            var html_1 = "";
            bookie.books.forEach(function (item) {
                domElement.innerHTML = "";
                html_1 += "\n            <div class=\"rootBooks__card\">\n                <button class=\"rootBooks__card__bag\" data-add-to-bag><svg xmlns=\"http://www.w3.org/2000/svg\"\n                        viewBox=\"0 0 15 14\">\n                        <symbol viewBox=\"0 0 15 14\" id=\"svg-icon-shopping-bag\">\n                            <title>shopping-bag</title>\n                            <g fill=\"currentColor\">\n                                <path\n                                    d=\"M13,4.2h-2.4l0-2c0-1.1-1.3-2-3-2s-3,0.8-3,2l0,2H1.9c-1,0-1.6,0.5-1.6,1.2l0.5,7.8h13.4l0.6-7.7&#10;&#9;&#9;&#9;C14.8,4.7,14,4.2,13,4.2z M6.1,2.2c0.1-0.1,0.6-0.5,1.5-0.5c0.9,0,1.4,0.3,1.5,0.5l0,2h-3L6.1,2.2z M12.8,11.7H2.2L1.8,5.8&#10;&#9;&#9;&#9;c0,0,0.1,0,0.1,0H13c0.1,0,0.2,0,0.2,0L12.8,11.7z\" />\n                            </g>\n                        </symbol>\n                        <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#svg-icon-shopping-bag\" />\n                    </svg></button>\n                <button class=\"rootBooks__card__heart\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 15 13.5\">\n                        <symbol viewBox=\"0 0 15 13.5\" id=\"svg-icon-saved-items\">\n                            <title>saved-items</title>\n                            <g fill=\"currentColor\">\n                                <path\n                                    d=\"M12.5,5.3l-5,5.2l-5-5.3c0,0-0.8-0.9-0.8-1.5c0-1,0.8-1.8,1.7-1.8c0.6,0,1.1,0.3,1.4,0.9l2.6,2.7l2.7-2.8l0,0&#10;&#9;&#9;&#9;c0.3-0.5,0.8-0.9,1.5-0.9c0.9,0,1.7,0.8,1.7,1.8C13.4,4.4,12.5,5.3,12.5,5.3 M11.5,0c-1.1,0-2.1,0.6-2.7,1.5L7.5,2.8L6.2,1.5&#10;&#9;&#9;&#9;C5.6,0.6,4.6,0,3.5,0C1.5,0,0,1.7,0,3.8c0,1.2,0.5,2.3,1.4,3l1.3,1.4l4.9,5.3l0,0l0,0l4.9-5.3l1.2-1.4C14.5,6.1,15,5,15,3.8&#10;&#9;&#9;&#9;C15,1.7,13.5,0,11.5,0\" />\n                            </g>\n                        </symbol>\n                        <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#svg-icon-saved-items\" />\n                    </svg></button>\n                <img src=\"./Images/" + item.img + "\" alt=\"\" class=\"rootBooks__card__img\">\n                <div class=\"rootBooks__card__title\">" + item.title + "</div>\n                <div class=\"rootBooks__card__price\">" + item.price + "$</div>\n            </div>";
            });
            domElement.innerHTML = html_1;
        }
    },
    renterTempItem: function (domElement) {
        if (window.document.title === "Bookie") {
            bookie.books = JSON.parse(localStorage.getItem("Bookie shop")).books;
            console.log(bookie);
            var html_2 = "";
            bookie.tempBooks.forEach(function (item) {
                domElement.innerHTML = "";
                html_2 += "\n            <div class=\"rootBooks__card\">\n                <button class=\"rootBooks__card__bag\" data-add-to-bag><svg xmlns=\"http://www.w3.org/2000/svg\"\n                        viewBox=\"0 0 15 14\">\n                        <symbol viewBox=\"0 0 15 14\" id=\"svg-icon-shopping-bag\">\n                            <title>shopping-bag</title>\n                            <g fill=\"currentColor\">\n                                <path\n                                    d=\"M13,4.2h-2.4l0-2c0-1.1-1.3-2-3-2s-3,0.8-3,2l0,2H1.9c-1,0-1.6,0.5-1.6,1.2l0.5,7.8h13.4l0.6-7.7&#10;&#9;&#9;&#9;C14.8,4.7,14,4.2,13,4.2z M6.1,2.2c0.1-0.1,0.6-0.5,1.5-0.5c0.9,0,1.4,0.3,1.5,0.5l0,2h-3L6.1,2.2z M12.8,11.7H2.2L1.8,5.8&#10;&#9;&#9;&#9;c0,0,0.1,0,0.1,0H13c0.1,0,0.2,0,0.2,0L12.8,11.7z\" />\n                            </g>\n                        </symbol>\n                        <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#svg-icon-shopping-bag\" />\n                    </svg></button>\n                <button class=\"rootBooks__card__heart\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 15 13.5\">\n                        <symbol viewBox=\"0 0 15 13.5\" id=\"svg-icon-saved-items\">\n                            <title>saved-items</title>\n                            <g fill=\"currentColor\">\n                                <path\n                                    d=\"M12.5,5.3l-5,5.2l-5-5.3c0,0-0.8-0.9-0.8-1.5c0-1,0.8-1.8,1.7-1.8c0.6,0,1.1,0.3,1.4,0.9l2.6,2.7l2.7-2.8l0,0&#10;&#9;&#9;&#9;c0.3-0.5,0.8-0.9,1.5-0.9c0.9,0,1.7,0.8,1.7,1.8C13.4,4.4,12.5,5.3,12.5,5.3 M11.5,0c-1.1,0-2.1,0.6-2.7,1.5L7.5,2.8L6.2,1.5&#10;&#9;&#9;&#9;C5.6,0.6,4.6,0,3.5,0C1.5,0,0,1.7,0,3.8c0,1.2,0.5,2.3,1.4,3l1.3,1.4l4.9,5.3l0,0l0,0l4.9-5.3l1.2-1.4C14.5,6.1,15,5,15,3.8&#10;&#9;&#9;&#9;C15,1.7,13.5,0,11.5,0\" />\n                            </g>\n                        </symbol>\n                        <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#svg-icon-saved-items\" />\n                    </svg></button>\n                <img src=\"./Images/" + item.img + "\" alt=\"\" class=\"rootBooks__card__img\">\n                <div class=\"rootBooks__card__title\">" + item.title + "</div>\n                <div class=\"rootBooks__card__price\">" + item.price + "$</div>\n            </div>";
            });
            domElement.innerHTML = html_2;
        }
    },
    updateBook: function (id, priceChange) {
        this.books.forEach(function (book) {
            if (book.id === id || book.id === +id)
                console.log(book, "this is it"),
                    book.price = +priceChange;
        });
        console.log(bookie);
        showLocalToOwner(ascYear);
        localStorage.setItem('Bookie shop', JSON.stringify(bookie));
        bookie.renderItem(rootBooks);
    },
    deleteBook: function (id) {
        // this.books = this.books.filter((book) => book.id !== id);
        bookie.books = bookie.books.filter(function (book) { return book.id !== id; });
        localStorage.setItem("Bookie shop", JSON.stringify(bookie));
        console.log(JSON.parse(localStorage.getItem("Bookie shop")));
        console.log(bookie);
        showLocalToOwner(ascYear);
        bookie.renderItem(rootBooks);
    }
};
// addingForm.onsubmit(function(e) {})
//function handleAddToCart()
//function handleOpenThis()
//function handleOpenMenu()
//function handleCloseMenu()
//function handleSortDesc()
//function handleSortAsc(ev)
function makeId(book) {
    var uid = Math.random().toString(36).slice(-8);
    if (book.id === "uid") {
        book.id = uid;
    }
    else {
        return;
    }
}
bookie.renderItem(rootBooks);
function handleAddItem(ev) {
    ev.preventDefault();
    bookie.addItem(ev);
    localStorage.setItem("Bookie shop", JSON.stringify(bookie));
    ev.target.reset();
}
function showPreviewImage(ev) {
    var imagePreview = document.querySelector("[data-bookImage-preview]");
    var imgLink = ev.target.files[0].name;
    var preview = "<img src=\"./Images/" + imgLink + "\" alt=\"\">";
    imagePreview.innerHTML = preview;
}
function showLocalToOwner(sortFunc) {
    if (window.document.title === "myBookie") {
        bookie.books.sort(sortFunc);
        localStorage.setItem("Bookie shop", JSON.stringify(bookie));
        JSON.parse(localStorage.getItem("Bookie shop"));
        ownerTable.innerHTML = "<tr>\n  <th>ID</th>\n  <th>Category</th>\n  <th>Title</th>\n  <th>price</th>\n  <th>Img</th>\n  <th>Year</th>\n  <th>Functions</th>\n</tr>";
        for (var book in bookie.books) {
            ownerTable.innerHTML += "<tr>\n  <td> " + bookie.books[book].id + "  </td>\n  <td> " + bookie.books[book].category + "  </td>\n  <td> " + bookie.books[book].title + " </td>\n  <td> " + bookie.books[book].price + "</td>\n  <td> <img src=\"./Images/" + bookie.books[book].img + "\" alt=\"\"></td>\n  <td> " + bookie.books[book].year + "</td>\n  <td data-delete-update> \n  <a onclick=\"handleDelete(event)\">Delete</a>\n  <a onclick=\"handleEdit(event)\">Change Price</a>\n  <input data-priceChange type=\"number\" name=\"priceChange\" placeholder=\"" + bookie.books[book].price + "\" value=\"" + bookie.books[book].price + "\">\n  </td>\n  </tr>";
        }
    }
}
function handleEdit(ev) {
    var data = ev.target.parentElement.parentElement.cells;
    var id = data[0].textContent.replaceAll(/\s/g, '');
    var priceChange = data[6].children.priceChange.valueAsNumber;
    bookie.updateBook(id, priceChange);
    bookie.renderItem(rootBooks);
}
function handleDelete(ev) {
    var data = ev.target.parentElement.parentElement.cells;
    var id = +data[0].textContent || data[0].textContent.replaceAll(/\s/g, '');
    bookie.deleteBook(id);
}
function handleOwnerSort(ev) {
    if (window.document.title === "myBookie")
        ev.preventDefault();
    var sortFunc = ev.target.value;
    if (sortFunc === 'ascYear') {
        showLocalToOwner(ascYear);
        return;
    }
    if (sortFunc === 'descYear') {
        showLocalToOwner(descYear);
        return;
    }
    if (sortFunc === 'ascPrice') {
        showLocalToOwner(ascPrice);
        return;
    }
    showLocalToOwner(descPrice);
}
function handleCustomerSort(ev) {
    if (window.document.title === "Bookie")
        ev.preventDefault();
    var sortFunc = ev.target.value;
    if (sortFunc === 'ascYear') {
        bookie.books.sort(ascYear);
        bookie.renderItem(rootBooks);
        return;
    }
    if (sortFunc === 'descYear') {
        bookie.books.sort(descYear);
        bookie.renderItem(rootBooks);
        return;
    }
    if (sortFunc === 'ascPrice') {
        bookie.books.sort(ascPrice);
        bookie.renderItem(rootBooks);
        return;
    }
    bookie.books.sort(descPrice);
    bookie.renderItem(rootBooks);
}
window.onload = function () {
    if (window.document.title === "Bookie") {
        window.addEventListener("scroll", function (e) {
            if (window.pageYOffset > 100) {
                document.querySelector("header").classList.add("is-scrolling");
            }
            else {
                document.querySelector("header").classList.remove("is-scrolling");
            }
        });
        var menu_btn_1 = document.querySelector(".navBar__row1__mobile__humburger");
        var mobile_menu_1 = document.querySelector(".mobileOptions");
        menu_btn_1.addEventListener("click", function () {
            menu_btn_1.classList.toggle("is-active");
            mobile_menu_1.classList.toggle("is-active");
        });
    }
    showLocalToOwner(undefined);
};
function handleSelect(ev) {
    console.dir(ev);
}
;
function handleSort(ev) {
    console.dir(ev);
}
;
function handleAmount(ev) {
    var amonut = ev.target.valueAsNumber;
    bookie.tempBooks = bookie.books.filter(function (book) { return book.price < amonut; });
    if (bookie.tempBooks.length > 0) {
        bookie.renterTempItem(rootBooks);
    }
    else {
        bookie.renderItem(rootBooks);
    }
}
;
