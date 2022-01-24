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
    sortItems: function (orderBy) {
        if (orderBy === void 0) { orderBy = 'asc'; }
        if (orderBy === 'asc') {
            this.products.sort(function (a, b) {
                return a.price - b.price;
            });
        }
        else if (orderBy === 'dsc') {
            this.products.sort(function (a, b) {
                return b.price - a.price;
            });
        }
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
    Zap.filterItems(price);
    var rootItems = document.getElementById('rootItems');
    Zap.renderZap(rootItems);
    // const rootItems = document.getElementById('rootItems');
    // Zap.renderZap(rootItems);
    console.log(event.target.valueAsNumber);
    var filterd = Zap.filterItems(price);
    console.log(filterd);
}
// const filterItems = Zap.filterItems(5);
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
