var admin = 'no';
var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
var MyHome = {
    data: [],
    addItem: function (name, type, price) {
        var id = uid();
        this.data.push({ id: id, name: name, type: type, price: price });
    },
    deleteItem: function (id) {
        this.data = this.data.filter(function (item) { return item.id !== id; });
    },
    filterByType: function (type) {
        return this.data.filter(function (item) { return item.type === type; });
    },
    render: function (list, domElement) {
        var html = '';
        list.forEach(function (item) {
            html += "<div class=\"item\">\n            <p >" + item.name + " - " + item.price + "\u20AA    (" + item.type + ")</p>\n            <form onsubmit=\"handleUpdate(event, '" + item.id + "')\">\n            <input type=\"text\" name=\"newName\" placeholder=\"new name\" value=\"" + item.name + "\">\n            <input type=\"number\" name=\"newPrice\" placeholder=\"new price\" value=\"" + item.price + "\">\n            <button type=\"submit\">Update</button>\n            <button onclick=\"handleDelete('" + item.id + "')\">Delete</button>\n            </form>\n            <hr>\n            </div>";
        });
        domElement.innerHTML = html;
    },
    renderAllData: function (domElement) {
        this.render(this.data, domElement);
    },
    renderByType: function (type, domElement) {
        var filterd = this.filterByType(type);
        this.render(filterd, domElement);
    },
    sortAscending: function () {
        this.data.sort(function (a, b) { return a.price - b.price; });
    },
    sortDescending: function () {
        this.data.sort(function (a, b) { return b.price - a.price; });
    },
    updateItem: function (id, newName, newPrice) {
        //find index
        var index = this.data.findIndex(function (item) { return item.id === id; });
        //update the spesific item's name
        if (index >= 0) {
            this.data[index].name = newName;
            this.data[index].price = newPrice;
        }
    }
};
MyHome.addItem('Harry Potter', 'Book', 20);
MyHome.addItem('Harry Potter 2', 'Book', 30);
MyHome.addItem('shirt', 'Clothes', 177);
MyHome.addItem('pants', 'Clothes', 132);
MyHome.addItem('Joker', 'Movie', 40);
MyHome.addItem('Spider-Man', 'Movie', 40);
var root = document.getElementById('root');
MyHome.renderAllData(root);
function handleAddItem(ev) {
    ev.preventDefault();
    var name = ev.target.elements.name.value;
    var price = ev.target.elements.price.valueAsNumber;
    var type = ev.target.elements.type.value;
    MyHome.addItem(name, type, price);
    MyHome.renderAllData(root);
    ev.target.reset(); //reset the form fileds
}
function handleSelectSort(ev) {
    var root = document.getElementById('root');
    var type = ev.target.value;
    if (type === 'all') {
        MyHome.renderAllData(root);
    }
    else {
        MyHome.renderByType(type, root);
    }
}
function handleDelete(id) {
    console.log(id);
    var root = document.getElementById('root');
    MyHome.deleteItem(id);
    MyHome.renderAllData(root);
}
function handleUpdate(ev, itemId) {
    ev.preventDefault();
    var newName = ev.target.elements.newName.value;
    var newPrice = ev.target.elements.newPrice.valueAsNumber;
    MyHome.updateItem(itemId, newName, newPrice);
    var root = document.getElementById('root');
    MyHome.renderAllData(root);
}
function handleAsc(event) {
    var root = document.getElementById('root');
    event.preventDefault();
    MyHome.sortAscending();
    MyHome.renderAllData(root);
}
;
function handleDesc(event) {
    var root = document.getElementById('root');
    event.preventDefault();
    MyHome.sortDescending();
    MyHome.renderAllData(root);
}
