var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
var nikeItems = {
    items: [],
    additems: function (name, price) {
        var idItem = uid();
        this.items.push({ name: name, price: price, idItem: idItem });
        console.log(this.items);
    },
    sortAsc: function () {
        this.items.sort(function (a, b) { return a.price - b.price; });
    },
    sortDes: function () {
        this.items.sort(function (a, b) { return b.price - a.price; });
    },
    deleteItem: function (idItem) {
        this.items = this.items.filter(function (item) { return item.idItem !== idItem; });
        console.log(this.items);
    },
    renderAllData: function (root) {
        var list = this.items;
        this.render(root, list);
    },
    render: function (root, list) {
        var html = '';
        list.forEach(function (item) {
            html += "<div class = 'card'> <p>" + item.name + ": " + item.price + "</p></div>\n            <button onclick=\"handleDelete('" + item.idItem + "')\">delete</button>";
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
    event.target.reset();
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
