var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
var nikeItems = {
    items: [],
    carts: [],
    additems: function (name, price) {
        var idItem = uid();
        this.items.push({ name: name, price: price, idItem: idItem });
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
    updateItem: function (idItem, newValue) {
        var i = this.items.findIndex(function (item) { return item.idItem === idItem; });
        this.items[i].name = newValue;
    },
    addToCarts: function (type) {
        this.carts.push({ name: type });
    },
    selectItem: function (type) {
        console.log(type);
        return this.carts.filter(function (item) { return item.type === type; });
    },
    renderAllData: function (root) {
        var list = this.items;
        this.render(root, list);
    },
    renderSelctedItem: function (root1, type) {
        var selected = this.selectItem(type);
        this.renderCarts(root1, selected);
    },
    renderAllCarts: function (root1) {
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
        var html = '';
        list.forEach(function (item) {
            html += "<div class = 'card'> <p>" + item.name + "</p>\n            <button onclick=\"handleDelete('" + item.idItem + "')\">delete</button>\n            <form onsubmit=\"handleupdate(event,'" + item.idItem + "')\">\n            <input type=\"text\" name=\"nameUpdate\" placeholder=\"change item\">\n            <input type=\"submit\" value=\"submit\">\n            </form>\n            </div>";
        });
        root.innerHTML = html;
    }
};
function handleSubmit(event) {
    event.preventDefault();
    var name = event.target.elements.description.value;
    var price = event.target.elements.price.value;
    nikeItems.additems(name, price);
    var root = document.getElementById('root');
    nikeItems.renderAllData(root);
    event.target.reset(); // poner el tu pajina 
}
function handleAsce() {
    nikeItems.sortAsc();
    var root = document.getElementById('root');
    nikeItems.renderAllData(root);
}
function handleDesce() {
    nikeItems.sortDes();
    var root = document.getElementById('root');
    nikeItems.renderAllData(root);
}
function handleDelete(id) {
    nikeItems.deleteItem(id);
    var root = document.getElementById('root');
    nikeItems.renderAllData(root);
}
function handleupdate(event, id) {
    event.preventDefault();
    var updateditem = event.target.elements.nameUpdate.value;
    nikeItems.updateItem(id, updateditem);
    var root = document.getElementById('root');
    nikeItems.renderAllData(root);
}
//customer
function handleCart(event) {
    var shoes = event.target.id;
    nikeItems.addToCarts(shoes);
    var rooto = document.getElementById('root1');
    nikeItems.renderAllCarts(rooto);
}
function handlehoodie(ev) {
    var hoodie = ev.target.id;
    nikeItems.addToCarts(hoodie);
    var rooto = document.getElementById('root1');
    nikeItems.renderAllCarts(rooto);
}
function handleSelect(event) {
    var type = event.target.value;
    var root1 = document.getElementById('root1');
    if (type === "all") {
        nikeItems.renderAllCarts(root1);
    }
    else {
        nikeItems.renderSelctedItem(root1, type);
    }
}
