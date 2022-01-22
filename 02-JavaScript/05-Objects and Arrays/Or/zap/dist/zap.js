var list = {
    items: [],
    renderList: function (domElements) {
        var HTML = '';
        this.items.forEach(function (item) {
            HTML += "<li><p> " + item.description + " " + item.price + "$</p></li>";
        });
        domElements.innerHTML = HTML;
    },
    sortListAsc: function () {
        this.items.sort(function (a, b) { return a.price - b.price; });
    },
    sortListDesc: function () {
        this.items.sort(function (a, b) { return b.price - a.price; });
    }
};
var rootList = document.getElementById("rootList");
list.renderList(rootList);
function handleSubmit(ev) {
    console.log(ev.target.elements);
    ev.preventDefault();
    var description = ev.target.elements.description.value;
    var price = ev.target.elements.price.valueAsNumber;
    list.items.push({ description: description, price: price });
    list.renderList(rootList);
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
    list.renderList(rootList);
}
function handleFilter(ev) {
    console.log(ev.target.value);
    var maxPrice = ev.target.value;
    list.items.filter(function (item) {
        return item.price > maxPrice;
    });
    console.log(list);
    list.renderList(rootList);
}
console.log(list);
