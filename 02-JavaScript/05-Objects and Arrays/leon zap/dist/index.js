var zapitem = {
    items: [],
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
        // console.log(itemOnDom)
        // console.log(this.items)
        var itemHtml = '';
        this.items.forEach(function (item) {
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
function handleFilter(event) {
    var amonut = event.target.valueAsNumber;
    zapitem.items = zapitem.items.filter(function (ele) { return ele.price < amonut; });
    if (zapitem.item.length > 0) {
        var root_1 = document.querySelector(".rootItem");
        zapitem.renderItem(root_1);
    }
    else {
        var root_2 = document.querySelector(".rootItem");
        zapitem.renderItem(root_2);
    }
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
// const root = document.querySelector(".rootItem");
