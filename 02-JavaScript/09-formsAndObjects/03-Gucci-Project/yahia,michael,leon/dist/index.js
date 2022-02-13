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
    },
    deleteItemCustomer: function (idItem) {
        this.items = this.items.filter(function (item) { return item.idItem !== idItem; });
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
<<<<<<< Updated upstream
    renderCarts: function (customerRoot, list) {
        // console.log(customerRoot,list);
        var htmlCustomer = "";
        list.forEach(function (type) {
            htmlCustomer += "<div class= 'card1'><h4>The Item You Want:</h4> <p>" + type.name + "</p>\n      <button onclick=\"handleDeleteCustomer('" + type.idItem + "')\">delete</button></div>";
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
=======
    renderSelctedItem: function (root1, type) {
        console.log('at renderSelctedItem type:', type);
        var selected = this.selectItem(type);
        console.log(selected);
        this.renderCarts(root1, selected);
    },
    renderAllCarts: function (root1) {
        console.log(this.carts);
        this.renderCarts(root1, this.carts);
    },
    renderCarts: function (root1, list) {
        // console.log(root1,list);
        var htmlCustomer = "";
        list.forEach(function (type) {
            htmlCustomer += "<div class= 'card1'><h4>The Item You Want:</h4> <p>" + type.name + "</p></div>";
        });
        root1.innerHTML = htmlCustomer;
    },
    render: function (root, list) {
        var html = "";
        list.forEach(function (item) {
            html += "<div class = 'card'> <p>" + item.name + ":" + item.price + "</p>\n            <button onclick=\"handleDelete('" + item.idItem + "')\">delete</button>\n            <form onsubmit=\"handleupdate(event,'" + item.idItem + "')\">\n            <input type=\"text\" name=\"nameUpdate\" placeholder=\"change item\">\n            <input type=\"submit\" value=\"submit\">\n            </form>\n            </div>";
        });
        root.innerHTML = html;
    },
    getData: function () {
        var listmichael = JSON.parse(localStorage.getItem('item'));
        var root = document.getElementById("root");
        this.render(root, listmichael);
>>>>>>> Stashed changes
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
function handleDeleteCustomer(id) {
    console.log("handleDeleteCustomer");
    nikeItems.deleteItemCustomer(id);
    var customerRoot = document.getElementById("customerRoot");
    nikeItems.render(customerRoot, nikeItems.carts);
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
<<<<<<< Updated upstream
    var rooto = document.getElementById("customerRoot");
=======
    var rooto = document.getElementById("root1");
>>>>>>> Stashed changes
    nikeItems.renderAllCarts(rooto);
}
function handleSelect(event) {
    var type = event.target.value;
    var customerRoot = document.getElementById("customerRoot");
    if (type === "all") {
        nikeItems.renderAllCarts(customerRoot);
    }
    else {
<<<<<<< Updated upstream
        nikeItems.renderSelctedItem(customerRoot, type);
=======
        nikeItems.renderSelctedItem(root1, type);
>>>>>>> Stashed changes
    }
}
