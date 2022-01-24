var myProduct = {
    zap: [],
    addItem: function (product) {
        this.zap.push(product);
    },
    sortAsc: function () {
        this.zap.sort(function (x, y) { return y.price - x.price; });
    },
    sortDesc: function () {
        this.zap.sort(function (x, y) { return x.price - y.price; });
    },
    renderAll: function (domElement) {
        var computers = this.zap;
        this.renderZap(domElement, computers);
    },
    renderZap: function (domElement, list) {
        var html = "";
        console.log(list);
        list.forEach(function (element) {
            html += "<div class = 'card'>\n       <p>product: " + element.product + ", price: " + element.price + "</p></div>";
        });
        domElement.innerHTML = html;
    },
    renderFilter: function (domElement, filterd) {
        this.renderZap(domElement, filterd);
    },
    priceUnder: function (item) {
        if (item == "") {
            this.renderZap(this.Zap);
            return;
        }
        return this.zap.filter(function (element) { return element.price <= item; });
    }
};
function handlePriceChange(ev) {
    ev.preventDefault();
    console.dir(ev.target);
    var product = ev.target.elements.title.value;
    var price = ev.target.elements.price.valueAsNumber;
    myProduct.addItem({ product: product, price: price });
    var rootZap = document.getElementById("rootZap");
    myProduct.renderAll(rootZap);
    ev.target.reset();
}
// function sort(ev){
//     switch(ev.target.id){
//         case `asc`:   myProduct.sortAsc();
//         break;
//         case `desc`:   myProduct.sortDesc();
//     }
//     const rootZap = document.getElementById("rootZap");
//  myProduct.renderZap(this.zap, rootZap);
// }
function handleAsc(event) {
    event.preventDefault();
    myProduct.sortAsc();
    var rootZap = document.getElementById("rootZap");
    myProduct.renderAll(rootZap);
}
;
function handleDesc(event) {
    event.preventDefault();
    myProduct.sortDesc();
    var rootZap = document.getElementById("rootZap");
    myProduct.renderAll(rootZap);
}
function handleFilter(ev) {
    var price = ev.target.valueAsNumber;
    var rootZap = document.getElementById("rootZap");
    if (price) {
        console.log(price) + "price";
        var filterd = myProduct.priceUnder(price);
        console.log(filterd);
        myProduct.renderFilter(rootZap, filterd);
    }
    else {
        this.renderAll();
    }
}
console.log(myProduct);
console.log(this.zap);
