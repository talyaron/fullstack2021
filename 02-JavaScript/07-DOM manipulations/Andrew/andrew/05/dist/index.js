var Inventory = {
    items: [{ name: "somthing", price: 5 }],
    addItem: function (itemName, itemPrice) { this.items.push({ name: itemName, price: itemPrice }); },
    sortPriceDown: function () { this.movies.sort(function (a, b) { return a.price - b.price; }); },
    sortPriceUp: function () { this.movies.sort(function (a, b) { return a.price - b.price; }); },
    filter: function (minPrice, maxPrice) {
        this.items = this.items.filter(function (itemPrice) { return itemPrice > minPrice && itemPrice < maxPrice; });
    }
};
function renderList() {
    var html;
    for (var item in Inventory.items) {
        html += "<div class=\"wrapper__card\">\n                    <h3>" + myStuff[section][item].name + "</h3>\n                    <img src=\"" + myStuff[section][item].imgSRC + "\">\n                    <p>" + myStuff[section][item].description + "</p>\n                </div>";
    }
}
;
