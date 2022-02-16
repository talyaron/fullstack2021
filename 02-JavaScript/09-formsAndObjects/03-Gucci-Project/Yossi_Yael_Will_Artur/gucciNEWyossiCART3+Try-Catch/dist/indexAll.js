var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
var gucci = {
    items: [],
    cartItems: [],
    addItems: function (select, description, price) {
        var id = uid();
        this.items.push({
            id: id,
            select: select,
            description: description,
            price: price
        });
        this.storeData();
        this.getData();
    },
    addItemsCart: function (Items) {
        this.cartItems.push(Items);
    },
    editItem: function (id, select, description, price) {
        var index = this.items.findIndex(function (item) { return item.id === id; });
        if (index >= 0) {
            this.items[index].select = select;
            this.items[index].description = description;
            this.items[index].price = price;
        }
        this.storeData();
        this.getData();
    },
    sortItems: function (orderBy) {
        if (orderBy === void 0) { orderBy = 'asc'; }
        if (orderBy === 'asc') {
            this.items.sort(function (a, b) {
                return b.price - a.price;
            });
        }
        else if (orderBy === 'desc') {
            this.items.sort(function (a, b) {
                return a.price - b.price;
            });
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
                "<div class='containerCard'>\n                    <div class='card'>\n                        <div class=\"category\">" + item.select + "</div>\n                        <div class=\"description\">" + item.description + "</div>\n                        <div class=\"price\">&#36;" + item.price + "</div>\n                        <div class=\"imgPic\">\n                          <div class=\"main__item pic" + item.select + " \"></div>\n                        </div>\n                        <div class=\"itemPicLine\">\n                            <img src=\"" + item.select + ".jpg\" alt=\"\">\n                            <hr>\n                        </div>\n                        <div class=\"delete\">\n                         <button onclick=\"handleDelete('" + item.id + "')\"><span style=\"color: #ff0000;\">Delete</span></button>\n                        </div>\n                        <div class=\"edit\">\n                            <form id=\"formAdd\" onsubmit=\"handleEditItems(event, '" + item.id + "')\">\n                            <input type=\"text\" name=\"select\" placeholder=\"Edit select\" value=\"" + item.select + "\">\n                            <input type=\"number\" name=\"price\" placeholder=\"Edit price\" value=\"" + item.price + "\">\n                            <input type=\"text\" name=\"description\" placeholder=\"Description\" value=\"" + item.description + "\">\n                            <input type=\"submit\" id=\"update\" value=\"UPDATE\">\n                            </form>\n                        </div>\n                    </div>\n                </div>\n                <br>";
        });
        localStorage.setItem('storeData', JSON.stringify(this.items));
        domElement.innerHTML = html;
    },
    getDataStore: function (list, rootItemsStore) {
        var htmlStore = '';
        list.forEach(function (item) {
            htmlStore +=
                "<div class=\"main__item pic" + item.select + "\">\n                <span class=\"title\">" + item.select + "</span>\n                <span class=\"price\">&#36;" + item.price + "</span>\n                <button class=\"buy-now\" onclick=\"handleaddItemsCart(event, '" + item.id + "')\" type=\"buttom\"><i class=\"fas fa-shopping-cart\"></i>Buy now</button>\n            </div>";
        });
        rootItemsStore.innerHTML = htmlStore;
    },
    renderitemcart: function (list, rootItemsStoreCart) {
        var htmlCart = '';
        console.log(list);
        list.forEach(function (item) {
            htmlCart += "<div class=\"sortPopUpBag\">\n\n            <div class=\"imgCart\">\n            <div class=\"main__item pic" + item.select + "\"></div>\n            </div>\n\n            <div class=\"title\">" + item.select + "</div>\n\n            <div class=\"price\">&#36;" + item.price + "</div>\n\n            </div><hr>\n            ";
        });
        rootItemsStoreCart.innerHTML = htmlCart;
    }
};
function handleaddItems(ev) {
    ev.preventDefault();
    try {
        var select = ev.target.elements.select.value;
        // const title = ev.target.elements.title.value;
        var description = ev.target.elements.description.value;
        var price = ev.target.elements.price.valueAsNumber;
        gucci.addItems(select, description, price);
        var rootItems = document.getElementById('rootItems');
        gucci.renderItems(gucci.items, rootItems);
        ev.target.reset();
        if (!rootItems)
            throw new Error('no "rootitems" in DOM');
    }
    catch (error) {
        console.error(error);
    }
}
//////////////////////////////////////////
function handleaddItemsCart(ev, cartItemId) {
    try {
        var cartItem = gucci.items.filter(function (item) { return item.id == cartItemId; })[0];
        gucci.addItemsCart(cartItem);
        var rootItemsStoreCart = document.getElementById('rootItemsStoreCart');
        gucci.renderitemcart(gucci.cartItems, rootItemsStoreCart);
        if (!rootItemsStoreCart)
            throw new Error('no "rootItemsStoreCart" in DOM');
    }
    catch (error) {
        console.error(error);
    }
}
function handleEditItems(ev, id) {
    try {
        console.log(id);
        ev.preventDefault();
        var select = ev.target.elements.select.value;
        var description = ev.target.elements.description.value;
        var price = ev.target.elements.price.valueAsNumber;
        gucci.editItem(id, select, description, price);
        var rootItems = document.getElementById('rootItems');
        ev.target.reset();
        gucci.renderItems(gucci.items, rootItems);
        if (!rootItems)
            throw new Error('no "rootItems" in DOM');
    }
    catch (error) {
        console.error(error);
    }
}
function handlesortItemsDesc(ev) {
    try {
        gucci.sortItems('desc');
        var rootItemsStore = document.getElementById('rootItemsStore');
        gucci.getDataStore(gucci.items, rootItemsStore);
        if (!rootItemsStore)
            throw new Error('no "rootItemsStore" in DOM');
    }
    catch (error) {
        console.error(error);
    }
}
function handlesortItemsAsc(ev) {
    try {
        gucci.sortItems('asc');
        var rootItemsStore = document.getElementById('rootItemsStore');
        gucci.getDataStore(gucci.items, rootItemsStore);
        if (!rootItemsStore)
            throw new Error('no "rootItemsStore" in DOM');
    }
    catch (error) {
        console.error(error);
    }
}
function handleDelete(id) {
    try {
        var rootItems = document.getElementById('rootItems');
        gucci.deleteItem(id);
        gucci.renderItems(gucci.items, rootItems);
        if (!rootItems)
            throw new Error('no "rootItems" in DOM');
    }
    catch (error) {
        console.error(error);
    }
}
gucci.getData();
gucci.storeData();
function rendrOwenerItems() {
    try {
        var rootItems = document.getElementById('rootItems');
        gucci.renderItems(gucci.items, rootItems);
        if (!rootItems)
            throw new Error('no "rootItems" in DOM');
    }
    catch (error) {
        console.error(error);
    }
}
function handleRenderAllItems() {
    try {
        gucci.getData();
        var rootItemsStore = document.getElementById('rootItemsStore');
        gucci.getDataStore(gucci.items, rootItemsStore);
        if (!rootItemsStore)
            throw new Error('no "rootItemsStore" in DOM');
    }
    catch (error) {
        console.error(error);
    }
}
// When the user clicks on div, open the popup
function myFunction() {
    try {
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
        if (!popup)
            throw new Error('no "popup" in DOM');
    }
    catch (error) {
        console.error(error);
    }
}
// When the user clicks on div, open the popup
function myFunctionBag() {
    try {
        var popup = document.getElementById("myPopupBag");
        popup.classList.toggle("show");
        if (!popup)
            throw new Error('no "popup" in DOM');
    }
    catch (error) {
        console.error(error);
    }
}
