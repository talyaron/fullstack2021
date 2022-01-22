var ZapList = {
    products: [],
    AddItem: function (item) {
        this.products.push(item);
    },
    sortItem: function (product) {
        var _this = this;
        var button1 = document.getElementById('lowToHigh');
        var button2 = document.getElementById('highToLow');
        button1.addEventListener('click', function (product) {
            _this.product.sort(function (a, b) { return a.price - b.price; });
        });
        button2.addEventListener('click', function () {
            _this.products.sort(function (a, b) { return b.price - a.price; });
        });
        ZapList.renderZaplist(document.getElementById('list'));
    },
    renderZaplist: function (domElement) {
        var HTML = '';
        this.products.forEach(function (element) {
            HTML += " <div class='card'>\n            <P> The product: " + element.description + ", price: " + element.price + "</p>\n            </div>";
        });
        domElement.innerHTML = HTML;
    }
};
ZapList.sortItem();
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
function handlePrice(ev) {
    ev.preventDefault();
    var pricenum = ev.target.elements.price.valueAsNumber;
    function newList(price) {
        return this.products.filter(function (product) { return product.price > pricenum; });
    }
}
function getElementById(arg0) {
    throw new Error("Function not implemented.");
}
