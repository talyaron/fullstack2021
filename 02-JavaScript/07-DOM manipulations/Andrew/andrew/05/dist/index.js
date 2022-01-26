var Inventory = {
    items: [],
    addItem: function (item) {
        item.id = uid();
        this.items.push(item);
    },
    deleteItem: function (id) {
        this.items = this.items.filter(function (item) { return item.id !== id; });
    },
    editItem: function (id) {
        var updatedItem = this.items.filter(function (item) { return item.id == id; })[0];
        updatedItem.name = prompt("Update the name", "" + updatedItem.name);
        updatedItem.price = prompt("Update the Price", "" + updatedItem.price);
        do {
            updatedItem.category = prompt("Update Category, either computers, books, or movies", "" + updatedItem.category);
        } while (updatedItem.category !== "computers" && updatedItem.category !== "books" && updatedItem.category !== "movies");
        // this.items.splice(4, 1, 'May')
    },
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
    filterCat: function (Category) {
        if (Category == "all") {
            renderList(this);
            return;
        }
        var filtered = { items: this.items.filter(function (item) { return item.category == Category; }) };
        renderList(filtered);
    },
    filter: function (minPrice, maxPrice) {
        var filtered = { items: this.items.filter(function (item) { return item.price >= minPrice && item.price <= maxPrice; }) };
        renderList(filtered);
    }
};
var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
function renderList(list) {
    var html = '';
    for (var item in list.items) {
        html += "<div class=\"item\">\n                    <h3>" + list.items[item].name + "</h3>\n                    <h2>" + list.items[item].price + " Shmekels</h2>\n                    <p>" + list.items[item].category + "</p>\n                    <button id=\"" + list.items[item].id + "\" onclick='handleDelete(event)'>Delete</button>\n                    <button id=\"" + list.items[item].id + "\" onclick='handleEdit(event)'>Edit</button>\n                </div>";
    }
    document.querySelector('#output').innerHTML = html;
    var highestPrice = Math.max.apply(Math, Inventory.items.map(function (item) { return item.price; }));
    document.querySelector('#rangeMax').max = "" + highestPrice;
}
;
function handleDelete(ev) {
    Inventory.deleteItem(ev.target.id);
    renderList(Inventory);
}
function handleEdit(ev) {
    Inventory.editItem(ev.target.id);
    renderList(Inventory);
}
function handleSelect(ev) {
    Inventory.filterCat(ev.target.value);
}
function handleSubmit(ev) {
    ev.preventDefault();
    if (ev.target.elements.itemName.value == '' || ev.target.elements.itemPrice.value == 0) {
        alert('You must fill all fields!');
        return;
    }
    var newItem = { name: "", price: 0, category: "", id: "" };
    for (var _i = 0, _a = ev.target; _i < _a.length; _i++) {
        var field = _a[_i];
        if (field.checked) {
            newItem.category = field.value;
        }
    }
    newItem.name = ev.target.elements.itemName.value;
    newItem.price = Number(ev.target.elements.itemPrice.value);
    Inventory.addItem(newItem);
    renderList(Inventory);
}
function handleSlider() {
    var min = document.querySelector('#rangeMin').valueAsNumber;
    var max = document.querySelector('#rangeMax').valueAsNumber;
    Inventory.filter(min, max);
    document.querySelector('#min-value').innerHTML = min + " SHM";
    document.querySelector('#max-value').innerHTML = max + " SHM";
    document.querySelector('#rangeMin').max = "" + max;
}
;
document.querySelector('#price_down').addEventListener("click", function () {
    Inventory.sortPriceDown();
    renderList(Inventory);
    handleSlider();
});
document.querySelector('#price_up').addEventListener("click", function () {
    Inventory.sortPriceUp();
    renderList(Inventory);
    handleSlider();
});
document.querySelector('#name_down').addEventListener("click", function () {
    Inventory.sortNameDown();
    renderList(Inventory);
    handleSlider();
});
document.querySelector('#name_up').addEventListener("click", function () {
    Inventory.sortNameUp();
    renderList(Inventory);
    handleSlider();
});
Inventory.addItem({ name: "computer", price: 90, category: "computers", id: "abcd" });
Inventory.addItem({ name: "another computer", price: 70, category: "computers", id: "abcd" });
Inventory.addItem({ name: "good book", price: 50, category: "books", id: "abcde" });
Inventory.addItem({ name: "bad book", price: 15, category: "books", id: "abcde" });
Inventory.addItem({ name: "movie", price: 30, category: "movies", id: "abcdef" });
Inventory.addItem({ name: "diffrent movie", price: 35, category: "movies", id: "abcdef" });
renderList(Inventory);
handleSlider();
