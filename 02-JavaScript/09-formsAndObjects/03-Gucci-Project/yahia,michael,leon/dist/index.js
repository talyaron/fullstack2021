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
        var datasOfLocalStorage = JSON.parse(localStorage.getItem("storeData"));
        var index = datasOfLocalStorage.findIndex(function (data) { return data.idItem === idItem; });
        if (index >= 0) {
            console.log("before the delete");
            console.log(datasOfLocalStorage);
            var newLocal = datasOfLocalStorage.splice(index, 1);
            console.log("after the delete ");
            console.log(newLocal);
        }
    },
    deleteItemCustomer: function (idItem) {
        this.carts = this.carts.filter(function (type) { return type.idCustomer !== idItem; });
    },
    updateItem: function (idItem, newValue) {
        var i = this.items.findIndex(function (item) { return item.idItem === idItem; });
        this.items[i].name = newValue;
    },
    addToCarts: function (name, type) {
        var idCustomer = uid();
        this.carts.push({ idCustomer: idCustomer, name: name, type: type });
    },
    selectItem: function (type) {
        return this.carts.filter(function (item) { return item.type === type; });
    },
    renderAllData: function (ownerRoot) {
        var list = this.items;
        this.render(ownerRoot, list);
    },
    renderSelctedItem: function (customerRoot, type) {
        var selected = this.selectItem(type);
        this.renderCarts(customerRoot, selected);
    },
    renderAllCarts: function (customerRoot) {
        this.renderCarts(customerRoot, this.carts);
    },
    renderCarts: function (customerRoot, list) {
        var htmlCustomer = "";
        list.forEach(function (type) {
            htmlCustomer += "<div class= 'card1'><h4>The Item You Want:</h4> <p>" + type.name + "</p>\n      <button onclick=\"handleDeleteCustomer('" + type.idCustomer + "')\">delete</button></div>";
        });
        customerRoot.innerHTML = htmlCustomer;
    },
    render: function (ownerRoot, list) {
        var html = "";
        list.forEach(function (item) {
            html += "<div class = 'card'> <p>" + item.name + ":" + item.price + "</p>\n            <button onclick=\"handleDelete('" + item.idItem + "')\">delete</button>\n            <form onsubmit=\"handleupdate(event,'" + item.idItem + "')\">\n            <input type=\"text\" name=\"nameUpdate\" placeholder=\"change item\">\n            <input type=\"submit\" value=\"submit\">\n            </form>\n            </div>";
        });
        ownerRoot.innerHTML = html;
    },
    getData: function () {
        var storeData = JSON.parse(localStorage.getItem('storeData'));
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
function handleDeleteCustomer(id) {
    // console.log(id);
    nikeItems.deleteItemCustomer(id);
    var customerRoot = document.getElementById("customerRoot");
    nikeItems.renderAllCarts(customerRoot);
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
