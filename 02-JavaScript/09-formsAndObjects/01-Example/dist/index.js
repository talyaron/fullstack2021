console.log('ok');
var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
var myZap = {
    // id:0,
    data: [],
    addItem: function (name, type) {
        var id = uid();
        this.data.push({ id: id, name: name, type: type });
        //sequntial id
        // this.data.push({id:this.id, name, type });
        // this.id++;
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
            html += "<div class=\"item\">\n            <p>" + item.name + "</p>\n            <button onclick=\"handleDelete('" + item.id + "')\">Delete</button>\n            </div>";
        });
        domElement.innerHTML = html;
    },
    renderAllData: function (domElement) {
        this.render(this.data, domElement);
    },
    renderByType: function (type, domElement) {
        var filterd = this.filterByType(type);
        this.render(filterd, domElement);
    }
};
myZap.addItem('lenovo 50', 'computer');
myZap.addItem('lenovo 60', 'computer');
myZap.addItem('lenovo 70', 'computer');
myZap.addItem('lenovo 80', 'computer');
myZap.addItem('lenovo 100', 'computer');
myZap.addItem('lenovo 120', 'computer');
myZap.addItem('shirt', 'clothes');
myZap.addItem('pants', 'clothes');
myZap.addItem('skirt', 'clothes');
myZap.addItem('trousers', 'clothes');
myZap.addItem('scarf', 'clothes');
console.dir(myZap.data);
var root = document.getElementById('root');
myZap.renderAllData(root);
function handleSelect(ev) {
    var root = document.getElementById('root');
    var type = ev.target.value;
    if (type === 'all') {
        myZap.renderAllData(root);
    }
    else {
        console.log(type);
        myZap.renderByType(type, root);
    }
}
function handleDelete(id) {
    console.log(id);
    var root = document.getElementById('root');
    myZap.deleteItem(id);
    myZap.renderAllData(root);
}
