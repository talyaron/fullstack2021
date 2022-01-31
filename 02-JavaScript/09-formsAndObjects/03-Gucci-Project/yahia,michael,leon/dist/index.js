var nikeItems = {
    items: [],
    additems: function (list) {
        this.items.push(list);
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
