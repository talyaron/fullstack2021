var Items = {
    items: [],
    addItems: function (item) {
        this.items.push(item);
    },
    renderItems: function (domElement) {
        var html = '';
        this.items.forEach(function (item) {
            html += "<div class='card'>\n        <p>" + item.itemName + "," + item.itemPrice + "</p></div>";
        });
        domElement.innerHTML = html;
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
