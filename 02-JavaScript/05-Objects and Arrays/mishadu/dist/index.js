var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
var zap = {
    items: [
        {
            id: 'dflt1',
            type: 'shoes',
            name: 'creels',
            price: 300
        },
        {
            id: 'dflt2',
            type: 'shoes',
            name: 'crimbs',
            price: 150
        },
        {
            id: 'dflt3',
            type: 'shoes',
            name: 'cruggs',
            price: 200
        },
        {
            id: 'dflt4',
            type: 'gummys',
            name: 'cola',
            price: 35
        }
    ],
    addItem: function (item) {
        this.items.push(item);
    },
    removeItem: function (id) {
        this.items = this.items.filter(function (item) { return item.id !== id; });
    },
    sortItems: function (sortBy) {
        if (sortBy === 'price low to high') {
            this.items.sort(function (a, b) { return a.price - b.price; });
        }
        else if (sortBy === 'price high to low') {
            this.items.sort(function (a, b) { return b.price - a.price; });
        }
        this.renderItems(document.getElementById('root'));
    },
    filterMaxPrice: function (maxPrice) {
        return this.items.filter(function (item) { return item.price <= maxPrice; });
    },
    filterByType: function (type) {
        return this.items.filter(function (item) { return item.type === type.toLowerCase(); });
    },
    renderByType: function (type, domElement) {
        var filtered = this.filterByType(type);
        console.log(filtered);
        this.renderItems(filtered, domElement);
    },
    renderFilteredByMaxPrice: function (maxPrice, domElement) {
        var maxPriceFiltered = this.filterMaxPrice(maxPrice);
        if (maxPrice) {
            this.renderItems(maxPriceFiltered, domElement);
        }
        else {
            this.renderAllData(rootHTML);
        }
    },
    renderAllData: function (domElement) {
        this.renderItems(this.items, domElement);
    },
    renderItems: function (list, domElement) {
        var html = '';
        list.forEach(function (item) {
            html += "<div class='card'>\n\n\n            <p contenteditable=\"true\">" + item.name + ": " + item.price + "</p>\n            <button onclick=\"handleDelete('" + item.id + "')\">DELETE</button>\n            \n            </div>";
        });
        domElement.innerHTML = html;
    }
};
var rootHTML = document.getElementById('root');
zap.renderItems(zap.items, rootHTML);
function handleSubmit(ev) {
    ev.preventDefault();
    var name = ev.target.elements.itemname.value;
    var price = +ev.target.elements.itemprice.value;
    var type = ev.target.elements.itemtype.value;
    var id = uid();
    var newItem = { id: id, name: name, price: price, type: type };
    zap.addItem(newItem);
    zap.renderItems(zap.items, rootHTML);
    ev.target.reset();
}
function handleSortChoise() {
    var sortBy = document.getElementById('sortbyprice').value;
    zap.sortItems(sortBy);
}
function handleTypeChoise() {
    var type = document.getElementById('sortbytype').value;
    zap.renderByType(type, rootHTML);
}
function handlePriceChange() {
    var maxprice = document.querySelector('[name=maxprice]').valueAsNumber;
    var rootHTML = document.getElementById('root');
    zap.renderFilteredByMaxPrice(maxprice, rootHTML);
}
function handleDelete(id) {
    console.log('ok');
    var root = document.getElementById('root');
    zap.removeItem(id);
    zap.renderAllData(root);
}
