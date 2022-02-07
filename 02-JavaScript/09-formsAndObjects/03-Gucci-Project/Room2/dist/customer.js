var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
var Adidas = {
    products: [],
    addCartItem: function (products) {
        var id = uid;
        this.products.push(products, id);
    },
    renderAdidas: function (list, domElement) {
        var html = '';
        this.products.forEach(function (item) {
            html += "<div class=\"item\">\n            <p><img src=\"" + item.picture + "\" style=\"width: 200px; height: 200px;\"></p>\n            <p>" + item.title + "</p>\n            <p> size: " + item.shoeSize + "</p>\n            <p> price: " + item.price + "\n            <button onclick=\"handleDelete('" + item.id + "')\">Delete</button>\n            </div>";
        });
        domElement.innerHTML = html;
    },
    renderFilter: function (domElement, filterd) {
        this.renderAdidas(domElement, filterd);
    },
    renderAll: function (domElement) {
        var product = this.products;
        this.renderAdidas(domElement, product);
    },
    filterItems: function (highPrice, lowPrice) {
        return this.products.filter(function (item) { return item.price >= lowPrice && item.price <= highPrice; });
    },
    shoeSizeFilter: function (size) {
        return this.products.filter(function (item) { return item.size === size; });
    },
    sortItemsAsc: function () {
        this.products.sort(function (x, y) { return y.price - x.price; });
    },
    sortItemsDsc: function () {
        this.products.sort(function (x, y) { return x.price - y.price; });
    },
    sortByGender: function (item) {
        return this.products.filter(function (element) { return element.gender === item; });
    },
    sortByColor: function (color) {
        return this.products.filter(function (element) { return element.color === color; });
    },
    sortByType: function (type) {
        return this.products.filter(function (element) { return element.type === type; });
    }
};
function handleCart(ev) {
    //  const title = ev.target.elements.
}
function handlePriceRange(ev) {
    var root = document.getElementById("rootCart");
    var priceLow = ev.target.valueAsNumber;
    var priceHigh = ev.target.valueAsNumber;
    if (priceLow && priceHigh) {
        // console.log(price) + `price`;
        var filterd = Adidas.filterItems(priceLow && priceHigh);
        console.log(filterd);
        Adidas.renderFilter(root, filterd);
    }
    else {
        this.renderAll();
    }
}
function handleSort(ev) {
    var sort = ev.target.value;
    ev.preventDefault();
    var root = document.getElementById("root");
    if (sort === ev.target.value.priceAsc) {
        Adidas.renderAll(this.sortItemsAsc(root));
    }
    else if (sort === ev.target.value.priceDsc) {
        Adidas.renderAll(this.sortItemsDsc(root));
    }
    else if (sort === ev.target.value.startPosition) {
        ev.target.reset();
    }
}
function handleType(ev) {
    var type = ev.target.value;
    ev.preventDefault();
    var root = document.getElementById("root");
    // if(type === " ")
    return Adidas.renderFilter(root, Adidas.sortByType(type));
}
function handleColor(ev) {
    var color = ev.target.value;
    ev.preventDefault();
    var root = document.getElementById("root");
    // if(type === " ")
    return Adidas.renderFilter(root, Adidas.sortByColor(color));
}
function handleGender(ev) {
    var gender = ev.target.value;
    ev.preventDefault();
    var root = document.getElementById("root");
    // if(type === " ")
    return Adidas.renderFilter(root, Adidas.sortByGender(gender));
}
function handleShoeSize(ev) {
    var size = ev.target.value;
    ev.preventDefault();
    var root = document.getElementById("root");
    Adidas.renderFilter(root, Adidas.shoeSizeFilter(size));
    // if(type === " ")
    //Adidas.shoeSizeFilter(size);
}
function getData() {
    this.products = +localStorage.getItem("products");
    console.log(JSON.parse(localStorage.getItem("Adidas")));
    var root = document.querySelector('picture');
    Adidas.renderAll(root);
}
getData();
console.log(this.products);
