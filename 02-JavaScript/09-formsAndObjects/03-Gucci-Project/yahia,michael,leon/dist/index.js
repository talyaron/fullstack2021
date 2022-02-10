var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
var nikeItems = {
    items: [],
    carts: [],
    additems: function (name, price) {
        var idItem = uid();
        this.items.push({ name: name, price: price, idItem: idItem });
        localStorage.setItem('storeData', JSON.stringify(this.items));
    },
    sortAsc: function () {
        this.items.sort(function (a, b) { return a.price - b.price; });
    },
    sortDes: function () {
        this.items.sort(function (a, b) { return b.price - a.price; });
    },
    deleteItem: function (idItem) {
        this.items = this.items.filter(function (item) { return item.idItem !== idItem; });
        var ownerRoot = document.getElementById("ownerRoot");
        var customerRoot = document.getElementById("customerRoot");
        if (ownerRoot) {
            this.render(ownerRoot, this.items);
        }
        if (customerRoot) {
            this.render(customerRoot, this.carts);
        }
    },
    updateItem: function (idItem, newValue) {
        var i = this.items.findIndex(function (item) { return item.idItem === idItem; });
        this.items[i].name = newValue;
    },
    addToCarts: function (name, type) {
        this.carts.push({ name: name, type: type });
    },
    selectItem: function (type) {
        // console.log('selectItem', type);
        // console.log(this.carts)
        return this.carts.filter(function (item) { return item.type === type; });
    },
    renderAllData: function (ownerRoot) {
        var list = this.items;
        this.render(ownerRoot, list);
    },
    renderSelctedItem: function (customerRoot, type) {
        // console.log('at renderSelctedItem type:', type)
        var selected = this.selectItem(type);
        // console.log(selected)
        this.renderCarts(customerRoot, selected);
    },
    renderAllCarts: function (customerRoot) {
        // console.log(this.carts);
        this.renderCarts(customerRoot, this.carts);
    },
    renderCarts: function (customerRoot, list) {
        // console.log(customerRoot,list);
        var htmlCustomer = "";
        list.forEach(function (type) {
            htmlCustomer += "<div class= 'card1'><h4>The Item You Want:</h4> <p>" + type.name + "</p></div>\n      <button onclick=\"handleDelete('" + type.idItem + "')\">delete</button>";
        });
        customerRoot.innerHTML = htmlCustomer;
    },
    render: function (root, list) {
        var html = "";
        list.forEach(function (item) {
            html += "<div class = 'card'> <p>" + item.name + ":" + item.price + "</p>\n            <button onclick=\"handleDelete('" + item.idItem + "')\">delete</button>\n            <form onsubmit=\"handleupdate(event,'" + item.idItem + "')\">\n            <input type=\"text\" name=\"nameUpdate\" placeholder=\"change item\">\n            <input type=\"submit\" value=\"submit\">\n            </form>\n            </div>";
        });
        root.innerHTML = html;
    },
    getData: function () {
        var storeData = JSON.parse(localStorage.getItem('storeData'));
        console.log(storeData);
        var ownerRoot = document.getElementById("ownerRoot");
        var customerRoot = document.getElementById("customerRoot");
        if (ownerRoot) {
            this.render(ownerRoot, storeData);
        }
        if (customerRoot) {
            this.render(customerRoot, storeData);
        }
    }
};
function handleSubmit(event) {
    event.preventDefault();
    var name = event.target.elements.description.value;
    var price = event.target.elements.price.value;
    nikeItems.additems(name, price);
    var ownerRoot = document.getElementById("ownerRoot");
    nikeItems.renderAllData(ownerRoot);
    event.target.reset(); // poner el tu pajina
}
function handleAsce() {
    nikeItems.sortAsc();
    var ownerRoot = document.getElementById("ownerRoot");
    nikeItems.renderAllData(ownerRoot);
}
function handleDesce() {
    nikeItems.sortDes();
    var ownerRoot = document.getElementById("ownerRoot");
    nikeItems.renderAllData(ownerRoot);
}
function handleDelete(id) {
    nikeItems.deleteItem(id);
    var ownerRoot = document.getElementById("ownerRoot");
    nikeItems.renderAllData(ownerRoot);
}
function handleupdate(event, id) {
    event.preventDefault();
    var updateditem = event.target.elements.nameUpdate.value;
    nikeItems.updateItem(id, updateditem);
    var ownerRoot = document.getElementById("ownerRoot");
    nikeItems.renderAllData(ownerRoot);
}
function handleGetProduct() {
    nikeItems.getData();
    console.log("handleGetProduct");
}
//customer
function handleCart(event) {
    var shoes = event.target.id;
    nikeItems.addToCarts(shoes, 'shoes');
    var rooto = document.getElementById("customerRoot");
    nikeItems.renderAllCarts(rooto);
}
function handlehoodie(ev) {
    var hoodie = ev.target.id;
    nikeItems.addToCarts(hoodie, 'hoodie');
    var rooto = document.getElementById("customerRoot");
    nikeItems.renderAllCarts(rooto);
}
function handleSelect(event) {
    var type = event.target.value;
    var customerRoot = document.getElementById("customerRoot");
    if (type === "all") {
        nikeItems.renderAllCarts(customerRoot);
    }
    else {
        nikeItems.renderSelctedItem(customerRoot, type);
    }
}
