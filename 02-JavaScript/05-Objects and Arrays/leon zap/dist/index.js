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
        console.log(itemOnDom);
        console.log(this.items);
        var itemHtml = '';
        this.items.forEach(function (item) {
            itemHtml += "<div class=\"card\"><p>" + item.company + ":" + item.price + "</p></div>";
        });
        itemOnDom.innerHTML = itemHtml;
    }
};
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
var root = document.querySelector(".rootItem");
zapitem.renderItem(root);
