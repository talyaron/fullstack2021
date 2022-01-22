interface list {
    items: Array<{ description: string, price: number }>;
    renderList?: any
    sortListAsc(): any
    sortListDesc(): any
    filterList?(): any
}
const list: list = {
    items: [],

    renderList(domElements) {
        let HTML = '';
        this.items.forEach(item => {
            HTML += `<li><p> ${item.description} ${item.price}$</p></li>`
        });
        domElements.innerHTML = HTML
    },
    sortListAsc() {
        this.items.sort((a, b) => a.price - b.price)
    },
    sortListDesc() {
        this.items.sort((a, b) => b.price - a.price)
    }

}
const rootList = document.getElementById(`rootList`)
list.renderList(rootList)


function handleSubmit(ev) {
    console.log(ev.target.elements)
    ev.preventDefault();
    const description = ev.target.elements.description.value;
    const price = ev.target.elements.price.valueAsNumber;

    list.items.push({ description, price });
    list.renderList(rootList)
    ev.target.reset();

}
function handleClick(ev) {
    switch (ev.target.id) {
        case `asc`: list.sortListAsc()
            break;
        case `desc`: list.sortListDesc()
            break
    }
    list.renderList(rootList)
}
function handleFilter(ev) {
    console.log(ev.target.value);
    const maxPrice: number = ev.target.value;
    list.items.filter((item) => {
        return item.price > maxPrice;
    })
    console.log(list)
    list.renderList(rootList)
}
console.log(list)