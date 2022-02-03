var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
var ZapList = {
    products: [
        {
            description: 'lenovo',
            price: 200,
            id: '6',
            category: 'computers'
        },
        {
            description: 'galaxy',
            price: 500,
            id: '5',
            category: 'phones'
        }
    ],
    AddItem: function (item) {
        var id = uid();
        this.products.push(item);
    },
    sortItem: function () {
        var _this = this;
        var button1 = document.getElementById('lowToHigh');
        var button2 = document.getElementById('highToLow');
        button1.addEventListener('click', function () {
            _this.products.sort(function (a, b) { return a.price - b.price; });
            _this.renderZaplist(_this.products, rootHTML);
        });
        button2.addEventListener('click', function () {
            _this.products.sort(function (a, b) { return b.price - a.price; });
            _this.renderZaplist(_this.products, rootHTML);
        });
    },
    filterByPrice: function (pricenum) {
        this.products.filter(function (product) { return product.price <= pricenum; });
    },
    deleteItem: function (id) {
        this.products = this.products.filter(function (product) { return product.id !== id; });
    },
    filterByCategory: function (showCategory) {
        this.products = this.products.filter(function (product) { return product.showCategory === showCategory; });
    },
    renderByCategory: function (showCategory, domElement) {
        var filtered = this.filterByCategory(showCategory);
        this.renderZaplist(filtered, domElement);
    },
    renderZaplist: function (list, domElement) {
        var HTML = '';
        console.log(list);
        list.forEach(function (product) {
            HTML += " <div class='card'>\n            <P> The product: " + product.description + ", Price: " + product.price + "\n            , Category: " + product.category + "</p>\n            <button onclick=\"handleDelete('" + product.id + "')\">Delete</button>\n            </div>";
        });
        domElement.innerHTML = HTML;
    }
};
var rootHTML = document.getElementById('root');
ZapList.renderZaplist(ZapList.products, rootHTML);
function handleZaplist(ev) {
    ev.preventDefault();
    var description = ev.target.elements.description.value;
    var price = ev.target.elements.price.valueAsNumber;
    var id = uid();
    var category = ev.target.elements.category.value;
    console.log(category);
    ZapList.AddItem({ id: id, description: description, price: price, category: category });
    var rootHTML = document.getElementById('root');
    ZapList.renderZaplist(ZapList.products, rootHTML);
    ev.target.reset();
}
function handlePrice(ev) {
    var pricenum = ev.target.value;
    ZapList.renderZaplist(ZapList.products, rootHTML);
}
function handleDelete(id) {
    ZapList.deleteItem(id);
    var rootHTML = document.getElementById('root');
    ZapList.renderZaplist(ZapList.products, rootHTML);
}
function handleSelect(ev) {
    var showCategory = ev.target.value;
    console.log(showCategory);
    var rootHTML = document.getElementById('root');
    ZapList.renderByCategory(showCategory, rootHTML);
    // if (showCategory === 'Show All') {
    //     ZapList.renderZaplist(ZapList.products,rootHTML)
    // }
    // else {
    //     ZapList.renderByCategory(showCategory, rootHTML)
    // }
}
ZapList.sortItem();
