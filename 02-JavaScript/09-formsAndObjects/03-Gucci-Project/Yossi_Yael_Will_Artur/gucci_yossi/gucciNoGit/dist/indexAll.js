var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
var gucci = {
    items: [
        {
            id: uid(),
            select: 'Samsung',
            title: 'Edje',
            description: 'The best watch on the market 2022, now in a new design and gifts!',
            price: 300
        }
    ],
    addItems: function (select, title, description, price) {
        var id = uid();
        this.items.push({ id: id, select: select, title: title, description: description, price: price });
        this.storeData();
        this.getData();
    },
    editItem: function (id, title, price) {
        var index = this.items.findIndex(function (item) { return item.id === id; });
        if (index >= 0) {
            this.items[index].title = title;
            this.items[index].price = price;
        }
    },
    // newItems(price): Array<Items> {
    //     return this.items.filter((item) => { return item.price > price })
    // },
    sortItems: function (orderBy) {
        if (orderBy === void 0) { orderBy = 'asc'; }
        if (orderBy === 'asc') {
            this.items.sort(function (a, b) { return b.price - a.price; });
        }
        else if (orderBy === 'desc') {
            this.items.sort(function (a, b) { return a.price - b.price; });
        }
    },
    storeData: function () {
        localStorage.setItem('storeData', JSON.stringify(this.items));
    },
    getData: function () {
        var items = JSON.parse(localStorage.getItem("storeData"));
        if (items) {
            this.items = items;
        }
    },
    deleteItem: function (id) {
        this.items = this.items.filter(function (item) { return item.id !== id; });
        localStorage.setItem('storeData', JSON.stringify(this.items));
    },
    renderItems: function (list, domElement) {
        var html = '';
        list.forEach(function (item) {
            html +=
                "<div class='containerCard'>\n            <div class='card'>\n            <div class=\"category\">" + item.select + "</div>\n            <div>\n            <div class=\"title\">" + item.title + "</div>\n            <div class=\"description\">" + item.description + "</div>\n            </div>\n            <div class=\"price\">&#8362;" + item.price + "</div>\n\n            <div class=\"main__item pic" + item.select + " \"></div>\n            <div class=\"itemPic\">\n            <img src=\"" + item.select + ".jpg\" alt=\"\">\n            <hr>\n            </div>\n\n            <div class=\"delete\">\n            <button onclick=\"handleDelete('" + item.id + "')\"><span style=\"color: #ff0000;\">Delete</span></button>\n            </div>\n            </div>\n         \n            <div class=\"edit\">\n            <form id=\"formAdd\" onsubmit=\"handleEditItems(event, '" + item.id + "')\">\n            <input type=\"text\" name=\"title\" placeholder=\"Edit title\" value=\"" + item.title + "\">\n            <input type=\"number\" name=\"price\" placeholder=\"Edit price\" value=\"" + item.price + "\">\n            <input type=\"submit\" id=\"update\" value=\"UPDATE\">\n            </form>\n            </div>\n            </div>\n            <br>";
        });
        localStorage.setItem('storeData', JSON.stringify(this.items));
        domElement.innerHTML = html;
    },
    getDataStore: function (list, rootItemsStore) {
        var htmlStore = '';
        list.forEach(function (item) {
            htmlStore +=
                "<div class=\"main__item pic" + item.select + " \">\n                <button class=\"buy-now\" type=\"buttom\"><i class=\"fas fa-shopping-cart\"></i>Buy now</button>\n                <span class=\"price\">price:&#36;" + item.price + "</span>\n            </div>";
        });
        localStorage.setItem('storeData', JSON.stringify(this.items));
        rootItemsStore.innerHTML = htmlStore;
    }
};
function handleaddItems(ev) {
    ev.preventDefault();
    var select = ev.target.elements.select.value;
    var title = ev.target.elements.title.value;
    var description = ev.target.elements.description.value;
    var price = ev.target.elements.price.valueAsNumber;
    gucci.addItems(select, title, description, price);
    var rootItems = document.getElementById('rootItems');
    gucci.renderItems(gucci.items, rootItems);
    ev.target.reset();
}
function handleEditItems(ev, id) {
    console.log(id);
    ev.preventDefault();
    var title = ev.target.elements.title.value;
    var price = ev.target.elements.price.valueAsNumber;
    gucci.editItem(id, title, price);
    var rootItems = document.getElementById('rootItems');
    ev.target.reset();
    gucci.renderItems(gucci.items, rootItems);
}
function handlesortItemsDesc(ev) {
    // const desc = ev.target.value;
    gucci.sortItems('desc');
    var rootItemsStore = document.getElementById('rootItemsStore');
    gucci.getDataStore(gucci.items, rootItemsStore);
}
function handlesortItemsAsc(ev) {
    // const desc = ev.target.value;
    gucci.sortItems('asc');
    var rootItemsStore = document.getElementById('rootItemsStore');
    gucci.getDataStore(gucci.items, rootItemsStore);
}
function handleDelete(id) {
    var rootItems = document.getElementById('rootItems');
    gucci.deleteItem(id);
    gucci.renderItems(gucci.items, rootItems);
}
var rootItems = document.getElementById('rootItems');
var rootItemsStore = document.getElementById('rootItemsStore');
gucci.getData();
gucci.storeData();
gucci.renderItems(gucci.items, rootItems);
gucci.getDataStore(gucci.items, rootItemsStore);
// let htmlStore = '';
// list.forEach(item => {
//     htmlStore += `<div class='main'>
//     <div>${item.select}</div>
//     <div>${item.title}</div>
//     <div>${item.description}</div>
//     <div>&#8362;${item.price}</div>
//     <div>
//     <img src="${item.select}.jpg" alt="">
//     <hr>
//     </div>`})
