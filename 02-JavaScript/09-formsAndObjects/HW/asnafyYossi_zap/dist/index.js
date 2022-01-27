var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
var zap = {
    items: [],
    addItems: function (item) {
        this.items.push(item);
    },
    deleteItem: function (id) {
        this.items = this.items.filter(function (item) { return item.id !== id; });
    },
    editItem: function (item) {
        this.items.push(item);
    },
    removeItems: function (itemTitle) {
        var index = this.items.findIndex(function (item) { return item.title === itemTitle; });
        if (index >= 0) {
            this.items.splice(index, 1);
        }
    },
    newItems: function (price) {
        return this.items.filter(function (item) { return item.price > price; });
    },
    sortItems: function (orderBy) {
        if (orderBy === void 0) { orderBy = 'asc'; }
        if (orderBy === 'asc') {
            this.items.sort(function (a, b) { return a.price - b.price; });
        }
        else if (orderBy === 'desc') {
            this.items.sort(function (a, b) { return b.price - a.price; });
        }
    },
    renderItems: function (domElement) {
        var items = this.items;
        this.renderItemsList(domElement, items);
    },
    filterItemsByMaxPrice: function (price) {
        return this.items.filter(function (item) { return item.price < price; });
    },
    renderFilter: function (domElement, filtered) {
        this.renderItemsList(domElement, filtered);
    },
    renderItemsList: function (domElement, list) {
        var html = '';
        list.forEach(function (item) {
            html += "<div class='card'>\n            <div class=\"category\">&#9632; " + item.select + "</div>\n            <div>\n            <div class=\"title\">" + item.title + "</div>\n            <div class=\"description\">" + item.description + "</div>\n            </div>\n            <div class=\"price\">&#8362;" + item.price + "</div>\n            <div class=\"itemPic\">\n            <img src=\"" + item.select + ".png\" alt=\"\">\n            <hr>\n            </div>\n            <div class=\"edit\"><a href=\"#editPopUP\">Edit</a></div>\n            <div class=\"popUpbox\" id=\"editPopUP\">\n            <figure>\n                <a href=\"#\" class=\"close\"></a>\n                <figcaption>\n                <form id=\"formAdd\" onsubmit='handleEditItems(event)'>\n                <select name=\"select\" id=\"select\" placeholder=\"select\">\n                <option>select</option>\n                <option>electronics</option>\n                <option>fashion</option>\n                <option>games</option>\n               </select>\n               <input type=\"text\" name=\"title\" placeholder=\"Edit title\">\n               <input type='number' name=\"price\" placeholder=\"Edit price\">\n                <input type=\"submit\" value=\"SAVE\">\n            </form>\n                </figcaption>\n            </figure>\n            </div>\n            <div class=\"delete\">\n            <button onclick=\"handleDelete('" + item.id + "')\"><span style=\"color: #d21ec3;\">X</span></button>\n            </div>\n            </div>";
        });
        domElement.innerHTML = html;
    }
};
function handleaddItems(ev) {
    ev.preventDefault();
    var select = ev.target.elements.select.value;
    var title = ev.target.elements.title.value;
    var description = ev.target.elements.description.value;
    var price = ev.target.elements.price.valueAsNumber;
    var id = uid();
    zap.addItems({ id: id, select: select, title: title, description: description, price: price });
    var rootItems = document.getElementById('rootItems');
    zap.renderItems(rootItems);
    ev.target.reset();
}
function handleEditItems(ev) {
    ev.preventDefault();
    var select = ev.target.elements.select.value;
    var title = ev.target.elements.title.value;
    var price = ev.target.elements.price.valueAsNumber;
    zap.editItem({ select: select, title: title, price: price });
    var rootItems = document.getElementById('rootItems');
    zap.renderItems(rootItems);
    ev.target.reset();
}
function handleremoveItems(ev) {
    ev.preventDefault();
    var title = ev.target.elements.remove.value;
    zap.removeItems(title);
    var rootItems = document.getElementById('rootItems');
    zap.renderItems(rootItems);
}
function handlesortItemsDesc(ev) {
    var desc = ev.target.value;
    zap.sortItems('desc');
    var rootItems = document.getElementById('rootItems');
    zap.renderItems(rootItems);
}
function handlesortItemsAsc(ev) {
    var desc = ev.target.value;
    zap.sortItems('asc');
    var rootItems = document.getElementById('rootItems');
    zap.renderItems(rootItems);
}
function handleFilter(e) {
    var price = e.target.valueAsNumber;
    var rootItems = document.getElementById('rootItems');
    if (price) {
        var filtered = zap.filterItemsByMaxPrice(price);
        zap.renderFilter(rootItems, filtered);
    }
    else {
        zap.renderItems(rootItems);
    }
}
function handleDelete(id) {
    var rootItems = document.getElementById('rootItems');
    zap.deleteItem(id);
    zap.renderItems(rootItems);
}
function handleEdit(id) {
    var rootItems = document.getElementById('rootItems');
    zap.editItem(id);
    zap.renderItems(rootItems);
}
zap.addItems({ id: '', select: 'fashion', title: 'Jacket', description: 'product is an object or system made available for consumer use...<a href="">read more</a>', price: 400 });
zap.addItems({ id: '', select: 'games', title: 'Checkmate', description: 'product is an object or system made available for consumer use...<a href="">read more</a>', price: 200 });
zap.addItems({ id: '', select: 'fashion', title: 'Jacket', description: 'product is an object or system made available for consumer use...<a href="">read more</a>', price: 500 });
zap.addItems({ id: '', select: 'electronics', title: 'iMac', description: 'product is an object or system made available for consumer use...<a href="">read more</a>', price: 2000 });
var rootItems = document.getElementById('rootItems');
zap.renderItems(rootItems);
// function handlePriceChange(ev) {
//     console.log(ev.target.valueAsNumber)
// }
console.log(zap);
