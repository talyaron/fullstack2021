var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
var gucci = {
    items: [],
    addItems: function (item) {
        this.items.push(item);
        this.storeData();
        this.getData();
    },
    storeData: function () {
        localStorage.setItem('storeData', JSON.stringify(this.items));
    },
    getData: function () {
        this.items = JSON.parse(localStorage.getItem('storeData'));
    },
    deleteItem: function (id) {
        this.items = this.items.filter(function (item) { return item.id !== id; });
    },
    editItem: function (id, itemEdited) {
        console.log(id);
        var index = this.items.findIndex(function (item) { return item.id === id; });
        console.log(index);
        if (index >= 0) {
            this.items[index].title = itemEdited;
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
    renderItemsList: function (domElement, list) {
        var html = '';
        list.forEach(function (item) {
            html += "<div class='card'>\n            <div class=\"category\">" + item.select + "</div>\n            <div>\n            <div class=\"title\">" + item.title + "</div>\n            <div class=\"description\">" + item.description + "</div>\n            </div>\n            <div class=\"price\">&#8362;" + item.price + "</div>\n            <div class=\"itemPic\">\n            <img src=\"" + item.select + ".png\" alt=\"\">\n            <hr>\n            </div>\n            <div class=\"edit\"><a href=\"#editPopUP\">Edit</a></div>\n            <div class=\"popUpbox\" id=\"editPopUP\">\n            <figure>\n                <a href=\"#\" class=\"close\"></a>\n                <figcaption>\n                <form id=\"formAdd\" onsubmit=\"handleEditItems(event, '" + item.id + "')\">\n              <input type=\"text\" name=\"itemEdited\" placeholder=\"Edit title\">\n                <input type=\"submit\" value=\"SAVE\">\n            </form>\n                </figcaption>\n            </figure>\n            </div>\n            <div class=\"delete\">\n            <button onclick=\"handleDelete('" + item.id + "')\"><span style=\"color: #fdfdfd;\">X</span></button>\n            </div>\n            </div>";
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
    gucci.addItems({ id: id, select: select, title: title, description: description, price: price });
    var rootItems = document.getElementById('rootItems');
    gucci.renderItems(rootItems);
    ev.target.reset();
}
function handleEditItems(ev, id) {
    console.log(id);
    ev.preventDefault();
    var itemEdited = ev.target.elements.itemEdited.value;
    gucci.editItem(id, itemEdited);
    var rootItems = document.getElementById('rootItems');
    ev.target.reset();
    gucci.renderItems(rootItems);
}
function handlesortItemsDesc(ev) {
    var desc = ev.target.value;
    gucci.sortItems('desc');
    var rootItems = document.getElementById('rootItems');
    gucci.renderItems(rootItems);
}
function handlesortItemsAsc(ev) {
    var desc = ev.target.value;
    gucci.sortItems('asc');
    var rootItems = document.getElementById('rootItems');
    gucci.renderItems(rootItems);
}
function handleDelete(id) {
    var rootItems = document.getElementById('rootItems');
    gucci.deleteItem(id);
    gucci.renderItems(rootItems);
}
gucci.addItems({ id: "1", select: 'fashion', title: 'Jacket', description: 'product is an object or system made available for consumer use...<a href="">read more</a>', price: 400 });
gucci.addItems({ id: "2", select: 'games', title: 'Checkmate', description: 'product is an object or system made available for consumer use...<a href="">read more</a>', price: 200 });
gucci.addItems({ id: "3", select: 'fashion', title: 'Jacket', description: 'product is an object or system made available for consumer use...<a href="">read more</a>', price: 500 });
gucci.addItems({ id: "4", select: 'electronics', title: 'iMac', description: 'product is an object or system made available for consumer use...<a href="">read more</a>', price: 2000 });
var rootItems = document.getElementById('rootItems');
gucci.renderItems(rootItems);
gucci.getData();
console.log(gucci);
