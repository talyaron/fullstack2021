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
    : .items
}, _a = void 0,  = _a["this"], items = _a.items, sort = _a.sort;
(function (a, b) { return a.price - b.price; });
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
function handleSort(ev) {
    ev.preventDefault();
    console.dir(ev.target);
    var description = ev.target.elements.description.value;
    var price = ev.target.elements.price.valueAsNumber;
    var items = zapShop.addItem({ description: description, price: price });
    zapShop.sortItemAsc(Item);
}
