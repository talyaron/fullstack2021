console.log('ok');
var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
var myProduct = {
    zap: [],
    addItem: function (product, price, type) {
        var id = uid();
        this.zap.push({ id: id, product: product, price: price, type: type });
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
            html += "<div class = 'card'>\n       <p>product: " + element.product + ", price: " + element.price + "</p>\n       <button onclick=\"handleDelete('" + element.id + "')\">Delete</button></div>";
        });
        domElement.innerHTML = html;
    },
    renderFilter: function (domElement, filterd) {
        this.renderZap(domElement, filterd);
    },
    deleteItem: function (id) {
        this.zap = this.zap.filter(function (item) { return item.id !== id; });
    },
    filterByType: function (type) {
        return myProduct.zap.filter(function (item) { return item.type === type; });
    },
    priceUnder: function (item) {
        if (item == "") {
            this.renderZap(this.Zap);
            return;
        }
        return this.zap.filter(function (element) { return element.price <= item; });
    },
    renderByType: function (type, domElement) {
        var filterd = this.filterByType(type);
        console.log(filterd) + "filterd";
        this.renderZap(domElement, filterd);
    }
};
function handlePriceChange(ev) {
    ev.preventDefault();
    console.dir(ev.target);
    var product = ev.target.elements.title.value;
    var price = ev.target.elements.price.valueAsNumber;
    var type = ev.target.elements.type.value;
    myProduct.addItem(product, price, type);
    var rootZap = document.getElementById("rootZap");
    myProduct.renderAll(rootZap);
    ev.target.reset();
}
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
function handleSelect(ev) {
    var rootZap = document.getElementById('rootZap');
    var theType = ev.target.value;
    if (theType === 'all') {
        myProduct.renderAll(rootZap);
    }
    else {
        console.log(theType) + " theType";
        myProduct.renderByType(theType, rootZap);
    }
}
function handleDelete(id) {
    console.log(id);
    var rootZap = document.getElementById('rootZap');
    myProduct.deleteItem(id);
    myProduct.renderAll(rootZap);
}
console.log(myProduct);
console.log(this.zap);
myProduct.addItem('lenovo 50', 1550, 'computer');
myProduct.addItem('lenovo 60', 2000, 'computer');
myProduct.addItem('lenovo 70', 2500, 'computer');
myProduct.addItem('lenovo 80', 3000, 'computer');
myProduct.addItem('lenovo 100', 4000, 'computer');
myProduct.addItem('lenovo 120', 5000, 'computer');
myProduct.addItem('Fortnite GiftCard', 100, 'games');
myProduct.addItem('Roblox GiftCard', 120, 'games');
myProduct.addItem('Valorant GiftCard', 60, 'games');
myProduct.addItem('League Of Legends GiftCard', 50, 'games');
myProduct.addItem('Fifa GiftCard', 50, 'games');
myProduct.addItem('One Tree Hill season 1', 200, 'movie');
