var list = {
    items: []
};
function handleSubmit(ev) {
    console.log(ev.target.elements);
    ev.preventDefault();
    // ev.target.reset();
    var description = ev.target.elements.description.value;
    var price = ev.target.elements.price.valueAsNumber;
    list.items.push({ description: description, price: price });
    // list.addItem({description,price})
}
console.log(list);
