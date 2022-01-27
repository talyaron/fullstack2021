var zapShop = {
    id: 0,
    items: [],
    tempItems: [],
    addItem: function (description, price, type) {
        this.items.push({ id: this.id, description: description, price: price, type: type });
        this.id++;
    },
    render: function (list, domElement) {
        var html = '';
        list.forEach(function (item) {
            html += "<div class = 'card_item'>\n            <p> " + item.description + " | Price: " + item.price + "$\n            <button onclick=\"handleDelete(" + item.id + ")\">Delete</button> </p>";
        });
        html += "</div>";
        domElement.innerHTML = html;
    },
    renderItem: function (domElement) {
        this.render(this.items, domElement);
    },
    renderTempItem: function (domElement) {
        this.render(this.tempItems, domElement);
    },
    sortItemAsc: function () {
        this.items.sort(function (a, b) { return a.price - b.price; });
    },
    sortItemDesc: function () {
        this.items.sort(function (a, b) { return b.price - a.price; });
    },
    deleteItem: function (id) {
        this.items = this.items.filter(function (item) { return item.id !== id; });
    },
    filterByType: function (type) {
        return this.items.filter(function (item) { return item.type === type; });
    },
    renderByType: function (type, domElement) {
        var filterItems = this.filterByType(type);
        this.render(filterItems, domElement);
    }
};
zapShop.addItem('Lenovo ThinkPadT15p ', 850, 'computer');
zapShop.addItem('Apple iPhone 13', 700, 'smartphone');
zapShop.addItem('cutting board', 30, 'kitchen accessory');
var rootItems = document.getElementById('rootItems');
zapShop.renderItem(rootItems);
function handleItem(ev) {
    ev.preventDefault();
    console.dir(ev);
    var description = ev.target.elements.description.value;
    var price = ev.target.elements.price.valueAsNumber;
    var type = ev.target.elements.type.value;
    zapShop.addItem(description, price, type);
    var rootItems = document.getElementById('rootItems');
    zapShop.renderItem(rootItems);
}
function handleSortDesc(ev) {
    ev.preventDefault();
    zapShop.sortItemDesc();
    var rootItems = document.getElementById('rootItems');
    zapShop.renderItem(rootItems);
}
function handleSortAsc(ev) {
    ev.preventDefault();
    zapShop.sortItemAsc();
    var rootItems = document.getElementById('rootItems');
    zapShop.renderItem(rootItems);
}
function handlePrice(ev) {
    var amonut = ev.target.valueAsNumber;
    zapShop.tempItems = zapShop.items.filter(function (ele) { return ele.price < amonut; });
    if (zapShop.tempItems.length > 0) {
        var rootItems_1 = document.getElementById('rootItems');
        zapShop.renderTempItem(rootItems_1);
    }
    else {
        var rootItems_2 = document.getElementById('rootItems');
        zapShop.renderItem(rootItems_2);
    }
}
function handleDelete(id) {
    var rootItems = document.getElementById('rootItems');
    zapShop.deleteItem(id);
    zapShop.renderItem(rootItems);
}
function handleSelect(ev) {
    var rootItems = document.getElementById('rootItems');
    var type = ev.target.value;
    if (type === 'all') {
        zapShop.renderItem(rootItems);
    }
    else {
        zapShop.renderByType(type, rootItems);
    }
}
