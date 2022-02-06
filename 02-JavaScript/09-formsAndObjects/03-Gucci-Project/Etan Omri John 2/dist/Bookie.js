var addingForm = document.querySelector("[data-addingItemForm]");
var bookTitle = document.querySelector("[data-bookTitle]");
var imagePreview = document.querySelector("[data-bookImage-preview]");
console.dir(imagePreview);
var backToTop = document.querySelector("[data-back-to-top]");
function handleTop(ev) {
    ev.preventDefault();
    document.documentElement.scrollTop = 0;
}
var bookie = {
    id: 0,
    books: [],
    addItem: function (category, title, price, img) {
        this.books.push({ id: this.id, category: category, title: title, price: price, img: img });
        this.id++;
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
function addItem(shop, ev) {
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
    shop.books.push(newBook);
}
function handleAddItem(ev) {
    ev.preventDefault();
    addItem(bookie, ev);
    ev.target.reset();
    console.dir(bookie);
    // how to use localStorage:
    window.localStorage.setItem('shop', JSON.stringify(bookie));
    var shopRetreval = localStorage.getItem('shop');
    console.log('retrievedObject: ', JSON.parse(shopRetreval));
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
