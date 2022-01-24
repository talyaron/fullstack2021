var ZapList = {
    products: [],
    AddItem: function (item) {
        this.products.push(item);
    },
    renderZaplist: function (domElement) {
        var HTML = '';
        this.products.forEach(function (element) {
            HTML += " <div class='card'>\n            <P> The product: " + element.description + ", price: " + element.price + "</p>\n            </div>";
        });
        domElement.innerHTML += HTML;
    }
};
var list = document.getElementById('list');
ZapList.renderZaplist(list);
function handleZaplist(ev) {
    ev.preventDefault();
    var description = ev.target.elements.description.value;
    var price = ev.target.elements.price.valueAsNumber;
    console.log(description, price);
    ZapList.AddItem({ description: description, price: price });
    var list = document.getElementById('list');
    ZapList.renderZaplist(list);
    ev.target.reset();
}
