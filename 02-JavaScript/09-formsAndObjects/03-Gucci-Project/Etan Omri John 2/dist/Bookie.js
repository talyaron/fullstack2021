var backToTop = document.querySelector('[data-back-to-top]');
console.dir(backToTop);
function handleTop(ev) {
    ev.preventDefault();
    document.documentElement.scrollTop = 0;
}
var bookie = {
    id: 0,
    books: [],
    addItem: function (category, name, price, img) {
        this.books.push({ id: this.id, category: category, name: name, price: price, img: img });
        this.id++;
    },
    sortItemAsc: function () {
        this.items.sort(function (a, b) { return a.price - b.price; });
    },
    sortItemDesc: function () {
        this.items.sort(function (a, b) { return b.price - a.price; });
    }
};
//function handleAddToCart()
//function handleOpenThis()
//function handleOpenMenu()
//function handleCloseMenu()
//function handleSortDesc()
//function handleSortAsc(ev)
