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
// Items.addItems({itemName:`mug`,itemPrice:14});
// console.log(Items);
function handleSubmit(ev) {
    ev.preventDefault();
    console.dir(ev.target);
    var itemName = ev.target.elements.itemName;
    var itemPrice = ev.target.elements.itemPrice;
    Items.addItems({ itemName: itemName, itemPrice: itemPrice });
    var rootItems = document.getElementById('rootItems');
    Items.renderItems(rootItems);
}
