var addingForm = document.querySelector("[data-addingItemForm]");
var bookTitle = document.querySelector("[data-bookTitle]");
var imagePreview = document.querySelector("[data-bookImage-preview]");
console.log("🚀 ~ file: Bookie.ts ~ line 4 ~ imagePreview", imagePreview);
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
function handleAddItem(ev) {
    ev.preventDefault();
    console.dir(ev.target);
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
