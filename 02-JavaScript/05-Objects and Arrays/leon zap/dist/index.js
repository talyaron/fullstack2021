var zapitem = {
    items: [],
    tempItem: [],
    addItem: function (addItem) {
        this.items.push(addItem);
    },
    sortAssending: function () {
        this.items.sort(function (a, b) { return a.price - b.price; });
    },
    sortdescending: function () {
        this.items.sort(function (a, b) { return b.price - a.price; });
    },
    renderItem: function (itemOnDom) {
        var itemHtml = '';
        this.items.forEach(function (item) {
            itemHtml += "<div class=\"card\"><p>" + item.company + ":" + item.price + "</p></div>";
        });
        itemOnDom.innerHTML = itemHtml;
    },
    rendertempItem: function (itemOnDom) {
        var itemHtml = '';
        this.tempItem.forEach(function (item) {
            itemHtml += "<div class=\"card\"><p>" + item.company + ":" + item.price + "</p></div>";
        });
        itemOnDom.innerHTML = itemHtml;
    }
};
zapitem.addItem({ company: 'lenovo 16`', price: 180 });
zapitem.addItem({ company: 'X-box series x', price: 1180 });
zapitem.addItem({ company: 'Iphone 13"', price: 2280 });
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
    zapitem.addItem({ company: company, price: price });
    zapitem.renderItem(root);
    // console.log(zapitem)
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
// const root = document.querySelector(".rootItem");
