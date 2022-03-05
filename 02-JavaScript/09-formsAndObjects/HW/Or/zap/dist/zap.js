var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
var list = {
    items: [],
    renderList: function (array) {
        var HTML = '';
        array.forEach(function (item) {
            HTML += "<li><p><H2>" + item.type + ":<H2/> The " + item.description + " costs: " + item.price + "$\n            <i onclick=\"handleDelete('" + item.id + "')\" class=\"fas fa-times-circle\"></i></p></li>";
        });
        document.getElementById("rootList").innerHTML = HTML;
    },
    deleteItem: function (id) {
        this.items = this.items.filter(function (item) { return item.id !== id; });
        this.renderList(this.items);
    },
    sortListAsc: function () {
        this.items.sort(function (a, b) { return a.price - b.price; });
    },
    sortListDesc: function () {
        this.items.sort(function (a, b) { return b.price - a.price; });
    },
    filterType: function (type) {
        return this.items.filter(function (item) { return item.type === type; });
    },
    renderByType: function (type) {
        var filterd = this.filterType(type);
        this.renderList(filterd);
    },
    filterList: function (maxPrice) {
        if (maxPrice === "") {
            this.renderList(this.items);
            return;
        }
        var newFilter = this.items.filter(function (item) { return item.price <= (maxPrice); });
        list.renderList(newFilter);
        console.log(newFilter);
    }
};
list.renderList(list.items);
function handleDelete(id) {
    console.log(id);
    list.deleteItem(id);
}
function handleSubmit(ev) {
    console.dir(ev.target);
    ev.preventDefault();
    var description = ev.target.elements.description.value;
    var price = ev.target.elements.price.valueAsNumber;
    var type = ev.target.elements.type.value;
    var id = uid();
    list.items.push({ id: id, type: type, description: description, price: price });
    list.renderList(list.items);
    ev.target.reset();
}
function handleClick(ev) {
    switch (ev.target.id) {
        case "asc":
            list.sortListAsc();
            break;
        case "desc":
            list.sortListDesc();
            break;
    }
    list.renderList(list.items);
}
function handleFilter(ev) {
    console.log(ev.target.value);
    list.filterList(ev.target.value);
    // list.renderList(list.items)
}
function handleSelect(ev) {
    var type = ev.target.value;
    if (type === 'all') {
        list.renderList(list.items);
    }
    else {
        console.log(type);
        list.renderByType(type);
    }
}
console.log(list);
