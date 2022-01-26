var Zap = {
    products: [
        { item: 'helo', price: 5 },
        { item: 'bye', price: 10 },
    ],
    addItem: function (product) {
        this.products.push(product);
    },
    renderZap: function (domElement) {
        var html = '';
        this.products.forEach(function (product) {
            html += "<div class='card'>\n      <p>" + product.item + ", " + product.price + " </p></div>";
        });
        domElement.innerHTML = html;
    },
    sortItemsAsc: function () {
        this.products.sort(function (a, b) { return a.price - b.price; });
    },
    sortItemsDsc: function () {
        this.products.sort(function (a, b) { return b.price - a.price; });
    },
    filterItems: function (pricing) {
        return this.products.filter(function (product) {
            return product.price > pricing;
        });
    }
};
function handleChange(event) {
    event.preventDefault();
    var price = event.target.valueAsNumber;
    var filterd = Zap.filterItems(price);
    console.log(filterd);
}
function handleSortAsc(event) {
    event.preventDefault();
    Zap.sortItemsAsc();
    console.log(Zap.products);
}
function handleSortDsc(event) {
    event.preventDefault();
    Zap.sortItemsDsc();
    console.log(Zap.products);
}
// const filterItems = Zap.sortItems(5);
// console.log(filterItems);
function handleAddItem(event) {
    event.preventDefault();
    var item = event.target.item.value;
    var price = event.target.price.valueAsNumber;
    Zap.addItem({ item: item, price: price });
    var rootItems = document.getElementById('rootItems');
    Zap.renderZap(rootItems);
    event.target.reset();
}
// const rootItems = document.getElementById('rootItems').innerHTML;
// Zap.renderZap(rootItems);
// console.log(Zap);
