var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
var ZapList = {
    products: [],
    AddItem: function (item) {
        var id = uid();
        this.products.push(item);
    },
    sortItem: function (product) {
        var _this = this;
        var button1 = document.getElementById('lowToHigh');
        var button2 = document.getElementById('highToLow');
        button1.addEventListener('click', function () {
            _this.products.sort(function (a, b) { return a.price - b.price; });
            _this.renderZaplist(list);
        });
        button2.addEventListener('click', function () {
            _this.products.sort(function (a, b) { return b.price - a.price; });
            _this.renderZaplist(list);
        });
    },
    filterByPrice: function (pricenum) {
        this.products.filter(function (product) { return product.price <= pricenum; });
    },
    deleteItem: function (id) {
        this.products = this.products.filter(function (product) { return product.id !== id; });
    },
    renderZaplist: function (domElement) {
        var HTML = '';
        this.products.forEach(function (product) {
            HTML += " <div class='card'>\n            <P> The product: " + product.description + ", price: " + product.price + "</p>\n            <button onclick=\"handleDelete('" + product.id + "')\">Delete</button>\n            </div>";
        });
        domElement.innerHTML = HTML;
    }
};
var list = document.getElementById('list');
ZapList.renderZaplist(list);
function handleZaplist(ev) {
    ev.preventDefault();
    var description = ev.target.elements.description.value;
    var price = ev.target.elements.price.valueAsNumber;
    var id = uid();
    console.log(description, price);
    ZapList.AddItem({ id: id, description: description, price: price });
    var list = document.getElementById('list');
    ZapList.renderZaplist(list);
    ev.target.reset();
}
function handlePrice(ev) {
    var pricenum = ev.target.value;
    ZapList.renderZaplist(list);
}
function handleDelete(id) {
    ZapList.deleteItem(id);
    var list = document.getElementById('list');
    ZapList.renderZaplist(list);
}
