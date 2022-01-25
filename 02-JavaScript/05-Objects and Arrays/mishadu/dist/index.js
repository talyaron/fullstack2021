var zap = {
    items: [
        {
            id: 1,
            type: 'shoes',
            name: 'creels',
            price: 300
        },
        {
            id: 2,
            type: 'shoes',
            name: 'crimbs',
            price: 150
        },
        {
            id: 3,
            type: 'shoes',
            name: 'creels',
            price: 200
        },
        {
            id: 4,
            type: 'gummys',
            name: 'cola',
            price: 35
        }
    ],
    addItem: function (item) {
        this.items.push(item);
    },
    removeItem: function (itemName) {
        var index = this.items.findIndex(function (item) { return item.name === itemName; });
        if (index >= 0) {
            this.items.splice(index, 1);
        }
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
            html += "<div class='card'>\n            <p>" + item.name + ": " + item.price + "</p></div>";
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
    var newItem = { name: name, price: price, type: type };
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
