var itemId = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
var Items = {
    items: [],
    addItems: function (item) {
        var id = itemId();
        this.items.push(item);
    },
    removeItems: function (itemName) {
        var index = this.items.findIndex(function (item) { return item.itemName === itemName; });
        if (index >= 0) {
            this.items.splice(index, 1);
        }
    },
    renderItems: function (domElement) {
        var html = '';
        this.items.forEach(function (item) {
            html += "<div class='card'>\n        <p>" + item.itemName + "," + item.itemPrice + "</p></div> \n        <input type=\"button\" value=\"delete\" id=\"" + item.id + "\" onclick=\"deleteItem(event)\">";
        });
        domElement.innerHTML = html;
    },
    sortPrice: function () {
        this.items.sort(function (a, b) { return a.itemPrice - b.itemPrice; });
    }, deleteItem: function (id) {
        this.items = this.items.filter(function (item) { return item.id !== id; });
    }
};
function handleSubmit(ev) {
    ev.preventDefault();
    console.dir(ev.target);
    var itemName = ev.target.elements.itemName.value;
    var itemPrice = ev.target.elements.itemPrice.valueAsNumber;
    Items.addItems({ itemName: itemName, itemPrice: itemPrice });
    var rootItems = document.getElementById('rootItems');
    Items.renderItems(rootItems);
    console.log(Items);
    ev.target.reset();
}
function deleteItem(ev) {
    var id = ev.target.id;
    console.log(id);
}
Items.addItems({ itemName: 'bbb', itemPrice: 12, id: "lala" });
Items.addItems({ itemName: 'ccc', itemPrice: 5, id: "baba" });
Items.addItems({ itemName: 'fff', itemPrice: 34, id: "koko" });
// Items.removeItems('ccc');
// Items.sortPrice();
// console.log(Items);
