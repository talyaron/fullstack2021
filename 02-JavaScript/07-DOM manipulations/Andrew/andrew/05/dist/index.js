var Inventory = {
    items: [{ name: "somthing", price: 5 }, { name: "somthing else", price: 10 }, { name: "somthing diffrent", price: 15 }],
    addItem: function (item) { this.items.push(item); },
    sortPriceDown: function () { this.items.sort(function (a, b) { return a.price - b.price; }); },
    sortPriceUp: function () { this.items.sort(function (a, b) { return b.price - a.price; }); },
    sortNameUp: function () {
        this.items.sort(function (a, b) {
            if (a.name.toUpperCase() < b.name.toUpperCase())
                return 1;
            if (a.name.toUpperCase() > b.name.toUpperCase())
                return -1;
            return 0;
        });
    },
    sortNameDown: function () {
        this.items.sort(function (a, b) {
            if (a.name.toUpperCase() < b.name.toUpperCase())
                return -1;
            if (a.name.toUpperCase() > b.name.toUpperCase())
                return 1;
            return 0;
        });
    },
    filter: function (minPrice, maxPrice) {
        var filtered = { items: this.items.filter(function (item) { return item.price >= minPrice && item.price <= maxPrice; }) };
        renderList(filtered);
    }
};
function renderList(list) {
    var html = '';
    for (var item in list.items) {
        html += "<div class=\"item\">\n                    <h3>" + list.items[item].name + "</h3>\n                    <h2>" + list.items[item].price + "$</h2>\n                </div>";
    }
    document.querySelector('#output').innerHTML = html;
    var highestPrice = Math.max.apply(Math, Inventory.items.map(function (item) { return item.price; }));
    document.querySelector('#rangeMax').max = "" + highestPrice;
}
;
function handleSubmit(ev) {
    ev.preventDefault();
    if (ev.target.elements.itemName.value == '' || ev.target.elements.itemPrice.value == 0) {
        alert('You must fill all fields!');
        return;
    }
    var newItem = { name: "", price: 0 };
    newItem.name = ev.target.elements.itemName.value;
    newItem.price = Number(ev.target.elements.itemPrice.value);
    Inventory.addItem(newItem);
    renderList(Inventory);
}
function handleSlider() {
    var min = document.querySelector('#rangeMin').value;
    var max = document.querySelector('#rangeMax').value;
    Inventory.filter(min, max);
    document.querySelector('#min-value').innerHTML = min + "$";
    document.querySelector('#max-value').innerHTML = max + "$";
    document.querySelector('#rangeMin').max = "" + max;
}
;
document.querySelector('#price_down').addEventListener("click", function () {
    Inventory.sortPriceDown();
    renderList(Inventory);
    handleSlider();
});
document.querySelector('#price_up').addEventListener("click", function () { Inventory.sortPriceUp(); renderList(Inventory); });
document.querySelector('#name_down').addEventListener("click", function () { Inventory.sortNameDown(); renderList(Inventory); });
document.querySelector('#name_up').addEventListener("click", function () { Inventory.sortNameUp(); renderList(Inventory); });
renderList(Inventory);
