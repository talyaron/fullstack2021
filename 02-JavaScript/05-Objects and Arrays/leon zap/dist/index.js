var zapitem = {
    id: 0,
    items: [],
    tempItem: [],
    addItem: function (description, price, type) {
        this.items.push({ id: this.id, description: description, price: price, type: type });
        this.id++;
    },
    sortAssending: function () {
        this.items.sort(function (a, b) { return a.price - b.price; });
    },
    sortdescending: function () {
        this.items.sort(function (a, b) { return b.price - a.price; });
    },
    render: function (list, itemOnDom) {
        var itemHtml = '';
        list.forEach(function (item) {
            itemHtml += "<div class=\"card\"><p>" + item.description + "|" + item.price + "</p>\n            <button onclick=\"handleDelete(" + item.id + ")\">Delete</button> </p>";
        });
        itemHtml += "</div>";
        itemOnDom.innerHTML = itemHtml;
    },
    renderItem: function (itemOnDom) {
        this.render(this.items, itemOnDom);
    },
    rendertempItem: function (itemOnDom) {
        this.render(this.tempItem, itemOnDom);
    },
    deleteItem: function (id) {
        this.items = this.items.filter(function (item) { return item.id !== id; });
    },
    filterByType: function (type) {
        return this.items.filter(function (item) { return item.type === type; });
    },
    renderByType: function (type, itemOnDom) {
        var filterdItems = this.filterByType(type);
        this.render(filterdItems, itemOnDom);
    }
};
zapitem.addItem('lenovo 16`', 180, 'computer');
zapitem.addItem('X-box series x', 1180, 'gameconsole');
zapitem.addItem('Iphone 13"', 2280, 'phones');
var root = document.querySelector(".rootItem");
zapitem.renderItem(root);
function handleAsc(event) {
    event.preventDefault();
    zapitem.sortAssending();
    zapitem.renderItem(root);
}
function handleDesc(event) {
    event.preventDefault();
    zapitem.sortdescending();
    zapitem.renderItem(root);
}
function handlesubmit(event) {
    event.preventDefault();
    // console.log(event);
    var company = event.target.elements.description.value;
    var price = event.target.elements.price.valueAsNumber;
    var type = event.target.elements.type.value;
    zapitem.addItem(company, price, type);
    var root = document.querySelector(".rootItem");
    zapitem.renderItem(root);
    // event.traget.reset();
}
function handleFilter(event) {
    var price = event.target.valueAsNumber;
    zapitem.tempItem = zapitem.items.filter(function (ele) { return ele.price < price; });
    if (zapitem.tempItem.length > 0) {
        var root_1 = document.querySelector(".rootItem");
        zapitem.rendertempItem(root_1);
    }
    else {
        var root_2 = document.querySelector(".rootItem");
        zapitem.renderItem(root_2);
    }
}
function handleDelete(id) {
    var root = document.querySelector(".rootItem");
    zapitem.deleteItem(id);
    zapitem.renderItem(root);
}
function handleSelect(ev) {
    var root = document.querySelector(".rootItem");
    var type = ev.target.value;
    if (type === 'all') {
        zapitem.renderItem(root);
    }
    else {
        zapitem.renderByType(type, root);
    }
}
