var list = {
    items: [],
    renderList: function (array) {
        var HTML = '';
        array.forEach(function (item) {
            HTML += "<li><p>The " + item.description + " costs: " + item.price + "$</p></li>";
        });
        document.getElementById("rootList").innerHTML = HTML;
    },
    sortListAsc: function () {
        this.items.sort(function (a, b) { return a.price - b.price; });
    },
    sortListDesc: function () {
        this.items.sort(function (a, b) { return b.price - a.price; });
    },
    filterList: function (maxPrice) {
        if (maxPrice == "") {
            this.renderList(this.items);
            return;
        }
        var newFilter = this.items.filter(function (item) { return item.price <= (maxPrice); });
        list.renderList(newFilter);
        console.log(newFilter);
    }
};
list.renderList(list.items);
function handleSubmit(ev) {
    console.log(ev.target.elements);
    ev.preventDefault();
    var description = ev.target.elements.description.value;
    var price = ev.target.elements.price.valueAsNumber;
    list.items.push({ description: description, price: price });
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
}
console.log(list);
