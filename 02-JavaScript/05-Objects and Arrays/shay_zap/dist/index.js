var myProduct = {
    zap: [],
    addItem: function (products) {
        this.zap.push(products);
    },
    sortAsc: function () {
        this.zap.sort(function (x, y) { return y.price - x.price; });
    },
    sortDesc: function () {
        this.zap.sort(function (x, y) { return x.price - y.price; });
    },
    renderZap: function (domElement) {
        var html = "";
        this.zap.forEach(function (element) {
            html += "<div class = 'card'>\n                         <p>product: " + element.product + ", price: " + element.price + "</p>\n                     </div>";
            console.log(html);
        });
        domElement.innerHTML = html;
    },
    priceUnder: function (item) {
        console.log(item);
        if (item == "") {
            this.renderZap(this.Zap);
            return;
        }
        var listFilter = this.zap.filter(function (element) { return element.price <= item; });
        console.log(listFilter);
        myProduct.renderZap(listFilter);
    }
};
function handlePriceChange(ev) {
    ev.preventDefault();
    console.dir(ev.target);
    var product = ev.target.elements.title.value;
    var price = ev.target.elements.price.valueAsNumber;
    myProduct.addItem({ product: product, price: price });
    var rootZap = document.getElementById("rootZap");
    myProduct.renderZap(rootZap);
    ev.target.reset();
}
function sort(ev) {
    switch (ev.target.id) {
        case "asc":
            myProduct.sortAsc();
            break;
        case "desc": myProduct.sortDesc();
    }
    myProduct.renderZap(rootZap);
}
function handleFilter(ev) {
    myProduct.priceUnder(ev.target.value);
    console.log(ev.target.value);
}
console.log(myProduct);
var rootZap = document.getElementById("rootZap");
myProduct.renderZap(rootZap);
