var zap = {
    items: [
        {
            name: 'adidas',
            price: 300
        },
        {
            name: 'toe',
            price: 150
        },
        {
            name: 'creels',
            price: 200
        },
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
    renderItems: function (domElement, maxprice) {
        var html = '';
        var mpitems = this.items.slice();
        if (maxprice) {
            mpitems = mpitems.filter(function (item) {
                return item.price <= maxprice;
            });
        }
        mpitems.forEach(function (item) {
            html += "<div class='card'>\n            <p>" + item.name + ": " + item.price + "</p></div>";
        });
        domElement.innerHTML = html;
    },
    sortItems: function (sortBy) {
        if (sortBy === 'price low to high') {
            this.items.sort(function (a, b) { return a.price - b.price; });
        }
        else if (sortBy === 'price high to low') {
            this.items.sort(function (a, b) { return b.price - a.price; });
        }
        this.renderItems(document.getElementById('root'));
    }
};
var rootHTML = document.getElementById('root');
zap.renderItems(rootHTML);
function handleSubmit(ev) {
    ev.preventDefault();
    var name = ev.target.elements.itemname.value;
    var price = +ev.target.elements.itemprice.value;
    var newItem = { name: name, price: price };
    zap.addItem(newItem);
    zap.renderItems(rootHTML);
    ev.target.reset();
}
function handleChoise() {
    var sortBy = document.getElementById('sortby').value;
    console.log(sortBy);
    zap.sortItems(sortBy);
}
function handlePriceChange() {
    var maxprice = document.querySelector('[name=maxprice]').valueAsNumber;
    zap.renderItems(rootHTML, maxprice);
}
