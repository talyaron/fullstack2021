interface zap {
    items: Array<{ description: string, price: number, tel: number }>;
    renderzap?: any
    handlefilter?: any
    sortzapasc?: any
    sortzapdesc?: any
    pop?: any
    update:string
}


const form: any = {
    items: [],
    addItem(description, price, tel) {
        this.items.push({ description, price, tel });


        this.items.pop({ description, price, tel });

    },
 
    renderzap(array) {
        let HTML = ''
        array.forEach(item => {
            HTML += `<li><p>The ${item.description} costs: ${item.price}$</p></li>`
        });
        document.getElementById(`rootList`).innerHTML = HTML
    },


    handlefilter() {
        if (this.items.price >= 5000) {
            console.log(this.item.price);
            document.write(this.item.price)
        }

        let newFilter = this.items.filter(item => item.price <= (item.Price))
        form.renderzap(newFilter);
        console.log(newFilter)

    }
}
form.renderzap(form.items)



function handleSubmit(ev) {
    console.log(ev.target.elements)
    ev.preventDefault();
    const description = ev.target.elements.description.value;
    const price = ev.target.elements.price.valueAsNumber;

    form.items.push({ description, price });
    form.renderzap(form.items)
    ev.target.reset();

}
function handleFilter(ev) {
    console.log(ev.target.value);
    form.handlefilter(ev.target.value)
}
console.log(form)
