interface list {
    items: Array<{ description: string, price: number }>;
    renderList?: any
    sortListAsc(): any
    sortListDesc(): any
    filterList?(maxPrice): void
}
const list: list = {
    items: [],

    renderList(array) {
        let HTML = '';
        array.forEach(item => {
            HTML += `<li><p>The ${item.description} costs: ${item.price}$</p></li>`
        });
        document.getElementById(`rootList`).innerHTML = HTML
    },
    sortListAsc() {
        this.items.sort((a, b) => a.price - b.price)
    },
    sortListDesc() {
        this.items.sort((a, b) => b.price - a.price)
    },
    filterList(maxPrice) {
        if (maxPrice === "") {
            this.renderList(this.items); return;
        }
        let newFilter = this.items.filter(item => item.price <= (maxPrice))
        list.renderList(newFilter);
        console.log(newFilter)

    },

}
list.renderList(list.items)


function handleSubmit(ev) {
    console.log(ev.target.elements)
    ev.preventDefault();
    const description = ev.target.elements.description.value;
    const price = ev.target.elements.price.valueAsNumber;

    list.items.push({ description, price });
    list.renderList(list.items)
    ev.target.reset();

}
function handleClick(ev) {
    switch (ev.target.id) {
        case `asc`: list.sortListAsc()
            break;
        case `desc`: list.sortListDesc()
            break
    }
    list.renderList(list.items)
}
function handleFilter(ev) {
    console.log(ev.target.value);
    list.filterList(ev.target.value)
}
console.log(list)