var Items = {
    items: [],
    addItems: function (item) {
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
            html += "<div class='card'>\n        <p>" + item.itemName + "," + item.itemPrice + "</p></div> \n        <input type=\"button\" value=\"delete\">";
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
    Items.addItems({ itemName: itemName, itemPrice: itemPrice });
    var rootItems = document.getElementById('rootItems');
    Items.renderItems(rootItems);
    ev.target.reset();
}
Items.addItems({ itemName: 'bbb', itemPrice: 12 });
Items.addItems({ itemName: 'ccc', itemPrice: 4444 });
Items.addItems({ itemName: 'eee', itemPrice: 5 });
// Items.removeItems('ccc');
// Items.sortPrice();
// console.log(Items)
