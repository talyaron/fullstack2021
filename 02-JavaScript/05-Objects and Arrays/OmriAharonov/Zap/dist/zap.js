var zapShop = {
    items: [],
    addItem: function (item) {
        this.items.push(item);
    },
    renderItem: function (domElement) {
        var html = '';
        this.items.forEach(function (item) {
            html += "<div class = 'card_item'>\n            <p> Item: " + item.description + " | Price: " + item.price + "$</p>";
        });
        html += "</div>";
        domElement.innerHTML = html;
    },
    sortItemAsc: function () {
        this.items.sort(function (a, b) { return a.price - b.price; });
    },
    sortItemDesc: function () {
        this.items.sort(function (a, b) { return b.price - a.price; });
    }
};
function handleItem(ev) {
    ev.preventDefault();
    console.dir(ev);
    var description = ev.target.elements.description.value;
    var price = ev.target.elements.price.valueAsNumber;
    zapShop.addItem({ description: description, price: price });
    var rootItems = document.getElementById('rootItems');
    zapShop.renderItem(rootItems);
    ev.target.reset();
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
