console.log('owner');
var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
var stock = {
    items: [],
    addItem: function (newItem) {
        newItem.id = uid();
        this.items.push(newItem);
        console.log(this.items);
        this.renderStock(this.items);
        this.storeData();
    },
    storeData: function () {
        localStorage.setItem('storeData', JSON.stringify(this.items));
    },
    deleteItem: function (id) {
        this.items = this.items.filter(function (item) { return item.id !== id; });
    },
    updateItem: function (item) {
    },
    renderStock: function (items) {
        var HTML = '';
        items.forEach(function (item) {
            HTML += " <div class=\"card\"\n            <p> name: " + item.name + "</p>\n            <p> price: " + item.price + "</p>\n            <img src=\"" + item.img + "\">\n            <p> group: " + item.group + "</p>\n            <p> collection: " + item.Collection + "</p>\n            <p> function: " + item["function"] + "</p>\n            <p> movement: " + item.movement + "</p>\n            <p> case: " + item["case"] + "</p>\n            <p> diameter: " + item.diameter + "</p>\n            <p> dial: " + item.dial + "</p>\n            <p> bracelet: " + item.bracelet + "</p>\n            <button onclick=\"handleDelete('" + item.id + "')\">Delete</button>\n            <button onclick=\"handleEdit('" + item.id + "')\">Edit</button>\n           </div> ";
        });
        var rootHTML = document.getElementById('root');
        rootHTML.innerHTML = HTML;
    }
};
function handleSubmit(ev) {
    ev.preventDefault();
    var newItem = { name: "", price: 0, img: "", group: "", Collection: "", "function": "", movement: "", "case": "", diameter: "", dial: "", bracelet: "", id: 0 };
    for (var _i = 0, _a = ev.target; _i < _a.length; _i++) {
        var field = _a[_i];
        var name = field.name;
        switch (name) {
            case "name":
                newItem.name = field.value;
                break;
            case "price":
                newItem.price = field.value;
                break;
            case "img":
                newItem.img = field.value;
                break;
            case "group":
                newItem.group = field.value;
                break;
            case "Collection":
                newItem.Collection = field.value;
                break;
            case "function":
                newItem["function"] = field.value;
                break;
            case "movement":
                newItem.movement = field.value;
                break;
            case "case":
                newItem["case"] = field.value;
                break;
            case "diameter":
                newItem.diameter = field.value;
                break;
            case "dial":
                newItem.dial = field.value;
                break;
            case "bracelet":
                newItem.bracelet = field.value;
                break;
        }
    }
    stock.addItem(newItem);
}
function handleDelete(id) {
    stock.deleteItem(id);
    stock.renderStock(stock.items);
}
function handleEdit(id) {
    var form = document.querySelector('.updateForm');
    form.classList.add('visableForm');
    var EditedItem = stock.items.filter(function (item) { return item.id === id; })[0];
    console.log(EditedItem);
    for (var _i = 0, form_1 = form; _i < form_1.length; _i++) {
        var field = form_1[_i];
        var name = field.name;
        switch (name) {
            case "name":
                field.value = EditedItem.name;
                break;
            case "price":
                field.value = EditedItem.price;
                break;
            case "img":
                field.value = EditedItem.img;
                break;
            case "group":
                field.value = EditedItem.group;
                break;
            case "Collection":
                field.value = EditedItem.Collection;
                break;
            case "function":
                field.value = EditedItem["function"];
                break;
            case "movement":
                field.value = EditedItem.movement;
                break;
            case "case":
                field.value = EditedItem["case"];
                break;
            case "diameter":
                field.value = EditedItem.diameter;
                break;
            case "dial":
                field.value = EditedItem.dial;
                break;
            case "bracelet":
                field.value = EditedItem.bracelet;
                break;
        }
    }
}
function handleUpdate(ev) {
    ev.preventDefault();
}
stock.addItem({ name: 'DOUGLAS DAY 41', price: 45, img: "https://aviatorwatch.swiss/assets/catalog/douglas-day-date-41/AVIATOR-WATCH--DOUGLAS-DAY-DATE-41--V.3.35.0.278.4.webp", group: "AUTOMATIC WATCHES", Collection: "BRISTOL", "function": "Chronograph", movement: "Quartz", "case": "Gold PVD", diameter: "42 mm", dial: "Ivory", bracelet: "Leather", id: 0 });
