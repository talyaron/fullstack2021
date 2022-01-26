var zapShop = {
    items: [],
    tempItem: [],
    addItem: function (item) {
        this.items.push(item);
    },
    render: function (list, domElement) {
        var html = '';
        list.forEach(function (item) {
            html += "<div class = 'card_item'>\n            <p> " + item.description + " | Price: " + item.price + "$</p>";
        });
        html += "</div>";
        domElement.innerHTML = html;
    },
    renderItem: function (domElement) {
        this.render(this.items, domElement);
    },
    // renderTempItem(domElement) {
    //     let html = '';
    //     this.tempItem.forEach(item => {
    //         html += `<div class = 'card_item'>
    //         <p>  ${item.description}  : ${item.price}$</p>`
    //     })
    //     html += `</div>`;
    //     domElement.innerHTML = html;
    // },
    sortItemAsc: function () {
        this.items.sort(function (a, b) { return a.price - b.price; });
        this.tempItem.sort(function (a, b) { return a.price - b.price; });
    },
    sortItemDesc: function () {
        this.items.sort(function (a, b) { return b.price - a.price; });
        this.tempItem.sort(function (a, b) { return b.price - a.price; });
    }
};
zapShop.addItem({ type: 'computer', description: 'Lenovo ThinkPadT15p', price: 850 });
zapShop.addItem({ type: 'smartphone', description: 'Apple iPhone 13', price: 700 });
zapShop.addItem({ type: 'kitchen accessory', description: 'cutting board', price: 30 });
var rootItems = document.getElementById('rootItems');
zapShop.renderItem(rootItems);
function handleItem(ev) {
    ev.preventDefault();
    console.dir(ev);
    var description = ev.target.elements.description.value;
    var price = ev.target.elements.price.valueAsNumber;
    var type = ev.target.elements.type.value;
    zapShop.addItem({ type: type, description: description, price: price });
    var rootItems = document.getElementById('rootItems');
    zapShop.renderItem(rootItems);
}
function handleSortDesc(ev) {
    ev.preventDefault();
    zapShop.sortItemDesc();
    var rootItems = document.getElementById('rootItems');
    zapShop.renderItem(rootItems);
}
function handleSortAsc(ev) {
    ev.preventDefault();
    zapShop.sortItemAsc();
    var rootItems = document.getElementById('rootItems');
    zapShop.renderItem(rootItems);
}
function handlePrice(ev) {
    var amonut = ev.target.valueAsNumber;
    zapShop.tempItem = zapShop.items.filter(function (ele) { return ele.price < amonut; });
    if (zapShop.tempItem.length > 0) {
        var rootItems_1 = document.getElementById('rootItems');
        zapShop.renderTempItem(rootItems_1);
    }
    else {
        var rootItems_2 = document.getElementById('rootItems');
        zapShop.renderItem(rootItems_2);
    }
}
