var nikeItems = {
    items: [],
    additems: function (list) {
        this.items.push(list);
        console.log(this.items);
    },
    sortAsc: function () {
        this.items.sort(function (a, b) { return a.price - b.price; });
        console.log(this.items);
    },
    sortDes: function () {
        this.items.sort(function (a, b) { return b.price - a.price; });
        console.log(this.items);
    }
};
function handleSubmit(event) {
    event.preventDefault();
    var name = event.target.elements.description.value;
    var price = event.target.elements.price.value;
    nikeItems.additems({ name: name, price: price });
    event.target.reset();
}
function handleAsce() {
    nikeItems.sortAsc();
}
function handleDesce() {
    nikeItems.sortDes();
}
