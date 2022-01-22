var ZapList = {
    products: [
        {
            description: 'adidas',
            price: 300
        },
        {
            description: 'toe',
            price: 150
        },
        {
            description: 'creels',
            price: 200
        },
    ],
    AddItem: function (item) {
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
    renderZaplist: function (domElement, pricenum) {
        var HTML = '';
        var maxPrice = this.products.slice();
        if (pricenum) {
            maxPrice = maxPrice.filter(function (product) { return product.price <= pricenum; });
        }
        maxPrice.forEach(function (element) {
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
    var pricenum = ev.target.value;
    ZapList.renderZaplist(list, pricenum);
}
