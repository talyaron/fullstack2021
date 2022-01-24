interface zap {
    items: Array<{ description: string, price: number}>;
    renderzap?: any
    handlefilter?: any
    sortzapasc?:any
    sortzapdesc?:any
}

const form: zap = {
    items: [],

    renderzap(array) {
        let HTML = '';
        array.forEach(item => {
            HTML += `<li><p>The ${item.description} costs: ${item.price}$</p></li>`
        });
        document.getElementById(`rootList`).innerHTML = HTML
    },
    sortzapasc() {
        this.items.sort((a, b) => a.price - b.price)
    },
    sortzapdesc() {
        this.items.sort((a, b) => b.price - a.price)
    },
    handlefilter(maxPrice) {
        if (maxPrice == "") {
            this.renderList(this.items);
            return;
        }
        let newFilter = this.items.filter(item => item.price <= (maxPrice))
        form.renderzap(newFilter);
        console.log(newFilter)

    },

}
form.renderzap(form.items)


function handleSubmit(ev) {
    console.log(ev.target.elements)
    ev.preventDefault();
    const description = ev.target.elements.description.value;
    const price = ev.target.elements.price.valueAsNumber;

    form.items.push({ description, price});
    form.renderzap(form.items)
    ev.target.reset();

}
function handleFilter(ev) {
    console.log(ev.target.value);
    form.handlefilter(ev.target.value)
}
console.log(form)