var itemId = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
var Items = {
    items: [],
    addItems: function (itemName, itemPrice) {
        var id = itemId();
        this.items.push(itemName, itemPrice, id);
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
            html += "<div class='card'>\n        <p>" + Items.itemName + "," + Items.itemPrice + "</p></div> \n        <input type=\"button\" value=\"delete\" onclick=\"deleteItem(event)\">";
        });
        domElement.innerHTML = html;
    },
    sortPrice: function () {
        this.items.sort(function (a, b) { return a.itemPrice - b.itemPrice; });
    }
};
function handleSubmit(ev) {
    ev.preventDefault();
    console.dir(ev.target);
    var itemName = ev.target.elements.itemName.value;
    var itemPrice = ev.target.elements.itemPrice.valueAsNumber;
    Items.addItems(itemName, itemPrice);
    var rootItems = document.getElementById('rootItems');
    Items.renderItems(rootItems);
    ev.target.reset();
}
// function deleteItem(ev){
//     e
// }
Items.addItems('bbb', 12);
Items.addItems('ccc', 4444);
Items.addItems('eee', 5);
// Items.removeItems('ccc');
// Items.sortPrice();
// console.log(Items)
