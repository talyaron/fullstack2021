var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
var productObj = {
    products: [],
    addProducts: function (name, price, type) {
        var id = uid();
        this.products.push({ id: id, name: name, price: price, type: type });
    },
    sortDesc: function (orderByDesc) {
        orderByDesc === 'desc';
        this.products.sort(function (a, b) { return a.price - b.price; });
    },
    sortAsc: function (orderByAsc) {
        orderByAsc === 'asc';
        this.products.sort(function (a, b) { return b.price - a.price; });
    },
    deleteProducts: function (id) {
        this.products = this.products.filter(function (product) { return product.id !== id; });
    },
    updateProduct: function (id, newPrice) {
        var index = this.products.findIndex(function (product) { return product.id === id; });
        if (index >= 0) {
            this.products[index].price = newPrice;
        }
    },
    filterByPrice: function (price) {
        return this.products.filter(function (product) { return product.price < price; });
    },
    filterByType: function (type) {
        return this.products.filter(function (product) { return product.type === type; });
    },
    render: function (list, domElement) {
        var html = '';
        list.forEach(function (product) {
            html += "<div class='result-card'>\n            <p> " + product.name + "<i class=\"fas fa-gamepad fa-spin\"></i></p>\n            <p> " + product.price + "$</p>\n            <button class='tsBtn' onclick=\"handleDelete('" + product.id + "')\">Delete</button>\n            <form onsubmit=\"handleUpdate(event, '" + product.id + "')\">\n                <input class='tsInput'  type=\"number\" name=\"update\" placeholder=\"Update Price\">\n                <input class='tsBtn' name=\"submit\" value=\"Update\" type=\"submit\">\n                </form>\n            </div>";
        });
        domElement.innerHTML = html;
    },
    renderAllProducts: function (domElement) {
        var products = this.products;
        this.render(products, domElement);
    },
    renderByType: function (type, domElement) {
        var filterdByType = this.filterByType(type);
        this.render(filterdByType, domElement);
    },
    renderByPrice: function (price, domElement) {
        var filterd = this.filterByPrice(price);
        this.render(filterd, domElement);
    }
};
function handleSubmit(ev) {
    ev.preventDefault();
    console.dir(ev.target);
    var name = ev.target[0].value;
    var price = ev.target[1].value;
    var type = ev.target[2].value;
    productObj.addProducts(name, price, type);
    var root = document.getElementById('root');
    productObj.renderAllProducts(root);
    ev.target.reset();
}
function handleDesc(ev) {
    var desc = ev.target.value;
    productObj.sortDesc(desc);
    var root = document.getElementById('root');
    productObj.renderAllProducts(root);
}
function handleAsc(ev) {
    var asc = ev.target.value;
    productObj.sortAsc(asc);
    var root = document.getElementById('root');
    productObj.renderAllProducts(root);
}
function handleInput(ev) {
    var price = ev.target.valueAsNumber;
    var root = document.getElementById('root');
    if (price) {
        productObj.renderByPrice(price, root);
    }
    else {
        productObj.renderAllProducts(root);
    }
}
function handleDelete(id) {
    var root = document.getElementById('root');
    productObj.deleteProducts(id);
    productObj.renderAllProducts(root);
}
function handleSelect(ev) {
    var root = document.getElementById('root');
    var type = ev.target.value;
    if (type === 'all') {
        productObj.renderAllProducts(root);
    }
    else {
        productObj.renderByType(type, root);
    }
}
function handleUpdate(ev, id) {
    ev.preventDefault();
    var root = document.getElementById('root');
    var NewPrice = ev.target.elements.update.value;
    productObj.updateProduct(id, NewPrice);
    productObj.renderAllProducts(root);
}
productObj.addProducts('Halo', 99.99, 'pc games');
productObj.addProducts('Dark Siders', 103.99, 'pc games');
productObj.addProducts('Icy Tower', 5.99, 'pc games');
productObj.addProducts('The Witcher', 89.99, 'pc games');
productObj.addProducts('Daying Light', 106.99, 'pc games');
productObj.addProducts('Angry Birds', 4.99, 'mobile games');
productObj.addProducts('Asphalt ', 6.99, 'mobile games');
productObj.addProducts("Poker", 5.99, 'mobile games');
productObj.addProducts("Top war", 1.99, 'mobile games');
productObj.addProducts("Sonic Dash", 0.99, 'mobile games');
var root = document.getElementById('root');
productObj.renderAllProducts(root);
