var selectRoot = document.querySelector("[data-update-book-by-id]");
var addingForm = document.querySelector("[data-addingItemForm]");
var bookTitle = document.querySelector("[data-bookTitle]");
var imagePreview = document.querySelector("[data-bookImage-preview]");
var backToTop = document.querySelector("[data-back-to-top]");
function handleTop(ev) {
    ev.preventDefault();
    document.documentElement.scrollTop = 0;
}
function hideTopBtn() {
    var rootElement = document.documentElement;
    var topTotal = rootElement.scrollHeight - rootElement.clientHeight;
    if ((rootElement.scrollTop / topTotal) > 0.80) {
        backToTop.classList.remove("hidden");
    }
    else {
        backToTop.classList.add("hidden");
    }
}
document.addEventListener("scroll", hideTopBtn);
var bookie = {
    id: 0,
    books: [{ id: 1, category: "thriller", title: 'okay', price: 19.99, year: 1998 }],
    addItem: function (ev) {
        var _a;
        var id = ev.target.elements.id.value;
        var category = ev.target.elements.category.value;
        var title = ev.target.elements.title.value;
        var price = ev.target.elements.price.value;
        var img = (_a = ev.target.elements.image.files[0]) === null || _a === void 0 ? void 0 : _a.name;
        var year = ev.target.elements.year.value;
        var book = { id: id, category: category, title: title, price: price, img: img, year: year };
        var newBook = book;
        makeId(newBook);
        this.books.push(newBook);
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
    }
};
var localBookie = bookie;
// addingForm.onsubmit(function(e) {})
//function handleAddToCart()
//function handleOpenThis()
//function handleOpenMenu()
//function handleCloseMenu()
//function handleSortDesc()
//function handleSortAsc(ev)
function makeId(book) {
    if (book.id === "uid") {
        var uid = Math.random().toString(36).slice(-8);
        book.id = uid;
    }
    else {
        return;
    }
}
function handleAddItem(ev) {
    ev.preventDefault();
    console.dir(bookie);
    localBookie.addItem(ev);
    localStorage.setItem("Bookie shop", JSON.stringify(localBookie));
    ev.target.reset();
    console.log(localBookie);
    // localBookie.makeOptions(ev)
    // how to use localStorage:
    //   window.localStorage.setItem("Bookie shop", JSON.stringify(bookie));
    // let shopRetreval = localStorage.getItem("Bookie shop");
    // console.log("retrievedShop: ", JSON.parse(shopRetreval));
}
function showPreviewImage(ev) {
    var imagePreview = document.querySelector("[data-bookImage-preview]");
    var imgLink = ev.target.files[0].name;
    var preview = "<img src=\"./Images/" + imgLink + "\" alt=\"\">";
    console.dir(imagePreview);
    console.dir(preview);
    console.dir(imgLink);
    imagePreview.innerHTML = preview;
}
function handleUpdate(ev) {
    ev.preventDefault();
    console.dir(ev.target);
}
localStorage.setItem("Bookie shop", JSON.stringify(localBookie));
var stringBookie = localStorage.getItem("Bookie shop");
var parsedBookie = JSON.parse(stringBookie);
console.log(parsedBookie);
var ascPrice = function (a, b) {
    return a.price - b.price;
};
var descPrice = function (a, b) {
    return b.price - a.price;
};
var ascYear = function (a, b) {
    return a.year - b.year;
};
var descYear = function (a, b) {
    return b.price - a.price;
};
// create an option to choose and update for each book
function makeAnOption(shop, root, sortFunc) {
    root.innerHTML = '';
    shop.books.sort(sortFunc);
    shop.books.forEach(function (book) {
        return (root.innerHTML += "<option value=\"" + book.id + "\">" + book.title + "(" + book.year + ")</option>");
    });
}
makeAnOption(localBookie, selectRoot, descPrice);
console.log(parsedBookie);
console.log(localBookie);
